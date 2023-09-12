import { mobileLinkVariants, mobileNavVariants } from "@/constants/variants"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRef, useState } from "react"
import { RxCross1, RxHamburgerMenu } from "react-icons/rx"

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/projects",
    name: "Projects",
  },
]

const MotionLink = motion(Link)

export function Navbar() {
  const navRef = useRef<HTMLElement>(null)

  const [isOpen, setIsOpen] = useState(false)
  let pathname = usePathname()

  if (pathname.includes("/projects/")) {
    pathname = "/projects"
  }

  const [hoveredPath, setHoveredPath] = useState(pathname)

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <nav className="hidden sm:block">
          <div className="flex gap-4">
            {navItems.map((item) => {
              const isActive = item.path === pathname
              return (
                <Link
                  key={item.path}
                  className={`px-4 pb-4 text-lg font-semibold relative no-underline duration-300 ease-in hover:text-gray-200 ${
                    isActive ? "text-gray-100" : "text-gray-300"
                  }`}
                  data-active={isActive}
                  href={item.path}
                  onMouseOver={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath(pathname)}
                >
                  <span>{item.name}</span>
                  {item.path === pathname && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-pink-500 via-pink-500 to-orange-500 rounded-md"
                      layoutId="navbar"
                      aria-hidden="true"
                      style={{
                        width: "100%",
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        stiffness: 100,
                        damping: 12,
                        duration: 0.1,
                      }}
                    />
                  )}

                  {item.path === hoveredPath && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-pink-500 via-pink-500 to-orange-500 rounded-md"
                      layoutId="navbar"
                      aria-hidden="true"
                      style={{
                        width: "100%",
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.25,
                        stiffness: 100,
                        damping: 12,
                        duration: 0.1,
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </div>
        </nav>
      </motion.div>
      <div className="sm:hidden">
        <button
          className="pb-4 text-gray-200 hover:text-pink-500 hover:transition-colors hover:duration-300 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RxHamburgerMenu size={24} aria-hidden="true" />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black/50 h-screen backdrop-blur-sm">
            <motion.nav
              ref={navRef}
              variants={mobileNavVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 bg-blue-500 w-[300px] h-screen"
            >
              <button
                className="pt-5 pl-12 pb-16 text-gray-200 hover:text-pink-500 hover:transition-colors hover:duration-300 md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <RxCross1 size={24} aria-hidden="true" />
              </button>
              {navItems.map((route) => (
                <div
                  key={route.name}
                  className="pl-12 mb-8 text-3xl font-semibold text-gray-200 flex flex-col"
                >
                  <MotionLink
                    className="group"
                    href={route.path}
                    onClick={() => setIsOpen(false)}
                    variants={mobileLinkVariants}
                  >
                    <div className="">
                      <div className="hover:text-pink-500 py-3">
                        {route.name}
                      </div>
                    </div>
                  </MotionLink>
                </div>
              ))}
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
