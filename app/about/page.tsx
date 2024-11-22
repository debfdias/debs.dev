"use client";
import AnimatedByWord from "@/components/AnimatedByWord";
import MeCard from "@/components/MeCard";
import TechStack from "@/components/TechStack";
import Timeline from "@/components/Timeline";
import { about } from "@/constants/texts";
import { textEnterLeftVariants } from "@/constants/variants";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <div className="">
      <div className="md:pr-0 pr-12">
        <AnimatedByWord
          text="A bit about me..."
          style="dark:text-gray-200 text-gray-500 md:text-5xl mb-8 text-4xl font-semibold mr-2"
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
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="md:pr-12 sm:py-8 font-thin text-xl dark:text-gray-200 text-gray-500  sm:w-full">
            <motion.div variants={textEnterLeftVariants}>
              <p>
                {about.paragraph1}{" "}
                <Link
                  target="_blank"
                  className="dark:hover:text-gray-100 hover:text-gray-400 font-semibold"
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
                  className="dark:text-gray-200 text-gray-500 font-semibold dark:hover:text-gray-100 hover:text-gray-400 "
                  href={"https://cheesecakelabs.com/"}
                >
                  Cheesecake Labs
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
        <TechStack />

        {/*====== Timeline jobs ====== */}
        <Timeline />
      </div>
    </div>
  );
}
