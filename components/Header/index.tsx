"use client"
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion"
import { ComponentPropsWithRef, FC, useState } from "react"
import { RxMoon, RxSun } from "react-icons/rx"
import { Navbar } from "../Navbar"

type IconButtonProps = HTMLMotionProps<"button"> &
  ComponentPropsWithRef<"button">
const IconButton: FC<IconButtonProps> = ({ children, ...props }) => (
  <motion.button
    {...props}
    initial={{ opacity: 0, rotate: -90, originY: "150%", originX: 0.5 }}
    animate={{ opacity: 1, rotate: 0 }}
    exit={{ opacity: 0, rotate: 90 }}
    transition={{ duration: 0.4, ease: "backOut" }}
  >
    {children}
  </motion.button>
)
IconButton.displayName = "IconButton"

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  return (
    <>
      <header className="sticky top-0 z-1 pt-6 bg-blue-700/70 backdrop-blur-sm">
        <div className="flex justify-between px-20 sm:px-44">
          <div className="flex items-center gap-4 sm:gap-2">
            <Navbar />
          </div>
          <div className="text-gray-300">
            <AnimatePresence mode="wait">
              {isDarkMode ? (
                <IconButton
                  key="dark-mode"
                  className="hover:text-gray-100"
                  onClick={() => setIsDarkMode(false)}
                >
                  <RxMoon title="Dark mode" size={24} />
                </IconButton>
              ) : (
                <IconButton
                  key="ligh-mode"
                  className="hover:text-gray-100"
                  onClick={() => setIsDarkMode(true)}
                >
                  <RxSun title="Light mode" size={24} />
                </IconButton>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="h-[1px] border-t border-solid border-blue-500" />

        {/* <div className="h-[1px] bg-gradient-to-r from-orange-500/30 via-pink-500 to-orange-500/30" /> */}
      </header>
    </>
  )
}
