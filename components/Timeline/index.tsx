import { timeline } from "@/constants/texts"
import { stackVariants, textEnterLeftVariants } from "@/constants/variants"
import { motion } from "framer-motion"
import { FaGraduationCap } from "react-icons/fa"
import { MdWork } from "react-icons/md"

export default function Timeline() {
  return (
    <div className="text-gray-200 md:mr-8">
      <motion.section
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        className="py-16"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div
          variants={textEnterLeftVariants}
          className="flex items-center"
        >
          <div className="font-semibold whitespace-nowrap text-2xl">
            The road so far
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r ml-8 from-pink-700 via-pink-500 to-orange-500 min-w-[220px]" />
        </motion.div>
      </motion.section>

      <motion.section
        variants={{
          visible: {
            transition: { staggerChildren: 0.5, delayChildren: 0.1 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        className="lg:w-2/3 ml-2 mb-16"
      >
        <ol>
          <motion.div variants={stackVariants}>
            <div className="relative border-l border-gray-700 pb-2">
              <div className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full -left-3 text-pink-500">
                  <MdWork />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-100">
                  ArcTouch{" "}
                  <span className="bg-pink-500 text-gray-100 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                    Current
                  </span>
                </h3>
                <time className="block mb-2 text-md font-thin text-gray-300">
                  March, 2022
                </time>
                <p className="mb-4 text-lg font-thin text-gray-200">
                  {timeline.arctouch}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stackVariants}>
            <div className="relative border-l border-gray-700 py-2 -mt-6">
              <div className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full -left-3 text-pink-500">
                  <MdWork />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-100">
                  Sama Europe{" "}
                </h3>
                <time className="block mb-2 text-md font-thin text-gray-300">
                  September, 2022
                </time>
                <p className="mb-4 text-lg font-thin text-gray-200">
                  {timeline.sama}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stackVariants}>
            <div className="relative border-l border-gray-700 py-2 -mt-6">
              <div className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full -left-3 text-pink-500">
                  <MdWork />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-100">
                  Samsung Project{" "}
                </h3>
                <time className="block mb-2 text-md font-thin text-gray-300">
                  November, 2019 - March, 2022
                </time>
                <p className="mb-4 text-lg font-thin text-gray-200">
                  {timeline.samsung}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stackVariants}>
            <div className="relative border-l border-gray-700 py-2 -mt-6">
              <div className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full -left-3 text-pink-500">
                  <MdWork />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-100">
                  Oswaldo Cruz Foundation{" "}
                </h3>
                <time className="block mb-2 text-md font-thin text-gray-300">
                  November, 2017 - February, 2022
                </time>
                <p className="mb-4 text-lg font-thin text-gray-200">
                  {timeline.oswaldoCruz}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stackVariants}>
            <div className="relative border-l border-gray-700 py-2 -mt-6">
              <div className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full -left-3 text-pink-500">
                  <FaGraduationCap />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-100">
                  Computer Engineering bachelor degree{" "}
                </h3>
                <time className="block mb-2 text-md font-thin text-gray-300">
                  January, 2019
                </time>
                <p className="mb-4 text-lg font-thin text-gray-200">
                  {timeline.bachelor}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stackVariants}>
            <div className="relative border-l border-gray-700 pt-2 -mt-6">
              <div className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full -left-3 text-pink-500">
                  <MdWork />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-100">
                  Saber Social Technologies{" "}
                </h3>
                <time className="block mb-2 text-md font-thin text-gray-300">
                  November 2015, December 2018
                </time>
                <p className="mb-4 text-lg font-thin text-gray-200">
                  {timeline.saber}
                </p>
              </div>
            </div>
          </motion.div>
        </ol>
      </motion.section>
    </div>
  )
}
