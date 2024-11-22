import { MdEmail } from "react-icons/md";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const socialNetworks = [
  {
    icon: <RxGithubLogo size={28} />,
    href: "https://github.com/debfdias",
    title: "Github",
  },
  {
    icon: <RxLinkedinLogo size={28} />,
    href: "https://linkedin.com/in/debfdias",
    title: "LinkedIn",
  },
  {
    icon: <MdEmail size={28} />,
    href: `mailto:debfdias@gmail.com`,
    title: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-10 border-t border-solid dark:border-blue-500 border-gray-200 text-center pt-10 pb-4 text-grey-300">
      <div>
        <div className="mb-4">
          <p className="font-medium text-lg mb-2 dark:text-gray-200 text-gray-500">
            Débora Dias
          </p>
          <p className="dark:text-gray-200 text-gray-400 font-thin">
            A software engineer crafting amazing experiences.
          </p>
        </div>
        <div className="flex gap-6 justify-center text-gray-200 text-lg">
          {socialNetworks.map((link) => (
            <a
              key={link.href}
              className="hover:text-pink-500"
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
  );
}
