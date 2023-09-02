import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ThemeProvider from "@/contexts/ThemeProvider"
import type { Metadata } from "next"
import { Signika } from "next/font/google"
import "./globals.css"

const font = Signika({ subsets: ["latin"], weight: ["400"] })

export const metadata: Metadata = {
  title: "Débora Dias",
  description:
    "A software engineer with a passion for developing robust and efficient solutions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme="dark" lang="en" className={font.className}>
      <body>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
        <div className="flex justify-center min-h-screen">
          <main className="w-full max-w-screen-lg">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
