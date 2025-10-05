'use client'

import { useState, useEffect } from 'react'
import { Gift, Clock, Star, Zap, Trophy, Shield, CreditCard } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const bonuses = [
    {
        id: 1,
        title: 'Приветственный бонус',
        description: 'Получите 100% к первому депозиту + 50 фриспинов',
        amount: '100%',
        maxAmount: 'до $1000',
        icon: Gift,
        color: 'from-casino-gold to-casino-red',
        isPopular: true,
    },
    {
        id: 2,
        title: 'Еженедельный кэшбэк',
        description: 'Возвращаем 15% от всех проигрышей каждую неделю',
        amount: '15%',
        maxAmount: 'до $500',
        icon: CreditCard,
        color: 'from-casino-purple to-casino-gold',
        isPopular: false,
    },
    {
        id: 3,
        title: 'Бонус за депозит',
        description: 'Дополнительные 50% к любому депозиту от $100',
        amount: '50%',
        maxAmount: 'до $500',
        icon: Star,
        color: 'from-casino-red to-casino-purple',
        isPopular: false,
    },
]

const features = [
    {
        icon: Shield,
        title: 'Безопасность',
        description: 'Лицензированное казино с SSL шифрованием',
    },
    {
        icon: Clock,
        title: 'Быстрые выплаты',
        description: 'Вывод средств за 5-15 минут',
    },
    {
        icon: Trophy,
        title: 'VIP программа',
        description: 'Эксклюзивные бонусы для постоянных игроков',
    },
    {
        icon: Zap,
        title: 'Мобильная версия',
        description: 'Играйте на любом устройстве',
    },
]

export default function BonusSection() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 59,
        seconds: 59,
    })

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 }
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
                } else if (prev.hours > 0) {
                    return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
                } else {
                    return { hours: 23, minutes: 59, seconds: 59 }
                }
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <section id="bonuses" className="py-20 bg-gradient-to-b from-black to-casino-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollAnimation animation="slide-down" delay={200}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                            <span className="bg-gradient-to-r from-casino-gold to-casino-red bg-clip-text text-transparent animate-glow-pulse">
                                БОНУСЫ И АКЦИИ
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Получайте максимальную выгоду от каждой игры с нашими щедрыми бонусами!
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Limited Time Offer */}
                <ScrollAnimation animation="bounce-in" delay={400}>
                    <div className="bg-gradient-to-r from-casino-red to-casino-gold rounded-2xl p-8 mb-16 text-center relative overflow-hidden animate-glow-pulse">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black text-white mb-4 animate-wiggle">
                                🔥 ОГРАНИЧЕННОЕ ПРЕДЛОЖЕНИЕ 🔥
                            </h3>
                            <p className="text-xl text-white mb-6 animate-fade-in">
                                Двойной бонус на первый депозит - только сегодня!
                            </p>

                            {/* Countdown Timer */}
                            <div className="flex justify-center gap-4 mb-6">
                                <div className="bg-black/30 rounded-lg p-4 min-w-[80px] animate-bounce-slow">
                                    <div className="text-2xl font-black text-white animate-pulse">{timeLeft.hours.toString().padStart(2, '0')}</div>
                                    <div className="text-sm text-gray-300">часов</div>
                                </div>
                                <div className="bg-black/30 rounded-lg p-4 min-w-[80px] animate-bounce-slow" style={{ animationDelay: '0.2s' }}>
                                    <div className="text-2xl font-black text-white animate-pulse">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                                    <div className="text-sm text-gray-300">минут</div>
                                </div>
                                <div className="bg-black/30 rounded-lg p-4 min-w-[80px] animate-bounce-slow" style={{ animationDelay: '0.4s' }}>
                                    <div className="text-2xl font-black text-white animate-pulse">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                                    <div className="text-sm text-gray-300">секунд</div>
                                </div>
                            </div>

                            <button className="px-8 py-4 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-100 transition-all btn-hover animate-bounce-in hover:animate-tilt">
                                ПОЛУЧИТЬ БОНУС СЕЙЧАС
                            </button>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Bonuses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {bonuses.map((bonus, index) => (
                        <ScrollAnimation
                            key={bonus.id}
                            animation="scale-in"
                            delay={600 + index * 200}
                        >
                            <div
                                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-casino-gold/50 transition-all duration-300 hover:scale-105 ${bonus.isPopular ? 'ring-2 ring-casino-gold animate-pulse' : ''
                                    }`}
                            >
                                {bonus.isPopular && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-casino-gold text-black px-4 py-1 rounded-full text-sm font-bold">
                                            ПОПУЛЯРНЫЙ
                                        </span>
                                    </div>
                                )}

                                <div className={`w-16 h-16 bg-gradient-to-r ${bonus.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                                    <bonus.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-white text-center mb-4">{bonus.title}</h3>
                                <p className="text-gray-300 text-center mb-6">{bonus.description}</p>

                                <div className="text-center mb-6">
                                    <div className="text-4xl font-black text-casino-gold mb-2">{bonus.amount}</div>
                                    <div className="text-white font-semibold">{bonus.maxAmount}</div>
                                </div>

                                <button className="w-full py-3 bg-gradient-to-r from-casino-gold to-casino-red text-black font-bold rounded-xl hover:shadow-lg hover:shadow-casino-gold/25 transition-all btn-hover hover:animate-tilt">
                                    Получить бонус
                                </button>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <ScrollAnimation
                            key={index}
                            animation="slide-up"
                            delay={1200 + index * 200}
                        >
                            <div className="text-center hover:scale-105 transition-transform">
                                <div className="w-16 h-16 bg-casino-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce-slow">
                                    <feature.icon className="w-8 h-8 text-casino-gold" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                                <p className="text-gray-400 text-sm">{feature.description}</p>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

                {/* Terms and Conditions */}
                <ScrollAnimation animation="fade-in" delay={2000}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6 text-center">Условия получения бонусов</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                            <div>
                                <h4 className="text-white font-semibold mb-3">Общие условия:</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• Минимальный депозит: $10</li>
                                    <li>• Вейджер: x35 от суммы бонуса</li>
                                    <li>• Срок отыгрыша: 30 дней</li>
                                    <li>• Максимальная ставка: $5</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-3">Ограничения:</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>• Один бонус на аккаунт</li>
                                    <li>• Нельзя комбинировать с другими акциями</li>
                                    <li>• Выплаты только после отыгрыша</li>
                                    <li>• Администрация оставляет право изменять условия</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}
