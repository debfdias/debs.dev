import { timeline } from "@/constants/texts";
import { stackVariants, textEnterLeftVariants } from "@/constants/variants";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export default function Timeline() {
  return (
    <div className="dark:text-gray-200 text-gray-500 md:mr-8">
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
            <div className="relative border-l dark:border-gray-700 border-gray-200 pb-2">
              <div className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full -left-3 text-pink-500">
                  <MdWork />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold dark:text-gray-100 text-gray-300">
                  Cheesecake Labs{" "}
                  <span className="bg-pink-500 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                    Current
                  </span>
                </h3>
                <time className="block mb-2 text-md font-thin text-gray-300">
                  {timeline.cheesecake.time}
                </time>
                <p className="mb-4 text-lg font-thin dark:text-gray-200 text-gray-500">
                  {timeline.cheesecake.description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stackVariants}>
            <div className="relative border-l dark:border-gray-700 border-gray-200 pb-2">
              <div className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full -left-3 text-pink-500">
                  <MdWork />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold dark:text-gray-100 text-gray-300">
                  Alteam{" "}
                </h3>
                <time className="block mb-2 text-md font-thin text-gray-300">
                  {timeline.alteam.time}
                </time>
                <p className="mb-4 text-lg font-thin dark:text-gray-200 text-gray-500">
                  {timeline.alteam.description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stackVariants}>
            <div className="relative border-l dark:border-gray-700 border-gray-200 pb-2">
              <div className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full -left-3 text-pink-500">
                  <MdWork />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold dark:text-gray-100 text-gray-300">
                  Solo60{" "}
                </h3>
                <time className="block mb-2 text-md font-thin text-gray-300">
                  {timeline.solo60.time}
                </time>
                <p className="mb-4 text-lg font-thin dark:text-gray-200 text-gray-500">
                  {timeline.solo60.description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stackVariants}>
            <div className="relative border-l dark:border-gray-700 border-gray-200 pb-2">
              <div className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full -left-3 text-pink-500">
                  <MdWork />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold dark:text-gray-100 text-gray-300">
                  ArcTouch{" "}
                </h3>
                <time className="block mb-2 text-md font-thin text-gray-300">
                  {timeline.arctouch.time}
                </time>
                <p className="mb-4 text-lg font-thin dark:text-gray-200 text-gray-500">
                  {timeline.arctouch.description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stackVariants}>
            <div className="relative border-l dark:border-gray-700 border-gray-200 py-2 -mt-6">
              <div className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full -left-3 text-pink-500">
                  <MdWork />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold dark:text-gray-100 text-gray-300">
                  Sama Europe{" "}
                </h3>
                <time className="block mb-2 text-md font-thin text-gray-300">
                  {timeline.sama.time}
                </time>
                <p className="mb-4 text-lg font-thin dark:text-gray-200 text-gray-500">
                  {timeline.sama.description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stackVariants}>
            <div className="relative border-l dark:border-gray-700 border-gray-200 py-2 -mt-6">
              <div className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full -left-3 text-pink-500">
                  <MdWork />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold dark:text-gray-100 text-gray-300">
                  Samsung Project{" "}
                </h3>
                <time className="block mb-2 text-md font-thin text-gray-300">
                  {timeline.samsung.time}
                </time>
                <p className="mb-4 text-lg font-thin dark:text-gray-200 text-gray-500">
                  {timeline.samsung.description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stackVariants}>
            <div className="relative border-l dark:border-gray-700 border-gray-200 py-2 -mt-6">
              <div className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full -left-3 text-pink-500">
                  <MdWork />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold dark:text-gray-100 text-gray-300">
                  Oswaldo Cruz Foundation{" "}
                </h3>
                <time className="block mb-2 text-md font-thin text-gray-300">
                  {timeline.oswaldoCruz.time}
                </time>
                <p className="mb-4 text-lg font-thin dark:text-gray-200 text-gray-500">
                  {timeline.oswaldoCruz.description}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stackVariants}>
            <div className="relative border-l dark:border-gray-700 border-gray-200 py-2 -mt-6">
              <div className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full -left-3 text-pink-500">
                  <FaGraduationCap />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold dark:text-gray-100 text-gray-300">
                  Computer Engineering bachelor degree{" "}
                </h3>
                <time className="block mb-2 text-md font-thin text-gray-300">
                  January, 2019
                </time>
                <p className="mb-4 text-lg font-thin dark:text-gray-200 text-gray-500">
                  {timeline.bachelor}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={stackVariants}>
            <div className="relative border-l dark:border-gray-700 border-gray-200 pt-2 -mt-6">
              <div className="ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full -left-3 text-pink-500">
                  <MdWork />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold dark:text-gray-100 text-gray-300">
                  Saber Social Technologies{" "}
                </h3>
                <time className="block mb-2 text-md font-thin text-gray-300">
                  November 2015, December 2018
                </time>
                <p className="mb-4 text-lg font-thin dark:text-gray-200 text-gray-500">
                  {timeline.saber}
                </p>
              </div>
            </div>
          </motion.div>
        </ol>
      </motion.section>
    </div>
  );
}
