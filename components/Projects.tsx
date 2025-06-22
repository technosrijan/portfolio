"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Database, Zap, Brain, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
	{
		title: "TDS Virtual TA",
		description:
			"An intelligent teaching assistant built with FastAPI, ChromaDB, OCR, and Groq LLMs. Features document processing, semantic search, and AI-powered question answering for educational content.",
		technologies: [
			"FastAPI",
			"ChromaDB",
			"OCR",
			"Groq LLMs",
			"Python",
			"Vector Embeddings",
		],
		features: [
			"Document ingestion and processing",
			"Semantic search with ChromaDB",
			"AI-powered Q&A system",
			"OCR for image-based content",
		],
		github: "https://github.com/srijan-mukherjee",
		demo: "#",
		icon: Brain,
		gradient: "from-purple-500 to-pink-500",
	},
	{
		title: "Data Pipeline Automation",
		description:
			"Automated data scraping and processing pipeline for large-scale data collection. Built with Python, featuring error handling, data validation, and scheduled execution.",
		technologies: [
			"Python",
			"Pandas",
			"BeautifulSoup",
			"Selenium",
			"PostgreSQL",
			"Airflow",
		],
		features: [
			"Automated web scraping",
			"Data validation and cleaning",
			"Scheduled pipeline execution",
			"Error handling and logging",
		],
		github: "https://github.com/srijan-mukherjee",
		demo: "#",
		icon: Database,
		gradient: "from-blue-500 to-cyan-500",
	},
	{
		title: "AI-Powered Backend Services",
		description:
			"Collection of backend services and APIs leveraging AI/ML capabilities. Includes text processing, data analysis, and integration with various LLM providers.",
		technologies: [
			"FastAPI",
			"Python",
			"Docker",
			"Redis",
			"PostgreSQL",
			"OpenAI API",
		],
		features: [
			"RESTful API design",
			"AI/ML model integration",
			"Caching and optimization",
			"Containerized deployment",
		],
		github: "https://github.com/srijan-mukherjee",
		demo: "#",
		icon: Code2,
		gradient: "from-green-500 to-teal-500",
	},
]

export default function Projects() {
	const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
	const mobileTransition = { type: "tween" as const, duration: 0.35, ease: "easeInOut" as const };
	const desktopTransition = { type: "spring" as const, stiffness: 400, damping: 28, bounce: 0.25 };

	return (
		<section
			id="projects"
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
						Featured Projects
					</h2>
					<div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
					<p className="text-gray-300 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
						Here are some of my recent projects showcasing my skills in data
						engineering, AI/ML, and backend development.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-full">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.2 }}
							viewport={{ once: true }}
							className="backdrop-blur-md bg-white/10 rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:scale-105 w-full max-w-full"
						>
							<div
								className={`w-12 sm:w-16 h-12 sm:h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
							>
								<project.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
							</div>

							<h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3">
								{project.title}
							</h3>
							<p className="text-gray-200 mb-2 sm:mb-4 leading-relaxed text-sm sm:text-base">
								{project.description}
							</p>

							<div className="mb-2 sm:mb-4">
								<h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
									Key Features:
								</h4>
								<ul className="text-gray-300 text-xs sm:text-sm space-y-1">
									{project.features.map((feature, idx) => (
										<li key={idx} className="flex items-center">
											<Zap className="h-3 w-3 text-yellow-400 mr-2 flex-shrink-0" />
											{feature}
										</li>
									))}
								</ul>
							</div>

							<div className="mb-4 sm:mb-6">
								<h4 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
									Technologies:
								</h4>
								<div className="flex flex-wrap gap-1 sm:gap-2">
									{project.technologies.map((tech, idx) => (
										<span
											key={idx}
											className="px-2 sm:px-3 py-1 bg-white/20 rounded-full text-xs text-white border border-white/30"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							<div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
								<Button
									asChild
									className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-2xl text-xs sm:text-base px-2 sm:px-4 py-2 sm:py-3"
								>
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="mr-2 h-4 w-4" />
										Code
									</a>
								</Button>
								<Button
									asChild
									className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-2xl text-xs sm:text-base px-2 sm:px-4 py-2 sm:py-3"
								>
									<a
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
									>
										<ExternalLink className="mr-2 h-4 w-4" />
										Demo
									</a>
								</Button>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
