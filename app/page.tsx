"use client"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Music from "@/components/Music"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 max-w-full overflow-x-hidden sm:snap-y sm:snap-mandatory">
      <section className="h-screen min-h-screen sm:snap-start sm:snap-always"><Hero /></section>
      <section className="min-h-screen pt-8 pb-8 sm:pt-0 sm:pb-0 sm:snap-start sm:snap-always"><About /></section>
      <section className="sm:snap-start sm:snap-always"><Projects /></section>
      <section className="sm:snap-start sm:snap-always"><Skills /></section>
      <section className="sm:snap-start sm:snap-always"><Music /></section>
      <section className="sm:snap-start sm:snap-always"><Contact /></section>
    </div>
  )
}
