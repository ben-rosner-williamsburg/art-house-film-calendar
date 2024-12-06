import "@/styles/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "NYC Art House Film Calendar",
  description: "Discover and explore art house film screenings in New York City",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray-50"}>{children}</body>
    </html>
  )
}

