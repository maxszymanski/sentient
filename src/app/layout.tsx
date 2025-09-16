import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

const inter = Inter({
    subsets: ['latin'],
})

export const twkLausanne = localFont({
    src: '../fonts/TWKLausanne-450.woff2',
    variable: '--font-twk',
})
export const britti = localFont({
    src: '../fonts/britti-sans-regular.woff2',
    variable: '--font-britti',
})

export const metadata: Metadata = {
    title: {
        template: '%s | Sentient',
        default: 'Sentient',
    },
    description: 'Sentient page',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${twkLausanne.variable} ${britti.variable} text-mygray bg-dark antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
