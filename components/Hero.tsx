'use client'

import { useState, useEffect } from 'react'
import { Play, Star, Zap, Gift } from 'lucide-react'

export default function Hero() {
    const [jackpot, setJackpot] = useState(1250000)

    useEffect(() => {
        const interval = setInterval(() => {
            setJackpot(prev => prev + Math.floor(Math.random() * 1000))
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-red-900/20"></div>
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-20 h-20 bg-casino-gold/10 rounded-full blur-xl animate-float"></div>
                <div className="absolute top-40 right-20 w-32 h-32 bg-casino-red/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-casino-purple/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-casino-gold/5 rounded-full blur-lg animate-bounce-slow" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/3 right-10 w-28 h-28 bg-casino-red/5 rounded-full blur-lg animate-spin-slow" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
                        <span className="block animate-slide-down">Играй в</span>
                        <span className="block bg-gradient-to-r from-casino-gold via-casino-red to-casino-gold bg-clip-text text-transparent animate-glow-pulse">
                            ЛУЧШИЕ СЛОТЫ
                        </span>
                        <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal mt-4 animate-slide-up">
                            и выигрывай миллионы!
                        </span>
                    </h1>

                    {/* Jackpot Display */}
                    <div className="bg-black/50 backdrop-blur-sm border-2 border-casino-gold rounded-2xl p-6 mb-8 glow animate-bounce-in">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <Star className="w-6 h-6 text-casino-gold animate-wiggle" />
                            <span className="text-casino-gold font-semibold text-lg">ДЖЕКПОТ</span>
                        </div>
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white animate-pulse">
                            ${jackpot.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-300 mt-2 animate-fade-in">И растет каждую секунду!</div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-casino-gold/50 transition-all duration-300 animate-slide-in-left hover:scale-105">
                            <Zap className="w-8 h-8 text-casino-gold mx-auto mb-3 animate-bounce-slow" />
                            <h3 className="text-white font-semibold mb-2">Мгновенные выплаты</h3>
                            <p className="text-gray-300 text-sm">Выводите выигрыши за секунды</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-casino-gold/50 transition-all duration-300 animate-fade-in hover:scale-105">
                            <Gift className="w-8 h-8 text-casino-gold mx-auto mb-3 animate-bounce-slow" style={{ animationDelay: '0.2s' }} />
                            <h3 className="text-white font-semibold mb-2">Бонус до 100%</h3>
                            <p className="text-gray-300 text-sm">Удвойте свой первый депозит</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-casino-gold/50 transition-all duration-300 animate-slide-in-right hover:scale-105">
                            <Star className="w-8 h-8 text-casino-gold mx-auto mb-3 animate-bounce-slow" style={{ animationDelay: '0.4s' }} />
                            <h3 className="text-white font-semibold mb-2">500+ игр</h3>
                            <p className="text-gray-300 text-sm">Лучшие слоты от топ-провайдеров</p>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-casino-gold to-casino-red text-black font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-casino-gold/50 transition-all btn-hover flex items-center justify-center space-x-2 animate-bounce-in hover:animate-tilt">
                            <Play className="w-6 h-6 animate-pulse" />
                            <span>ИГРАТЬ СЕЙЧАС</span>
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 border-2 border-casino-gold text-casino-gold font-bold text-lg rounded-xl hover:bg-casino-gold hover:text-black transition-all btn-hover animate-bounce-in hover:animate-tilt" style={{ animationDelay: '0.2s' }}>
                            СМОТРЕТЬ ДЕМО
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>Лицензированное казино</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>SSL шифрование</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>24/7 поддержка</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-10 animate-float">
                <div className="w-16 h-16 bg-casino-gold/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-rotate-3d">
                    <span className="text-2xl">🎰</span>
                </div>
            </div>
            <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-12 h-12 bg-casino-red/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-wiggle">
                    <span className="text-xl">💎</span>
                </div>
            </div>
            <div className="absolute bottom-1/4 left-1/3 animate-float" style={{ animationDelay: '3s' }}>
                <div className="w-14 h-14 bg-casino-purple/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-bounce-slow">
                    <span className="text-2xl">🎲</span>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/4 animate-float" style={{ animationDelay: '2.5s' }}>
                <div className="w-10 h-10 bg-casino-gold/30 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-spin-slow">
                    <span className="text-lg">💰</span>
                </div>
            </div>
            <div className="absolute bottom-1/3 right-1/4 animate-float" style={{ animationDelay: '4s' }}>
                <div className="w-12 h-12 bg-casino-red/30 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-tilt">
                    <span className="text-xl">🏆</span>
                </div>
            </div>
        </section>
    )
}
