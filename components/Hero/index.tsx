import { home } from "@/constants/texts"
import { textEnterLeftVariants } from "@/constants/variants"
import { motion } from "framer-motion"
import Link from "next/link"
import { GiHand } from "react-icons/gi"
import { GrDocumentPdf } from "react-icons/gr"
import AnimatedByWord from "../AnimatedByWord"

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <div className="sm:w-2/3 sm:mr-0 mr-12 sm:py-12">
      <div className="flex mb-3">
        <AnimatedByWord
          text="Hey there, I am"
          style="text-gray-100 md:text-6xl mb-8 text-5xl font-semibold mr-2"
        />
        <AnimatedByWord
          delay={0.85}
          text="Debs!"
          style="md:text-6xl text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-pink-300 mb-8"
        />
      </div>

      <div className="text-gray-200 font-thin text-xl">
        <motion.section
          variants={{
            visible: {
              transition: { staggerChildren: 0.25, delayChildren: 0.5 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          className="sm:py-8"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div
            className="sm:max-w-[750px] sm:min-w-[500px]"
            variants={textEnterLeftVariants}
          >
            <p>{home.description}</p>
          </motion.div>
          <motion.div
            className="sm:max-w-[750px] sm:min-w-[500px]"
            variants={textEnterLeftVariants}
          >
            <p className="mt-4">{home.headline}</p>
          </motion.div>
        </motion.section>
        <div className="py-12 sm:flex sm:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              delay: 0.75,
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Link
              target="_blank"
              href={
                "https://drive.google.com/file/d/168d6kiyzbqv6jg8any0J6V7A3HWydGNV/view?usp=sharing"
              }
            >
              <button className="bg-gradient-to-l from-pink-500 to-pink-700 rounded-md py-3 px-6 flex gap-4 hover:brightness-90 hover:scale-[1.05] hover:-translate-y-1 transition ease-in-out delay-150 mb-4 sm:mb-0 w-full sm:w-auto items-center justify-center">
                <GrDocumentPdf size={20} />
                <div className="text-blue-700 font-semibold whitespace-nowrap">
                  Download resume
                </div>
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.25,
              duration: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Link href="#getInTouch" onClick={handleScroll}>
              <button className="bg-gray-100 rounded-md py-3 px-6 flex gap-4 hover:brightness-90 hover:scale-[1.05] hover:-translate-y-1 transition ease-in-out delay-150 text-blue-700 w-full sm:w-auto items-center justify-center">
                <GiHand size={20} />
                <div className="font-semibold whitespace-nowrap">
                  Let&apos;s talk!
                </div>
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
