import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Casino Slots - Играй и Выигрывай!',
    description: 'Лучшие слоты и казино игры онлайн. Большие бонусы и джекпоты ждут вас!',
    keywords: 'казино, слоты, онлайн игры, бонусы, джекпот',
    authors: [{ name: 'Casino Slots' }],
    viewport: 'width=device-width, initial-scale=1',

    icons: {
        icon: '/kazik.jpg',
    },
    openGraph: {
        title: 'Casino Slots - Играй и Выигрывай!',
        description: 'Лучшие слоты и казино игры онлайн. Большие бонусы и джекпоты ждут вас!',
        url: 'https://your-domain.com',
        siteName: 'Casino Slots',
        images: [
            {
                url: 'https://i.ibb.co/mF2fNBcB/kazik.jpg',
                width: 1200,
                height: 630,
                alt: 'Casino Slots Preview',
            },
        ],
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        images: ['https://i.ibb.co/mF2fNBcB/kazik.jpg'],
    },
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
