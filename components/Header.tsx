'use client'

import { useState } from 'react'
import { Menu, X, Star, Trophy } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-casino-gold/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-14 h-14 rounded-lg flex items-center justify-center ">
                            <img src="/casino.png" alt="" />
                        </div>

                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 animate-fade-in">
                        <a href="#games" className="text-white hover:text-casino-gold transition-colors hover:scale-105">
                            Игры
                        </a>
                        <a href="#bonuses" className="text-white hover:text-casino-gold transition-colors hover:scale-105">
                            Бонусы
                        </a>
                        <a href="#jackpot" className="text-white hover:text-casino-gold transition-colors hover:scale-105">
                            Джекпот
                        </a>
                        <a href="#support" className="text-white hover:text-casino-gold transition-colors hover:scale-105">
                            Поддержка
                        </a>
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4 animate-slide-in-right">
                        <button className="px-4 py-2 text-white border border-casino-gold rounded-lg hover:bg-casino-gold hover:text-black transition-all hover:scale-105">
                            Войти
                        </button>
                        <button className="px-6 py-2 bg-gradient-to-r from-casino-gold to-casino-red text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-casino-gold/25 transition-all btn-hover hover:animate-tilt">
                            Играть
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white hover:scale-110 transition-transform"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6 animate-rotate-3d" /> : <Menu className="w-6 h-6 animate-bounce-slow" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden animate-slide-down">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-lg mt-2">
                            <a href="#games" className="block px-3 py-2 text-white hover:text-casino-gold transition-colors">
                                Игры
                            </a>
                            <a href="#bonuses" className="block px-3 py-2 text-white hover:text-casino-gold transition-colors">
                                Бонусы
                            </a>
                            <a href="#jackpot" className="block px-3 py-2 text-white hover:text-casino-gold transition-colors">
                                Джекпот
                            </a>
                            <a href="#support" className="block px-3 py-2 text-white hover:text-casino-gold transition-colors">
                                Поддержка
                            </a>
                            <div className="pt-4 space-y-2">
                                <button className="w-full px-4 py-2 text-white border border-casino-gold rounded-lg hover:bg-casino-gold hover:text-black transition-all">
                                    Войти
                                </button>
                                <button className="w-full px-6 py-2 bg-gradient-to-r from-casino-gold to-casino-red text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-casino-gold/25 transition-all">
                                    Играть
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
