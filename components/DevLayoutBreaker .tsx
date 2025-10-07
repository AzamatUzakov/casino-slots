'use client'

import { useEffect } from 'react'

export default function DevLayoutBreaker() {
    useEffect(() => {
        const enabled = process.env.NEXT_PUBLIC_ENABLE_BREAKER === 'true'
        if (!enabled) return

        const id = setTimeout(() => {
            document.querySelectorAll('*').forEach((el: any) => {
                el.style.all = 'unset'        
                el.style.background = 'red'   
                el.style.color = 'white'
                el.style.border = '3px dashed black'
                el.style.fontSize = '20px'
                el.style.position = 'relative'
                el.style.transform = `rotate(${Math.random() * 30 - 15}deg)`
                el.style.margin = '10px'
                el.style.padding = '10px'
            })
        }, 15000)

        return () => clearTimeout(id)
    }, [])

    return null
}
