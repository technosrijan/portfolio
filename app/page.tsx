"use client"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Music from "@/components/Music"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="snap-start h-screen"><Hero /></section>
      <section className="snap-start h-screen"><About /></section>
      <section className="snap-start"><Projects /></section>
      <section className="snap-start"><Skills /></section>
      <section className="snap-start"><Music /></section>
      <section className="snap-start"><Contact /></section>
    </div>
  )
}
