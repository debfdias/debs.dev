import { motion } from "framer-motion"

interface IAnimation {
  text: string
  style: string
  delay?: number
}
export default function AnimatedByWord({ text, style, delay }: IAnimation) {
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: delay
        ? { staggerChildren: 0, delayChildren: delay }
        : { staggerChildren: 0.15, delayChildren: 0.2 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      style={{ display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word: string, index: number) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          <div className={style}> {word}</div>
        </motion.span>
      ))}
    </motion.div>
  )
}
