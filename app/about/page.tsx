"use client"
import AnimatedByWord from "@/components/AnimatedByWord"
import MeCard from "@/components/MeCard"
import Timeline from "@/components/Timeline"
import { about } from "@/constants/texts"
import { stackVariants, textEnterLeftVariants } from "@/constants/variants"
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

        {/*====== Description ====== */}
        <motion.section
          variants={{
            visible: {
              transition: { staggerChildren: 0.25, delayChildren: 0.5 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          className="xl:flex items-center grid"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="md:pr-12 sm:py-8 font-thin text-xl text-gray-200 sm:w-full">
            <motion.div variants={textEnterLeftVariants}>
              <p>
                {about.paragraph1}{" "}
                <Link
                  target="_blank"
                  className="hover:text-gray-100 font-semibold"
                  href={"https://www.ufpe.br/"}
                >
                  Federal University of Pernambuco
                </Link>{" "}
                in 2019.
              </p>
            </motion.div>

            <motion.div variants={textEnterLeftVariants}>
              <p className="mt-4">
                {about.paragraph2}{" "}
                <Link
                  target="_blank"
                  className="hover:text-gray-100 font-semibold"
                  href={"https://arctouch.com/"}
                >
                  ArcTouch
                </Link>{" "}
                as a software engineer.
              </p>
            </motion.div>

            <motion.div variants={textEnterLeftVariants}>
              <p className="mt-4">{about.paragraph3}</p>
            </motion.div>

            <motion.div variants={textEnterLeftVariants}>
              <p className="mt-4">{about.paragraph4}</p>
            </motion.div>
          </div>
          <MeCard />
        </motion.section>

        {/*====== Tech stack ====== */}
        <motion.section
          variants={{
            visible: {
              transition: { staggerChildren: 0.25, delayChildren: 0.5 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="sm:flex pt-8 items-center text-gray-200">
            <motion.div variants={textEnterLeftVariants}>
              <div className="font-semibold mr-4 whitespace-nowrap sm:pb-0 pb-4 text-lg">
                Things I code with:
              </div>
            </motion.div>

            <div className="flex gap-3 cursor-pointer">
              <motion.div variants={stackVariants}>
                <div className="hover:text-blue-400">
                  <SiTypescript size={24} />
                </div>
              </motion.div>

              <motion.div variants={stackVariants}>
                <div className="hover:text-yellow-400">
                  <SiJavascript size={24} />
                </div>
              </motion.div>

              <motion.div variants={stackVariants}>
                <div className="hover:text-gray-100">
                  <SiNextdotjs size={24} />
                </div>
              </motion.div>

              <motion.div variants={stackVariants}>
                <div className="hover:text-blue-400">
                  <BiLogoReact size={27} />
                </div>
              </motion.div>

              <motion.div variants={stackVariants}>
                <div className="hover:text-green-500">
                  <BiLogoNodejs size={27} />
                </div>
              </motion.div>

              <motion.div variants={stackVariants}>
                <div className="hover:text-pink-400">
                  <SiGraphql size={24} />
                </div>
              </motion.div>

              <motion.div variants={stackVariants}>
                <div className="hover:text-blue-300">
                  <SiPostgresql size={24} />
                </div>
              </motion.div>

              <motion.div variants={stackVariants}>
                <div className="hover:text-red-500">
                  <SiNestjs size={24} />
                </div>
              </motion.div>

              <motion.div variants={stackVariants}>
                <div className="hover:text-blue-400">
                  <SiTailwindcss size={24} />
                </div>
              </motion.div>

              <motion.div variants={stackVariants}>
                <div className="hover:text-blue-400">
                  <SiDocker size={24} />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <Timeline />
      </div>
    </div>
  )
}
