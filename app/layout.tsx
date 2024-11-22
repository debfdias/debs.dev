import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Signika } from "next/font/google";
import "./globals.css";

const font = Signika({ subsets: ["latin"], weight: ["300", "400"] });

export const metadata: Metadata = {
  title: "Débora Dias",
  description:
    "A software engineer with a passion for developing robust and efficient solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`dark ${font.className}`} data-theme="dark" lang="en">
      <body>
        <ThemeProvider>
          <Header />
          <div className="flex min-h-screen">
            <main className="w-full pt-24 lg:px-44 pl-12 items-start">
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
