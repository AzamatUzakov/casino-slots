'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
    children: React.ReactNode
    animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-in' | 'bounce-in'
    delay?: number
    duration?: number
    threshold?: number
    className?: string
}

export default function ScrollAnimation({
    children,
    animation = 'fade-in',
    delay = 0,
    duration = 0.6,
    threshold = 0.1,
    className = ''
}: ScrollAnimationProps) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true)
                    }, delay)
                }
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [delay, threshold])

    const animationClasses = {
        'fade-in': isVisible ? 'animate-fade-in' : 'opacity-0',
        'slide-up': isVisible ? 'animate-slide-up' : 'translate-y-10 opacity-0',
        'slide-down': isVisible ? 'animate-slide-down' : '-translate-y-10 opacity-0',
        'slide-left': isVisible ? 'animate-slide-in-left' : '-translate-x-10 opacity-0',
        'slide-right': isVisible ? 'animate-slide-in-right' : 'translate-x-10 opacity-0',
        'scale-in': isVisible ? 'animate-scale-in' : 'scale-95 opacity-0',
        'bounce-in': isVisible ? 'animate-bounce-in' : 'scale-0 opacity-0'
    }

    return (
        <div
            ref={ref}
            className={`transition-all duration-${Math.round(duration * 1000)} ${animationClasses[animation]} ${className}`}
            style={{ transitionDuration: `${duration}s` }}
        >
            {children}
        </div>
    )
}
