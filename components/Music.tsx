"use client"

import { motion } from "framer-motion"
import { Users, Music, Play, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

const influences = ["John Petrucci", "Marco Sfogli", "Andy Timmons", "Joe Satriani", "Bengali Rock Legends"]

export default function MusicComponent() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const mobileTransition = { type: "tween" as const, duration: 0.35, ease: "easeInOut" as const };
  const desktopTransition = { type: "spring" as const, stiffness: 400, damping: 28, bounce: 0.25 };

  return (
    <section id="music" className="py-12 sm:py-20 px-3 sm:px-12 w-full max-w-full overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={isMobile ? mobileTransition : desktopTransition}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 will-change-transform"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Music Journey</h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-300 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
            Beyond code, I express my creativity through music as the guitarist of Bengali rock band "Khobor".
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center w-full max-w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={isMobile ? mobileTransition : desktopTransition}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 w-full max-w-full"
          >
            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-4 sm:p-8 border border-white/20 shadow-2xl w-full max-w-full">
              <div className="flex items-center mb-4 sm:mb-6">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 mr-2 sm:mr-3" />
                <h3 className="text-lg sm:text-2xl font-bold text-white">Band: Khobor</h3>
              </div>
              <p className="text-gray-200 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                As the lead guitarist of "Khobor", I contribute to creating original Bengali rock music that blends
                traditional melodies with modern rock elements. Our sound is influenced by both international rock
                legends and the rich heritage of Bengali music.
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Button
                  asChild
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-2xl text-xs sm:text-base px-2 sm:px-4 py-2 sm:py-3"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-4 w-4" />
                    Instagram
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-2xl text-xs sm:text-base px-2 sm:px-4 py-2 sm:py-3"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Youtube className="mr-2 h-4 w-4" />
                    YouTube
                  </a>
                </Button>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/10 rounded-3xl p-4 sm:p-8 border border-white/20 shadow-2xl w-full max-w-full">
              <div className="flex items-center mb-4 sm:mb-6">
                <Music className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 mr-2 sm:mr-3" />
                <h3 className="text-lg sm:text-2xl font-bold text-white">Musical Influences</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {influences.map((influence, index) => (
                  <motion.div
                    key={influence}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/20 rounded-2xl p-2 sm:p-3 text-center border border-white/30"
                  >
                    <span className="text-white font-medium text-xs sm:text-sm">{influence}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={isMobile ? mobileTransition : desktopTransition}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/10 rounded-3xl p-4 sm:p-8 border border-white/20 shadow-2xl w-full max-w-full"
          >
            <div className="text-center mb-6 sm:mb-8">
              <motion.div className="h-12 w-12 sm:h-16 sm:w-16 text-purple-400 mx-auto mb-2 sm:mb-4">
                {/* Placeholder for Music icon */}
              </motion.div>
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-4">Latest Tracks</h3>
              <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">
                Listen to our latest compositions and guitar solos that showcase the fusion of technical prowess with
                emotional depth.
              </p>
            </div>

            {/* Placeholder for music player/embed */}
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-4 sm:p-8 border border-white/30 text-center w-full max-w-full">
              <Play className="h-8 w-8 sm:h-12 sm:w-12 text-white mx-auto mb-2 sm:mb-4" />
              <p className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Featured Track</p>
              <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-4">"Khobor" - Latest Single</p>
              <Button className="bg-white/20 hover:bg-white/30 text-white rounded-2xl border border-white/30 text-xs sm:text-base px-2 sm:px-4 py-2 sm:py-3">
                <Play className="mr-2 h-4 w-4" />
                Play Now
              </Button>
            </div>

            <div className="mt-4 sm:mt-6 text-center">
              <p className="text-gray-300 text-xs sm:text-sm">🎸 Cort G300 Pro • 🎛️ NUX MG30 • 🎵 Logic Pro</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
