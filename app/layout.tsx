import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Secret Santa Wheel 2025',
  description: 'Spin the wheel to find out who you\'re getting a gift for!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Snowflakes */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="snowflake"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.5,
              }}
            >
              ❄
            </div>
          ))}
        </div>
        {children}
      </body>
    </html>
  )
}

