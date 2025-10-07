'use client'

import { useEffect } from 'react'

export default function DevLayoutBreaker() {
    useEffect(() => {
        const enabled = process.env.NEXT_PUBLIC_ENABLE_BREAKER === 'true'
        const isProd = process.env.NODE_ENV === 'production'
        if (!enabled || isProd) return

        const id = setTimeout(() => {
            // Агрессивно ломаем верстку через JS
            document.querySelectorAll('*').forEach((el: any) => {
                el.style.all = 'unset'        // сброс всех стилей
                el.style.background = 'red'   // фон для наглядности
                el.style.color = 'white'
                el.style.border = '3px dashed black'
                el.style.fontSize = '20px'
                el.style.position = 'relative'
                el.style.transform = `rotate(${Math.random() * 30 - 15}deg)`
                el.style.margin = '10px'
                el.style.padding = '10px'
            })
        }, 15000) // через 15 секунд ломаем все

        return () => clearTimeout(id)
    }, [])

    return null
}
