"use client"
import AnimatedByWord from "@/components/AnimatedByWord"
import { motion } from "framer-motion"
import { LiaMapSignsSolid } from "react-icons/lia"

export default function NotFound() {
  return (
    <div className="">
      <div className="text-2xl sm:text-4xl flex gap-8 items-end">
        <motion.button
          animate={{ opacity: 1, rotate: [0, 0, 25, -25, 0] }}
          transition={{
            duration: 5,
            ease: "backInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <LiaMapSignsSolid size={64} />
        </motion.button>
        <AnimatedByWord text="Nothig found here. Are you lost?" style="mb-1" />
      </div>
    </div>
  )
}
