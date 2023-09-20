import { stackVariants, textEnterLeftVariants } from "@/constants/variants"
import { motion } from "framer-motion"

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

export default function TechStack() {
  return (
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
  )
}
