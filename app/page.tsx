"use client"
import ContactForm from "@/components/Form"
import Link from "next/link"
import { GiHand } from "react-icons/gi"
import { GrDocumentPdf } from "react-icons/gr"

export default function Home() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const href = e.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <main className="">
      <div className="sm:w-2/3 sm:mr-0 mr-24">
        <div className="flex mb-3 text-4xl sm:text-5xl font-semibold">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-orange-500 mb-8 whitespace-nowrap">
            <span className=" text-gray-100">Hey there, I am</span> Debs!
          </h2>
        </div>

        <div className="text-gray-200 font-thin text-lg">
          <p>
            I am a software engineer based in Recife, Brazil. I have experience
            in building scalable, secure and accessible applications using
            various frameworks and technologies. I am passionate about creating
            high-quality code that follows best practices and industry
            standards.
          </p>
          <div className="py-12 sm:flex sm:gap-8">
            <Link
              href={
                "https://drive.google.com/uc?id=1jacl2prStuJP1RukfGo6lG0tuMYNK0wf&export=download"
              }
            >
              <button className="bg-gradient-to-l from-pink-500 to-pink-700 rounded-md py-3 px-6 flex gap-4 hover:brightness-90 hover:scale-[1.05] hover:-translate-y-1 transition ease-in-out delay-150 mb-4 sm:mb-0 w-full sm:w-auto items-center justify-center">
                <GrDocumentPdf size={20} />
                <div className="text-blue-700 font-semibold whitespace-nowrap">
                  Download resume
                </div>
              </button>
            </Link>

            <Link href="#getInTouch" onClick={handleScroll}>
              <button className="bg-gray-100 rounded-md py-3 px-6 flex gap-4 hover:brightness-90 hover:scale-[1.05] hover:-translate-y-1 transition ease-in-out delay-150 text-blue-700 w-full sm:w-auto items-center justify-center">
                <GiHand size={20} />
                <div className="font-semibold whitespace-nowrap">
                  Let&apos;s talk!
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="">
        <div className="pt-12 sm:pt-24 flex items-center font-thin pr-12 sm:pr-0">
          <h2 className="text-gray-200 text-xl sm:text-xl whitespace-nowrap">
            Lastest projects
          </h2>
          <div className="mx-8 h-[1px] w-full bg-gradient-to-r from-pink-500/20 via-pink-500/50 to-orange-500/20 min-w-[220px]" />
        </div>

        <div className="pt-12 sm:pt-24 flex items-center font-thin pr-12 sm:pr-0 mb-12">
          <h2 className="text-gray-200 text-xl sm:text-xl whitespace-nowrap">
            Get in touch
          </h2>
          <div className="ml-16 mr-8 h-[1px] sm:w-full bg-gradient-to-r from-pink-500/20 via-pink-500/50 to-orange-500/20 min-w-[220px]" />
        </div>
        <div className="sm:flex pr-16 sm:pr-0 justify-between" id="getInTouch">
          <div className="font-thin text-gray-200 sm:w-1/2 text-lg mb-8">
            Do not hesitate to contact me through the form on the side or by
            email on{" "}
            <a
              href="mailto:debfdias@gmail.com"
              className="text-gray-100 hover:underline hover:text-pink-500 font-semibold"
            >
              debfdias@gmail.com
            </a>{" "}
            regardless of the subject.
          </div>
          <div className="sm:w-2/5 min-w-[300px]">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
