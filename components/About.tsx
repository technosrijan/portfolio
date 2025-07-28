"use client"

import { motion, useMotionValue, animate } from "framer-motion"
import { GraduationCap, MapPin, User, ChevronRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)
  const x = useMotionValue(0)

  const slideWidth = 480 // px, adjusted for better desktop containment

  // Responsive slide width for swipeable container
  const [effectiveSlideWidth, setEffectiveSlideWidth] = useState(slideWidth)
  // Mobile detection for animation and effects
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setEffectiveSlideWidth(window.innerWidth - 48)
        setIsMobile(true)
      } else {
        setEffectiveSlideWidth(slideWidth)
        setIsMobile(false)
      }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  // Animate to slide and update state after animation completes
  const mobileTransition = { type: "tween" as const, duration: 0.35, ease: "easeInOut" as const };
  const desktopTransition = { type: "spring" as const, stiffness: 400, damping: 28, bounce: 0.25 };
  const transition: any = isMobile ? mobileTransition : desktopTransition;

  const goToSlide = (target: number) => {
    if (target === currentSlide) return
    const to = target === 0 ? 0 : -effectiveSlideWidth
    animate(x, to, {
      ...transition,
      onComplete: () => setCurrentSlide(target)
    } as any)
  }

  const handleDragEnd = (_event: any, info: any) => {
    setDragging(false)
    const threshold = 100
    if (info.offset.x < -threshold && currentSlide === 0) {
      animate(x, -effectiveSlideWidth, {
        ...transition,
        onComplete: () => setCurrentSlide(1)
      } as any)
    } else if (info.offset.x > threshold && currentSlide === 1) {
      animate(x, 0, {
        ...transition,
        onComplete: () => setCurrentSlide(0)
      } as any)
    } else {
      // Snap back to current slide
      animate(x, currentSlide === 0 ? 0 : -effectiveSlideWidth, {
        ...transition
      } as any)
    }
  }

  // Keep x in sync with currentSlide and effectiveSlideWidth
  useEffect(() => {
    x.set(currentSlide === 0 ? 0 : -effectiveSlideWidth)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, effectiveSlideWidth])

  return (
    <section id="about" className="py-12 sm:py-20 px-3 sm:px-40 w-full max-w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center w-full max-w-full">
          {/* Swipeable Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={transition}
            viewport={{ once: true }}
            className={`rounded-3xl border border-white/20 relative overflow-hidden w-auto mx-auto ${isMobile ? 'bg-white/5 shadow-none backdrop-blur-none' : 'backdrop-blur-md bg-white/10 shadow-2xl'}`}
            style={{ width: `${effectiveSlideWidth}px`, maxWidth: '100%' }}
          >
            {/* Swipe Container */}
            <div
              className="relative overflow-hidden"
              style={{ 
                width: `${effectiveSlideWidth}px`, 
                maxWidth: '100%',
                height: isMobile ? '400px' : '420px'
              }}
            >
              <motion.div
                ref={containerRef}
                drag="x"
                dragConstraints={{ left: -effectiveSlideWidth, right: 0 }}
                dragElastic={0.18}
                onDragStart={() => setDragging(true)}
                onDragEnd={handleDragEnd}
                animate={false}
                className="flex h-full will-change-transform select-none cursor-grab active:cursor-grabbing transition-shadow duration-300"
                style={{
                  x,
                  width: `${2 * effectiveSlideWidth}px`,
                  minWidth: `${2 * effectiveSlideWidth}px`,
                  transition: dragging ? 'none' : 'width 0.2s',
                  scale: dragging ? 0.97 : 1,
                  boxShadow: dragging ? "0 8px 32px 0 rgba(80,80,180,0.25)" : "0 4px 16px 0 rgba(80,80,180,0.10)",
                  cursor: dragging ? "grabbing" : "grab"
                }}
              >
                {/* Text Introduction Slide */}
                <div 
                  className="w-full min-w-0 flex flex-col justify-center break-words px-4 sm:px-6 py-4 sm:py-6" 
                  style={{ 
                    width: `${effectiveSlideWidth}px`, 
                    minWidth: `${effectiveSlideWidth}px`,
                    maxWidth: `${effectiveSlideWidth}px`
                  }}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Hello, I'm Srijan!</h3>
                  <p className="text-gray-200 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                    I'm a passionate student pursuing a dual degree program, combining my love for technology and music.
                    Currently diving deep into the world of data engineering while expressing my creativity through
                    guitar and rock music.
                  </p>
                  <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
                    When I'm not coding or analyzing data, you'll find me jamming with my band "Khobor" or exploring new
                    guitar techniques inspired by legendary musicians.
                  </p>
                </div>

                {/* Profile Image Slide */}
                <div 
                  className="w-full min-w-0 flex items-center justify-center p-4 sm:p-6" 
                  style={{ 
                    width: `${effectiveSlideWidth}px`, 
                    minWidth: `${effectiveSlideWidth}px`,
                    maxWidth: `${effectiveSlideWidth}px`
                  }}
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <div className="w-full max-w-[280px] sm:max-w-[300px] mx-auto">
                      <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl border border-white/30 flex items-center justify-center overflow-hidden mx-auto">
                        <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded-2xl select-none pointer-events-none" draggable="false" onContextMenu={e => e.preventDefault()} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Image Peek - Visible on the right edge */}
              <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-purple-500/30 to-transparent pointer-events-none flex items-center justify-end pr-1 z-10">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-500/40 to-blue-500/40 rounded-lg border border-white/20 flex items-center justify-center">
                  <User className="h-3 w-3 text-white/70" />
                </div>
              </div>

              {/* Swipe Indicator */}
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="flex items-center text-white/60 text-xs"
                >
                  <span className="mr-1">Swipe</span>
                  <ChevronRight className="h-3 w-3" />
                </motion.div>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button
                  onClick={() => goToSlide(0)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    currentSlide === 0 ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label="Show introduction text"
                />
                <button
                  onClick={() => goToSlide(1)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    currentSlide === 1 ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label="Show profile image"
                />
              </div>
            </div>
          </motion.div>

          {/* Education and Current Focus */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 w-full max-w-full"
          >
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl w-full max-w-full">
              <div className="flex items-center mb-2 sm:mb-4">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400 mr-2 sm:mr-3" />
                <h4 className="text-lg sm:text-xl font-semibold text-white">Education</h4>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">B.Tech in Computer Science & Engineering</p>
                  <p className="text-gray-300 text-xs sm:text-sm">Haldia Institute of Technology</p>
                </div>
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">BS in Data Science & Applications</p>
                  <p className="text-gray-300 text-xs sm:text-sm">Indian Institute of Technology, Madras</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl w-full max-w-full">
              <div className="flex items-center mb-2 sm:mb-4">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 mr-2 sm:mr-3" />
                <h4 className="text-lg sm:text-xl font-semibold text-white">Current Focus</h4>
              </div>
              <p className="text-gray-200 text-sm sm:text-base">Data Engineering • Machine Learning • API Development • Rock Music</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
