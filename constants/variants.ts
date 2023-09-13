import { Variants } from "framer-motion"

export const textEnterLeftVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "circOut", duration: 1 },
  },
}

export const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
      duration: 2,
    },
  },
}

export const dropUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      mass: 2,
      bounce: 2,
    },
  },
}

export const mobileNavVariants: Variants = {
  hidden: {
    x: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.8, 0.1, 0.3, 0.8],
      when: "afterChildren",
    },
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.8, 0.1, 0.3, 0.8],
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
}

export const mobileLinkVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "circOut",
    },
  },
}

export const stackVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 2,
      bounce: 2,
    },
  },
}

export const arrowAnimation: Variants = {
  initial: { rotate: 0, scale: 1 },
  animate: { rotate: [0, -10, 10, -10, 10, 0], scale: 1.15 },
}
