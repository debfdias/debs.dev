import { Dialog, Transition } from "@headlessui/react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment, useState } from "react"
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

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  let pathname = usePathname()

  const [hoveredPath, setHoveredPath] = useState(pathname)

  return (
    <div>
      <nav className="hidden sm:block">
        <div className="flex gap-4">
          {navItems.map((item) => {
            const isActive = item.path === pathname
            const isHome = pathname === "/"
            return (
              <Link
                key={item.path}
                className={`px-4 pb-4 text-md font-semibold relative no-underline duration-300 ease-in hover:text-gray-200 ${
                  isActive ? "text-gray-100" : "text-gray-300"
                }`}
                data-active={isActive}
                href={item.path}
                onMouseOver={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(pathname)}
              >
                <span>{item.name}</span>
                {item.path === hoveredPath && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-pink-500 via-pink-500 to-orange-500 rounded-md -z-10"
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

      <div className="flex items-center sm:hidden">
        <button
          aria-label="Open Menu"
          className="rounded p-2 text-gray-600 hover:bg-neutral-100 hover:text-gray-900 hover:transition-colors hover:duration-300 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
          onClick={() => setIsOpen(true)}
        >
          <RxHamburgerMenu size={24} aria-hidden="true" />
        </button>

        <Transition show={isOpen} as={Fragment}>
          <Dialog onClose={() => setIsOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div
                className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
                aria-hidden="true"
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="fixed top-0 right-0 z-50 flex h-full w-full max-w-[280px] flex-col overflow-y-scroll bg-white p-6 text-gray-900 shadow-2xl dark:bg-gray-900 dark:text-gray-300">
                <button
                  className="ml-auto"
                  aria-label="Close Menu"
                  onClick={() => setIsOpen(false)}
                >
                  <RxCross1 size={24} aria-hidden="true" />
                </button>

                <nav>
                  <ul className="flex flex-col space-y-6 text-lg font-semibold">
                    {navItems.map((route) => (
                      <li key={route.name}>
                        <Link
                          className="p-2"
                          href={route.path}
                          onClick={() => setIsOpen(false)}
                        >
                          {route.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </Dialog>
        </Transition>
      </div>
    </div>
  )
}
