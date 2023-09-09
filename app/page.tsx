"use client"
import ContactForm from "@/components/Form"
import Hero from "@/components/Hero"
import LatestProjects from "@/components/LatestProjects"

export default function Home() {
  return (
    <main>
      <Hero />

      <div>
        <LatestProjects />

        <div className="pt-12 sm:pt-24 flex items-center font-thin pr-12 sm:pr-0 mb-12">
          <h2 className="text-gray-200 text-xl sm:text-xl whitespace-nowrap">
            Get in touch
          </h2>
          <div className="ml-16 mr-8 h-[1px] sm:w-full bg-gradient-to-r from-pink-500/20 via-pink-500/50 to-orange-500/20 min-w-[220px]" />
        </div>
        <div className="sm:flex pr-16 sm:pr-0 justify-between" id="getInTouch">
          <div className="font-thin text-gray-200 sm:w-1/2 text-lg mb-8">
            Do not hesitate to contact me through the following form or by email
            on{" "}
            <a
              href="mailto:debfdias@gmail.com"
              className="text-gray-100 hover:underline hover:text-pink-500 font-semibold"
            >
              debfdias@gmail.com
            </a>{" "}
            regardless of the subject.
          </div>
          <div className="sm:w-2/5 min-w-[300px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
