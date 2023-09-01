import Footer from "@/components/Footer"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
    <html data-theme="dark" lang="en" className={inter.className}>
      <body>
        <div className="flex justify-center min-h-screen">
          <main className="w-full max-w-screen-lg">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
