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
    <div className="sm:w-2/3 sm:mr-0 mr-12">
      <div className="flex mb-3">
        <AnimatedByWord
          text="Hey there, I am"
          style="text-gray-100 sm:text-5xl sm:mr-2 mb-8 text-4xl font-semibold"
        />
        <AnimatedByWord
          delay={0.85}
          text="Debs!"
          style="sm:text-5xl text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-pink-300 mb-8 whitespace-nowrap"
        />
      </div>

      <div className="text-gray-200 font-thin text-xl">
        <motion.div
          whileInView="onscreen"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>
            I am a software engineer based in Recife, Brazil. I have experience
            in building scalable, secure and accessible applications using
            various frameworks and technologies. I am passionate about creating
            high-quality code that follows best practices and industry
            standards.
          </p>
        </motion.div>
        <div className="py-12 sm:flex sm:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Link
              href={
                "https://drive.google.com/uc?id=1jacl2prStuJP1RukfGo6lG0tuMYNK0wf&export=download"
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
              delay: 0.75,
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