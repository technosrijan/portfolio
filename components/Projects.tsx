"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Database, Zap, Brain, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "TDS Virtual TA",
    description:
      "An intelligent teaching assistant built with FastAPI, ChromaDB, OCR, and Groq LLMs. Features document processing, semantic search, and AI-powered question answering for educational content.",
    technologies: ["FastAPI", "ChromaDB", "OCR", "Groq LLMs", "Python", "Vector Embeddings"],
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
    technologies: ["Python", "Pandas", "BeautifulSoup", "Selenium", "PostgreSQL", "Airflow"],
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
    technologies: ["FastAPI", "Python", "Docker", "Redis", "PostgreSQL", "OpenAI API"],
    features: ["RESTful API design", "AI/ML model integration", "Caching and optimization", "Containerized deployment"],
    github: "https://github.com/srijan-mukherjee",
    demo: "#",
    icon: Code2,
    gradient: "from-green-500 to-teal-500",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in data engineering, AI/ML, and backend
            development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group hover:scale-105"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <project.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Zap className="h-3 w-3 text-yellow-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/20 rounded-full text-xs text-white border border-white/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  asChild
                  className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-2xl"
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button
                  asChild
                  className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white rounded-2xl"
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
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
