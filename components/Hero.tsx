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

	return (
		<section ref={heroRef} id="hero-section" className="min-h-screen flex items-center justify-center relative overflow-hidden">
			{/* Background Image with Overlay */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/70 to-slate-900/80" />
			</div>

			{/* Animated Blurred Gradient Overlay for Section Transition */}
			<motion.div
				aria-hidden
				style={{ opacity: isHeroActive ? blurOpacity : 0 }}
				className="pointer-events-none absolute left-0 right-0 bottom-0 h-32 sm:h-40 bg-gradient-to-b from-transparent via-white/30 to-white/80 dark:via-slate-900/60 dark:to-slate-900/90 blur-2xl z-20 transition-opacity duration-500"
			/>

			{/* Main Content */}
			<div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl"
				>
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-5xl md:text-7xl font-bold text-white mb-4"
					>
						Srijan Mukherjee
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-xl md:text-2xl text-gray-200 mb-8"
					>
						Backend dev | AI systems builder | Musician
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
					>
						<Button
							onClick={() => scrollToSection("projects")}
							className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
						>
							<Code className="mr-2 h-5 w-5" />
							View Projects
						</Button>
						<Button
							asChild
							className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
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
				className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
			>
				<motion.div
					animate={{
						y: [0, 10, 0],
						scale: [1, 1.1, 1],
						opacity: [0.7, 1, 0.7],
					}}
					transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
					className="cursor-pointer flex items-center justify-center"
					onClick={() => scrollToSection("about")}
				>
					<ChevronDown className="h-20 w-20 text-white drop-shadow-lg" strokeWidth={2.7} />
				</motion.div>
			</motion.div>
		</section>
	)
}
