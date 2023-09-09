"use client"
import { LiaMapSignsSolid } from "react-icons/lia"

export default function NotFound() {
  return (
    <div className="">
      <div className="text-2xl sm:text-4xl flex items-center gap-8">
        <LiaMapSignsSolid size={36} />
        Nothig found here. Are you lost?
      </div>
    </div>
  )
}
