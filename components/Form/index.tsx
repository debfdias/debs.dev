import { LuSend } from "react-icons/lu"

export default function ContactForm() {
  return (
    <div className="sm:px-12 sm:pr-6 pb-12 pr-4">
      <label className="font-thin text-sm text-gray-300 mb-2 flex">Name</label>
      <input
        className="bg-blue-500 p-2 rounded-md text-gray-300 w-full mb-6 text-md font-thin focus:outline-none focus:ring-1 focus:ring-pink-500 "
        placeholder="John Doe"
      ></input>

      <label className="font-thin text-sm text-gray-300 mb-2 flex">
        E-mail
      </label>
      <input
        className="bg-blue-500 p-2 rounded-md text-gray-300 w-full mb-6 font-thin focus:outline-none focus:ring-1 focus:ring-pink-500 "
        placeholder="your@email.com"
      ></input>

      <label className="font-thin text-sm text-gray-300 mb-2 flex">
        Message
      </label>
      <textarea
        className="bg-blue-500 p-2 rounded-md text-gray-300 w-full mb-6 font-thin focus:outline-none focus:ring-1 focus:ring-pink-500 resize-none h-[120px]"
        placeholder="Your awesome message"
      ></textarea>

      <button className="flex text-gray-200 items-center gap-2 hover:text-pink-500 hover:scale-[1.05] hover:translate-x-1 transition ease-in-out delay-150">
        <LuSend size={24} />
        <div className="font-semibold whitespace-nowrap text-lg">Send it</div>
      </button>
    </div>
  )
}
