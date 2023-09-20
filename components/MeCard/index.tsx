import { cardVariants } from "@/constants/variants"
import { motion } from "framer-motion"
import Image from "next/image"
import me from "../../assets/me.jpeg"
import wrapper from "../../assets/wrapper.png"

export default function MeCard() {
  return (
    <div className="justify-items-center grid">
      <motion.div
        className="md:px-48 relative overflow-hidden"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="">
          <motion.div
            className="flex items-center justify-center -mt-48"
            variants={cardVariants}
          >
            <Image
              alt=""
              src={me}
              className="w-[280px] relative rounded-xl p-2 bg-slate-50 pb-50 shadow-2xl"
            />
          </motion.div>
        </div>

        <Image
          priority
          src={wrapper}
          alt=""
          className="w-[400px] min-w-[400px]"
        />
      </motion.div>
    </div>
  )
}
