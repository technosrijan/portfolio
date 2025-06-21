"use client"

import { motion, useMotionValue, animate } from "framer-motion"
import { GraduationCap, MapPin, User, ChevronRight } from "lucide-react"
import { useState, useRef } from "react"

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dragging, setDragging] = useState(false)
  const x = useMotionValue(0)

  const slideWidth = 400 // px, must match h-[400px] for accurate snap

  const handleDragEnd = (event: any, info: any) => {
    setDragging(false)
    const threshold = 100
    if (info.offset.x < -threshold && currentSlide === 0) {
      animate(x, -slideWidth, { type: "spring", stiffness: 400, damping: 28, bounce: 0.25 })
      setTimeout(() => setCurrentSlide(1), 200)
    } else if (info.offset.x > threshold && currentSlide === 1) {
      animate(x, 0, { type: "spring", stiffness: 400, damping: 28, bounce: 0.25 })
      setTimeout(() => setCurrentSlide(0), 200)
    } else {
      // Snap back to current slide
      animate(x, currentSlide === 0 ? 0 : -slideWidth, { type: "spring", stiffness: 400, damping: 28, bounce: 0.25 })
    }
  }

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Swipeable Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden"
          >
            {/* Swipe Container */}
            <div className="relative h-[400px] overflow-hidden">
              <motion.div
                ref={containerRef}
                className="flex w-[200%] h-full"
                style={{ x, scale: dragging ? 0.97 : 1, boxShadow: dragging ? "0 8px 32px 0 rgba(80,80,180,0.25)" : "0 4px 16px 0 rgba(80,80,180,0.10)", cursor: dragging ? "grabbing" : "grab" }}
                drag="x"
                dragConstraints={{ left: currentSlide === 0 ? 0 : -slideWidth, right: currentSlide === 1 ? 0 : slideWidth }}
                dragElastic={0.18}
                onDragStart={() => setDragging(true)}
                onDragEnd={handleDragEnd}
                animate={false}
              >
                {/* Text Introduction Slide */}
                <div className="w-1/2 p-8 pr-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-6">Hello, I'm Srijan!</h3>
                  <p className="text-gray-200 leading-relaxed mb-6">
                    I'm a passionate student pursuing a dual degree program, combining my love for technology and music.
                    Currently diving deep into the world of data engineering while expressing my creativity through
                    guitar and rock music.
                  </p>
                  <p className="text-gray-200 leading-relaxed">
                    When I'm not coding or analyzing data, you'll find me jamming with my band "Khobor" or exploring new
                    guitar techniques inspired by legendary musicians.
                  </p>
                </div>

                {/* Profile Image Slide */}
                <div className="w-1/2 p-8 flex items-center justify-center">
                  <div className="w-full max-w-sm">
                    <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl border border-white/30 flex items-center justify-center overflow-hidden">
                      <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded-2xl select-none pointer-events-none" draggable="false" onContextMenu={e => e.preventDefault()} />
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
                  onClick={() => setCurrentSlide(0)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    currentSlide === 0 ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label="Show introduction text"
                />
                <button
                  onClick={() => setCurrentSlide(1)}
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
            className="space-y-6"
          >
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-purple-400 mr-3" />
                <h4 className="text-xl font-semibold text-white">Education</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-white font-medium">B.Tech in Computer Science & Engineering</p>
                  <p className="text-gray-300">Haldia Institute of Technology</p>
                </div>
                <div>
                  <p className="text-white font-medium">BS in Data Science & Applications</p>
                  <p className="text-gray-300">Indian Institute of Technology, Madras</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                <h4 className="text-xl font-semibold text-white">Current Focus</h4>
              </div>
              <p className="text-gray-200">Data Engineering • Machine Learning • API Development • Rock Music</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
