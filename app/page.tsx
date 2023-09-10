"use client"
import GetInTouch from "@/components/GetInTouch"
import Hero from "@/components/Hero"
import LatestProjects from "@/components/LatestProjects"

export default function Home() {
  return (
    <main>
      <Hero />
      <div>
        <LatestProjects />
        <GetInTouch />
      </div>
    </main>
  )
}
