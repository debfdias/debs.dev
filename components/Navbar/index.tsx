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

      <div className="flex items-center sm:hidden">
        <button
          aria-label="Open Menu"
          className="pb-4 text-gray-200 hover:text-pink-500 hover:transition-colors hover:duration-300 "
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
              <Dialog.Panel className="fixed top-0 right-0 z-50 flex h-full w-full max-w-[250px] flex-col overflow-y-scroll bg-blue-600 p-6 text-gray-200">
                <button
                  className="ml-auto hover:text-pink-100"
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                >
                  <RxCross1 size={24} aria-hidden="true" />
                </button>

                <nav>
                  <ul className="text-3xl font-semibold mt-4">
                    {navItems.map((route) => (
                      <li key={route.name} className="mb-12">
                        <Link
                          className="ml-4 py-3 group"
                          href={route.path}
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="left-0 w-[4px] absolute ">
                            <div className="ml-[30px] hover:text-pink-500 py-3">
                              {route.name}
                            </div>
                          </div>
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
