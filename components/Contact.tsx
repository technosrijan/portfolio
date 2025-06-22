"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Instagram, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
	{
		name: "GitHub",
		icon: Github,
		url: "https://github.com/srijan-mukherjee",
		color: "hover:text-gray-300",
	},
	{
		name: "LinkedIn",
		icon: Linkedin,
		url: "https://linkedin.com/in/srijan-mukherjee",
		color: "hover:text-blue-400",
	},
	{
		name: "Instagram",
		icon: Instagram,
		url: "https://instagram.com/srijan.mukherjee",
		color: "hover:text-pink-400",
	},
	{
		name: "Email",
		icon: Mail,
		url: "mailto:srijan.mukherjee@example.com",
		color: "hover:text-green-400",
	},
]

export default function Contact() {
	const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
	const mobileTransition = { type: "tween" as const, duration: 0.35, ease: "easeInOut" as const };
	const desktopTransition = { type: "spring" as const, stiffness: 400, damping: 28, bounce: 0.25 }

	return (
		<section id="contact" className="py-12 sm:py-20 px-3 sm:px-12 w-full max-w-full overflow-x-hidden">
			<div className="max-w-4xl mx-auto w-full max-w-full">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={isMobile ? mobileTransition : desktopTransition}
					viewport={{ once: true }}
					className="text-center mb-12 sm:mb-16 will-change-transform"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
						Let's Connect
					</h2>
					<div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
					<p className="text-gray-300 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
						Whether you want to discuss data engineering, collaborate on projects, or just talk
						about music, I'd love to hear from you!
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-6 sm:gap-12 w-full max-w-full">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={isMobile ? mobileTransition : desktopTransition}
						viewport={{ once: true }}
						className="backdrop-blur-md bg-white/10 rounded-3xl p-4 sm:p-8 border border-white/20 shadow-2xl w-full max-w-full"
					>
						<h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6">
							Get in Touch
						</h3>
						<div className="space-y-3 sm:space-y-4">
							<div className="flex items-center">
								<Mail className="h-5 w-5 text-purple-400 mr-2 sm:mr-3" />
								<span className="text-gray-200 text-xs sm:text-base">
									srijan.mukherjee@example.com
								</span>
							</div>
							<div className="flex items-center">
								<MapPin className="h-5 w-5 text-blue-400 mr-2 sm:mr-3" />
								<span className="text-gray-200 text-xs sm:text-base">
									West Bengal, India
								</span>
							</div>
						</div>

						<div className="mt-6 sm:mt-8">
							<h4 className="text-white font-semibold mb-2 sm:mb-4 text-xs sm:text-base">
								Follow Me
							</h4>
							<div className="flex space-x-2 sm:space-x-4">
								{socialLinks.map((link, index) => (
									<motion.a
										key={link.name}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
										className={`w-8 sm:w-12 h-8 sm:h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white ${link.color} transition-all duration-300 hover:scale-110 hover:bg-white/30 border border-white/30`}
									>
										<link.icon className="h-4 w-4 sm:h-5 sm:w-5" />
									</motion.a>
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
						<h3 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6">
							Send a Message
						</h3>
						<form className="space-y-3 sm:space-y-4">
							<div>
								<input
									type="text"
									placeholder="Your Name"
									className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm text-xs sm:text-base"
								/>
							</div>
							<div>
								<input
									type="email"
									placeholder="Your Email"
									className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm text-xs sm:text-base"
								/>
							</div>
							<div>
								<textarea
									rows={4}
									placeholder="Your Message"
									className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm resize-none text-xs sm:text-base"
								/>
							</div>
							<Button
								type="submit"
								className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2 sm:py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 text-xs sm:text-base"
							>
								<Send className="mr-2 h-4 w-4" />
								Send Message
							</Button>
						</form>
					</motion.div>
				</div>

				{/* Footer */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="text-center mt-12 sm:mt-16 pt-8 border-t border-white/20 w-full max-w-full"
				>
					<p className="text-gray-400 text-xs sm:text-base">
						© 2024 Srijan Mukherjee. Built with Next.js, TailwindCSS, and Framer Motion.
					</p>
				</motion.div>
			</div>
		</section>
	)
}
