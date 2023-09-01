import { GitHub, LinkedIn, Mail } from "iconoir-react"

const socialNetworks = [
  { icon: <GitHub />, href: "https://github.com/debfdias", title: "Github" },
  {
    icon: <LinkedIn />,
    href: "https://linkedin.com/in/debfdias",
    title: "LinkedIn",
  },
  { icon: <Mail />, href: `mailto:debfdias@gmail.com`, title: "Email" },
]

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-10 border-t border-solid border-blue-500 text-center pt-10 pb-4 text-grey-300">
      <div>
        <div className="mb-4">
          <p className="font-medium text-lg mb-2 text-grey-200">Débora Dias</p>
          <p className="text-gray-200">
            A software engineer crafting amazing experiences.
          </p>
        </div>
        <div className="flex gap-6 justify-center text-gray-200 text-lg">
          {socialNetworks.map((link) => (
            <a
              key={link.href}
              className="hover:text-pink-500 hover:rotate-[4deg] hover:transition-all"
              target="_blank"
              href={link.href}
              aria-label={link.title}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-300 mt-4">
        © {new Date().getFullYear()} Débora Dias
      </p>
    </footer>
  )
}
