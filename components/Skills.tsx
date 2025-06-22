"use client"

import { motion } from "framer-motion"
import { Code, Database, Brain, Music, Zap } from "lucide-react"

const skillCategories = [
	{
		title: "Data Engineering",
		icon: Database,
		skills: [
			"Python",
			"SQL",
			"FastAPI",
			"PostgreSQL",
			"Data Pipelines",
			"ETL Processes",
		],
		gradient: "from-blue-500 to-cyan-500",
	},
	{
		title: "AI & Machine Learning",
		icon: Brain,
		skills: [
			"Groq API",
			"LLMs",
			"Vector Embeddings",
			"ChromaDB",
			"OCR",
			"NLP",
		],
		gradient: "from-purple-500 to-pink-500",
	},
	{
		title: "Development Tools",
		icon: Code,
		skills: ["Git", "GitHub", "GitHub Copilot", "Docker", "Linux", "VS Code"],
		gradient: "from-green-500 to-teal-500",
	},
	{
		title: "Music Production",
		icon: Music,
		skills: [
			"Logic Pro",
			"NUX MG30",
			"Cort G300 Pro",
			"Audio Engineering",
			"Composition",
			"Live Performance",
		],
		gradient: "from-orange-500 to-red-500",
	},
]

export default function Skills() {
	const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
	const mobileTransition = { type: "tween" as const, duration: 0.35, ease: "easeInOut" as const };
	const desktopTransition = { type: "spring" as const, stiffness: 400, damping: 28, bounce: 0.25 };

	return (
		<section
			id="skills"
			className="py-12 sm:py-20 px-3 sm:px-12 w-full max-w-full overflow-x-hidden"
		>
			<div className="max-w-7xl mx-auto w-full max-w-full">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={isMobile ? mobileTransition : desktopTransition}
					viewport={{ once: true }}
					className="text-center mb-12 sm:mb-16 will-change-transform"
				>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
						Skills & Expertise
					</h2>
					<div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
					<p className="text-gray-300 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
						A diverse skill set spanning data engineering, AI/ML, software
						development, and music production.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-4 sm:gap-8 w-full max-w-full">
					{skillCategories.map((category, index) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="backdrop-blur-md bg-white/10 rounded-3xl p-4 sm:p-8 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group w-full max-w-full"
						>
							<div className="flex items-center mb-4 sm:mb-6">
								<div
									className={`w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300`}
								>
									<category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
								</div>
								<h3 className="text-lg sm:text-2xl font-bold text-white">
									{category.title}
								</h3>
							</div>

							<div className="grid grid-cols-2 gap-2 sm:gap-3">
								{category.skills.map((skill, skillIndex) => (
									<motion.div
										key={skill}
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{
											duration: 0.5,
											delay: index * 0.2 + skillIndex * 0.1,
										}}
										viewport={{ once: true }}
										className="bg-white/20 rounded-2xl p-2 sm:p-3 text-center border border-white/30 hover:bg-white/30 transition-all duration-300 group/skill"
									>
										<span className="text-white font-medium text-xs sm:text-sm group-hover/skill:scale-105 transition-transform duration-200 inline-block">
											{skill}
										</span>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Additional Skills Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="mt-8 sm:mt-12 backdrop-blur-md bg-white/10 rounded-3xl p-4 sm:p-8 border border-white/20 shadow-2xl w-full max-w-full"
				>
					<div className="text-center">
						<div className="flex items-center justify-center mb-4 sm:mb-6">
							<Zap className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-400 mr-2 sm:mr-3" />
							<h3 className="text-lg sm:text-2xl font-bold text-white">
								Currently Learning
							</h3>
						</div>
						<div className="flex flex-wrap justify-center gap-2 sm:gap-3">
							{[
								"Apache Kafka",
								"Kubernetes",
								"Advanced Guitar Techniques",
								"Music Theory",
								"Cloud Architecture",
							].map((skill, index) => (
								<motion.span
									key={skill}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full text-white border border-yellow-500/30 hover:scale-105 transition-transform duration-200 text-xs sm:text-base"
								>
									{skill}
								</motion.span>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
