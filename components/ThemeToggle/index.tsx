"use client";

import { useTheme } from "@/contexts/ThemeProvider";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { ComponentPropsWithRef, FC } from "react";
import { RxMoon, RxSun } from "react-icons/rx";

type IconButtonProps = HTMLMotionProps<"button"> &
  ComponentPropsWithRef<"button">;
const IconButton: FC<IconButtonProps> = ({ children, ...props }) => (
  <motion.button
    {...props}
    initial={{ opacity: 0, rotate: -90, originY: "150%", originX: 0.5 }}
    animate={{ opacity: 1, rotate: 0 }}
    exit={{ opacity: 0, rotate: 90 }}
    transition={{ duration: 0.5, ease: "backOut" }}
  >
    {children}
  </motion.button>
);
IconButton.displayName = "IconButton";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <AnimatePresence mode="wait">
        {theme === "light" ? (
          <IconButton
            key="dark-mode"
            className="dark:hover:text-gray-100 hover:text-pink-500"
            onClick={toggleTheme}
          >
            <RxMoon title="Dark mode" size={24} />
          </IconButton>
        ) : (
          <IconButton
            key="ligh-mode"
            className="dark:hover:text-gray-100"
            onClick={toggleTheme}
          >
            <RxSun title="Light mode" size={24} />
          </IconButton>
        )}
      </AnimatePresence>
    </>
  );
}
