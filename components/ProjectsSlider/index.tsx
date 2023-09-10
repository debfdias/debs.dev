import { projects } from "@/constants/projects"
import { motion } from "framer-motion"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md"
import AnimatedByWord from "../AnimatedByWord"

export default function ProjectsSlider() {
  const size = useWindowSize()
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: {
      perView: size.width < 1000 ? 2 : 3,
      spacing: size.width < 1000 ? 10 : 30,
    },
  })

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: 0,
    })

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        })
      }
      window.addEventListener("resize", handleResize)
      handleResize()
      return () => window.removeEventListener("resize", handleResize)
    }, [])
    return windowSize
  }

  return (
    <div className="container z-0 pt-20 pr-8">
      <motion.section
        variants={{
          visible: { transition: { staggerChildren: 0.25 } },
        }}
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        className="grid flex-1 grid-cols-1 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-16"
      >
        <div className="flex items-center">
          <button
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            className=" text-gray-300 hover:text-pink-500 hover:-translate-x-1 transition ease-in-out delay-150 mr-4 mb-16"
          >
            <MdOutlineArrowBackIosNew size={30} />
          </button>

          <div ref={sliderRef} className="keen-slider pb-8">
            {projects.map((project) => {
              return (
                <div
                  className="keen-slider__slide sm:p-3 p-2"
                  key={project.name}
                >
                  <Link
                    href={project.link}
                    className="col-span-12 flex flex-col md:col-span-6 xl:col-span-4"
                  >
                    <motion.article key={project.name}>
                      <motion.figure
                        variants={{
                          hidden: { scaleX: 0, originX: 0 },
                          visible: {
                            scaleX: 1,
                            originX: [0, 0, 0, 0, 0, 0, 0.5],
                            opacity: 1,
                            transition: {
                              duration: 0.75,
                              ease: [0.9, 0.1, 0.3, 0.96],
                              when: "beforeChildren",
                              delayChildren: 0.25,
                            },
                          },
                        }}
                        whileHover={{
                          translateY: -5,
                          scale: 1.05,
                          transition: { duration: 0.5, ease: "backInOut" },
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-500 z-0 border-2 border-solid border-blue-500 hover:border-pink-500 cursor-pointer rounded-sm"
                      >
                        <motion.img
                          variants={{
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: {
                                duration: 0.5,
                                ease: [0.6, 0.5, 0.5, 0.9],
                              },
                            },
                          }}
                          src={project.image}
                          alt={project.imageAlt}
                          className="object-cover"
                        />
                      </motion.figure>
                      <AnimatedByWord
                        text={project.name}
                        style="mt-3 text-md text-gray-300 font-thin"
                      />
                    </motion.article>
                  </Link>
                </div>
              )
            })}
          </div>

          <button
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            className="text-gray-300 hover:text-pink-500 hover:translate-x-1 transition ease-in-out delay-150 ml-4 mb-16"
          >
            <MdOutlineArrowForwardIos size={30} />
          </button>
        </div>
      </motion.section>
    </div>
  )
}
