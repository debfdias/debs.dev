"use client"
import { RxMoon } from "react-icons/rx"
import { Navbar } from "../Navbar"

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-1 pt-6 bg-blue-700/70 backdrop-blur-sm">
        <div className="flex justify-between px-20 sm:px-40">
          <div className="flex items-center gap-4 sm:gap-2">
            <Navbar />
          </div>
          <RxMoon size={24} />
        </div>
        <div className="h-[1px] border-t border-solid border-blue-500" />

        {/* <div className="h-[1px] bg-gradient-to-r from-orange-500/30 via-pink-500 to-orange-500/30" /> */}
      </header>
    </>
  )
}
