import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "inaCMS Blog",
  description: "Mt web dev blog :)",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <div className="prose-xl dark:prose-invert mx-auto my-20 w-full max-w-4xl px-4 md:px-0">
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
