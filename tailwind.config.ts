import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          500: "#e95373",
          700: "#c93051",
        },
        blue: {
          500: "#272940",
          600: "#1c1e30",
          700: "#141527",
        },
        gray: {
          100: "#eeeef0",
          200: "#bbbfcf",
          300: "#9297a8",
        },
      },
    },
  },
  plugins: [],
}
export default config
