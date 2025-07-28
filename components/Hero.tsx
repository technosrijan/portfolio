"use client"

import { motion } from "framer-motion"
import { ChevronDown, Download, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"

export default function Hero() {
	const scrollToSection = (sectionId: string) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
	}

	const [blurOpacity, setBlurOpacity] = useState(1)
	const [isHeroActive, setIsHeroActive] = useState(true)
	const heroRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleScroll = () => {
			const hero = heroRef.current
			if (!hero) return
			const rect = hero.getBoundingClientRect()
			const windowHeight = window.innerHeight || document.documentElement.clientHeight
			const visible = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0))
			const ratio = visible / rect.height
			const opacity = ratio > 0.97 ? 1 : ratio < 0.85 ? 0 : (ratio - 0.85) / 0.12
			setBlurOpacity(opacity)
		}
		window.addEventListener("scroll", handleScroll, { passive: true })
		handleScroll()
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	useEffect(() => {
		const hero = heroRef.current
		if (!hero) return
		const observer = new window.IntersectionObserver(
			([entry]) => setIsHeroActive(entry.intersectionRatio > 0.98),
			{ threshold: [0.98] }
		)
		observer.observe(hero)
		return () => observer.disconnect()
	}, [])

	// Animation transition for mobile vs desktop
	const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
	const mobileTransition = { type: "tween" as const, duration: 0.35, ease: "easeInOut" as const };
	const desktopTransition = { type: "spring" as const, stiffness: 400, damping: 28, bounce: 0.25 }

	return (
		<section ref={heroRef} id="hero-section" className="min-h-screen flex items-center justify-center relative overflow-hidden w-full max-w-full py-12 sm:py-20 px-3 sm:px-12">
			{/* Background Image with Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full max-w-full"
				style={{
					backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/70 to-slate-900/80 w-full h-full max-w-full" />
			</div>

			{/* Animated Blurred Gradient Overlay for Section Transition */}
			<motion.div
				aria-hidden
				style={{ opacity: isHeroActive ? blurOpacity : 0, willChange: 'opacity, transform' }}
				className="pointer-events-none absolute left-0 right-0 bottom-0 h-32 sm:h-40 bg-gradient-to-b from-transparent via-white/30 to-white/80 dark:via-slate-900/60 dark:to-slate-900/90 blur-2xl sm:blur-2xl blur-none z-20 transition-opacity duration-500 w-full max-w-full"
				transition={isMobile ? mobileTransition : desktopTransition}
			/>

			{/* Main Content */}
			<div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 text-center h-[70vh] sm:h-auto mt-8 sm:mt-0 translate-y-[-20%] sm:translate-y-0">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="backdrop-blur-md bg-white/10 rounded-3xl p-4 sm:p-8 border border-white/20 shadow-2xl w-full flex flex-col items-center justify-center"
				>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-5xl sm:text-7xl font-bold text-white mb-4 break-words w-full flex justify-center"
					>
						Srijan Mukherjee
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-xl sm:text-2xl text-gray-200 mb-8 break-words w-full flex justify-center"
					>
						Backend dev | AI systems builder | Musician
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
					>
						<Button
							onClick={() => scrollToSection("projects")}
							className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto flex justify-center"
						>
							<Code className="mr-2 h-5 w-5" />
							View Projects
						</Button>
						<Button
							asChild
							className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto flex justify-center"
						>
							<a href="/resume.pdf" download="Srijan_Mukherjee_Resume.pdf">
								<Download className="mr-2 h-5 w-5" />
								Download Resume
							</a>
						</Button>
					</motion.div>
				</motion.div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 1 }}
				className="absolute left-1/2 -translate-x-1/2 z-20 bottom-8 sm:bottom-8 bottom-[12vh] md:bottom-8"
			>
				<motion.div
					animate={{
						y: [0, 10, 0],
						scale: [1, 1.1, 1],
						opacity: [0.7, 1, 0.7],
					}}
					transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
					className="cursor-pointer flex items-center justify-center"
					onClick={() => scrollToSection("projects")}
				>
					<ChevronDown className="h-16 w-16 sm:h-20 sm:w-20 text-white drop-shadow-lg" strokeWidth={2.7} />
				</motion.div>
			</motion.div>
		</section>
	)
}
