import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Fira_Code } from "next/font/google"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
})

const fira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "INAI — Build AI Agents. Ship Fast.",
  description:
    "Enterprise platform for conversational AI, automation bots, and custom agents. GPU-accelerated inference. Model-agnostic. Africa-native, globally scalable.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fira.variable}`}>
      <body>{children}</body>
    </html>
  )
}
