import { textEnterLeftVariants } from "@/constants/variants"
import { motion } from "framer-motion"
import Link from "next/link"
import ProjectsSlider from "../ProjectsSlider"

export default function LatestProjects() {
  return (
    <motion.section
      variants={{
        visible: { transition: { staggerChildren: 0.25 } },
      }}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
    >
      <div className="z-0 pr-4">
        <div className="pt-12 sm:pt-24 flex items-center font-thin pr-12 sm:pr-0">
          <motion.div variants={textEnterLeftVariants}>
            <h2 className="text-gray-200 text-xl sm:text-xl whitespace-nowrap">
              Lastest projects
            </h2>
          </motion.div>

          <div className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mx-8 h-[1px] bg-gradient-to-r from-pink-500/20 via-pink-500/50 to-orange-500/20 min-w-[220px]" />
            </motion.div>
          </div>
        </div>
        <motion.div variants={textEnterLeftVariants}>
          <div className="text-gray-200 font-thin sm:text-xl text-lg mt-16 md:w-full xl:w-2/3">
            These are some of my recent projects I&apos;ve worked on. Feel free
            to explore the{" "}
            <Link
              href="/projects"
              className="font-semibold text-gray-100 hover:text-pink-500"
            >
              Projects
            </Link>{" "}
            page to get more details about it, as well my{" "}
            <Link
              target="_blank"
              href="https://github.com/debfdias"
              className="font-semibold text-gray-100 hover:text-pink-500"
            >
              Github
            </Link>{" "}
            , to check the code itself, contribute or craft amazing experiences.
          </div>
        </motion.div>

        <ProjectsSlider />
      </div>
    </motion.section>
  )
}
