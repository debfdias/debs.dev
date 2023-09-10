import { textEnterLeftVariants } from "@/constants/variants"
import { motion } from "framer-motion"
import ContactForm from "../Form"

export default function GetInTouch() {
  return (
    <motion.section
      variants={{
        visible: { transition: { staggerChildren: 0.25, delayChildren: 0.5 } },
      }}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
    >
      <div className="pt-12 sm:pt-24 flex items-center font-thin pr-12 sm:pr-0 mb-12">
        <motion.div variants={textEnterLeftVariants}>
          <h2 className="text-gray-200 text-xl sm:text-xl whitespace-nowrap">
            Get in touch
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

      <div className="sm:flex pr-16 sm:pr-0 justify-between" id="getInTouch">
        <motion.div variants={textEnterLeftVariants}>
          <div className="font-thin text-gray-200 sm:w-1/2 text-lg mb-8 sm:min-w-[200px]">
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
        </motion.div>
        <div className="sm:w-1/2 sm:min-w-[350px]">
          <ContactForm />
        </div>
      </div>
    </motion.section>
  )
}
