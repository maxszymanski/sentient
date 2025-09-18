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
export const diatype = localFont({
    src: '../fonts/ABCDiatypePlusVariable-Regular.woff2',
    variable: '--font-diatype',
})

export const metadata: Metadata = {
    title: {
        template: '%s | Sentient',
        default: 'Sentient',
    },
    description: 'Sentient page',
    icons: {
        icon: [
            { url: '/favicon.svg' },
            { url: '/favicon-32.svg', sizes: '32x32', type: 'image/svg' },
        ],

        apple: '/favicon-180.svg',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${twkLausanne.variable} ${britti.variable} ${diatype.variable} text-mygray bg-dark relative h-full antialiased`}
            >
                {children}
            </body>
        </html>
    )
}
