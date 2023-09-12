"use client"
import AnimatedByWord from "@/components/AnimatedByWord"
import { motion } from "framer-motion"
import Link from "next/link"
import { BiLogoNodejs, BiLogoReact } from "react-icons/bi"
import {
  SiDocker,
  SiGraphql,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

export default function About() {
  return (
    <div className="">
      <div className="md:pr-0 pr-12">
        <AnimatedByWord
          text="A bit about me..."
          style="text-gray-200 md:text-5xl mb-8 text-4xl font-semibold mr-2"
        />

        <motion.div
          whileInView="visible"
          exit="hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="lg:w-1/2 sm:py-8 font-thin text-xl text-gray-200 sm:w-full">
            <p>
              My name is Débora Dias and I&apos;m from Brazil. I&apos;ve
              graduated in Computer Engineering from{" "}
              <Link
                target="_blank"
                className="hover:text-gray-100 font-semibold"
                href={"https://www.ufpe.br/"}
              >
                Federal University of Pernambuco
              </Link>{" "}
              in 2019.
            </p>
            <p className="mt-4">
              I started my journey as a backend developer, but over the years
              I&apos;ve learned how to love the frontend as well (thanks
              Tailwind!). Today I&apos;m studying for my Master&apos;s Degree
              and working at{" "}
              <Link
                target="_blank"
                className="hover:text-gray-100 font-semibold"
                href={"https://arctouch.com/"}
              >
                ArcTouch
              </Link>{" "}
              as a software engineer.
            </p>
            <p className="mt-4">
              After almost 8 years, I&apos;ve worked with many languages and
              frameworks. My main and favorite stack today is basically anything
              related to Typescript. But I keep my mind open to learn new things
              as technology is always mutating really fast.
            </p>
            <p className="mt-4">
              In my free time I love playing with my pets - I have two adorable
              dogs and a grumpy cat. I also enjoy going to the beach and watch
              the sunset. I play acoustic guitar too, and though I&apos;m not a
              good singer, I do try my best.
            </p>
            <div className="sm:flex pt-8 items-center">
              <div className="font-semibold mr-4 whitespace-nowrap sm:pb-0 pb-4">
                Things I code with:
              </div>
              <div className="flex gap-3 cursor-pointer">
                <div className="hover:text-blue-400">
                  <SiTypescript size={24} />
                </div>
                <div className="hover:text-yellow-400">
                  <SiJavascript size={24} />
                </div>
                <div className="hover:text-gray-100">
                  <SiNextdotjs size={24} />
                </div>
                <div className="hover:text-blue-400">
                  <BiLogoReact size={27} />
                </div>
                <div className="hover:text-green-500">
                  <BiLogoNodejs size={27} />
                </div>
                <div className="hover:text-pink-400">
                  <SiGraphql size={24} />
                </div>
                <div className="hover:text-blue-300">
                  <SiPostgresql size={24} />
                </div>
                <div className="hover:text-red-500">
                  <SiNestjs size={24} />
                </div>
                <div className="hover:text-blue-400">
                  <SiTailwindcss size={24} />
                </div>
                <div className="hover:text-blue-400">
                  <SiDocker size={24} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
