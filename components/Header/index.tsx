"use client";
import { Navbar } from "../Navbar";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 pt-6 dark:bg-blue-700/70 bg-white/40 backdrop-blur-sm">
      <div className="flex justify-between px-12 lg:px-44">
        <div className="flex items-center gap-4 sm:gap-2">
          <Navbar />
        </div>
        <div className="text-gray-300">
          <ThemeToggle />
        </div>
      </div>
      <div className="h-[1px] border-t border-solid dark:border-blue-500 border-gray-200" />
    </header>
  );
}
