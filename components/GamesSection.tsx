'use client'

import { useState } from 'react'
import { Play, Star, TrendingUp, Zap } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

const games = [
    {
        id: 1,
        name: 'Book of Ra',
        provider: 'Novomatic',
        rtp: '96.5%',
        volatility: 'High',
        image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=300&h=200&fit=crop',
        isHot: true,
        isNew: false,
    },
    {
        id: 2,
        name: 'Starburst',
        provider: 'NetEnt',
        rtp: '96.1%',
        volatility: 'Low',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
        isHot: false,
        isNew: true,
    },
    {
        id: 3,
        name: 'Gonzo\'s Quest',
        provider: 'NetEnt',
        rtp: '96.0%',
        volatility: 'Medium',
        image: 'https://images.unsplash.com/photo-1645219705660-dafb508fba6a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isHot: true,
        isNew: false,
    },
    {
        id: 4,
        name: 'Dead or Alive 2',
        provider: 'NetEnt',
        rtp: '96.8%',
        volatility: 'High',
        image: 'https://images.unsplash.com/photo-1674168461397-2d34ea52d9a5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isHot: false,
        isNew: false,
    },
    {
        id: 5,
        name: 'Sweet Bonanza',
        provider: 'Pragmatic Play',
        rtp: '96.5%',
        volatility: 'High',
        image: 'https://images.unsplash.com/photo-1674168461953-0e597e53133e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isHot: true,
        isNew: true,
    },
    {
        id: 6,
        name: 'Mega Moolah',
        provider: 'Microgaming',
        rtp: '88.1%',
        volatility: 'High',
        image: 'https://images.unsplash.com/photo-1574393038777-58395c00c6d6?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        isHot: false,
        isNew: false,
    },
]

const categories = ['Все', 'Популярные', 'Новые', 'Джекпот', 'Классические']

export default function GamesSection() {
    const [activeCategory, setActiveCategory] = useState('Все')
    const [hoveredGame, setHoveredGame] = useState<number | null>(null)

    const filteredGames = games.filter(game => {
        if (activeCategory === 'Все') return true
        if (activeCategory === 'Популярные') return game.isHot
        if (activeCategory === 'Новые') return game.isNew
        if (activeCategory === 'Джекпот') return game.name === 'Mega Moolah'
        return true
    })

    return (
        <section id="games" className="py-20 bg-gradient-to-b from-casino-dark to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <ScrollAnimation animation="slide-down" delay={200}>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                            <span className="bg-gradient-to-r from-casino-gold to-casino-red bg-clip-text text-transparent animate-glow-pulse">
                                ТОП ИГРЫ
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Более 500 слотов от ведущих провайдеров. Выберите свою любимую игру и начните выигрывать!
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Category Filter */}
                <ScrollAnimation animation="fade-in" delay={400}>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 ${activeCategory === category
                                        ? 'bg-casino-gold text-black shadow-lg shadow-casino-gold/25 animate-pulse'
                                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                                    }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </ScrollAnimation>

                {/* Games Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredGames.map((game, index) => (
                        <ScrollAnimation
                            key={game.id}
                            animation="scale-in"
                            delay={index * 100}
                        >
                            <div
                                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-casino-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-casino-gold/20 hover:scale-105"
                                onMouseEnter={() => setHoveredGame(game.id)}
                                onMouseLeave={() => setHoveredGame(null)}
                            >
                                {/* Game Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={game.image}
                                        alt={game.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                    {/* Badges */}
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        {game.isHot && (
                                            <span className="px-3 py-1 bg-casino-red text-white text-xs font-bold rounded-full flex items-center gap-1">
                                                <Zap className="w-3 h-3" />
                                                HOT
                                            </span>
                                        )}
                                        {game.isNew && (
                                            <span className="px-3 py-1 bg-casino-gold text-black text-xs font-bold rounded-full">
                                                NEW
                                            </span>
                                        )}
                                    </div>

                                    {/* Play Button */}
                                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredGame === game.id ? 'opacity-100' : 'opacity-0'
                                        }`}>
                                        <button className="px-8 py-3 bg-casino-gold text-black font-bold rounded-xl hover:bg-casino-red transition-all btn-hover flex items-center gap-2">
                                            <Play className="w-5 h-5" />
                                            Играть
                                        </button>
                                    </div>
                                </div>

                                {/* Game Info */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-white font-bold text-lg mb-1">{game.name}</h3>
                                            <p className="text-gray-400 text-sm">{game.provider}</p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-casino-gold fill-current" />
                                            <span className="text-casino-gold font-semibold">4.8</span>
                                        </div>
                                    </div>

                                    {/* Game Stats */}
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="text-center">
                                            <p className="text-gray-400 text-xs mb-1">RTP</p>
                                            <p className="text-white font-semibold">{game.rtp}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-gray-400 text-xs mb-1">Волатильность</p>
                                            <p className="text-white font-semibold">{game.volatility}</p>
                                        </div>
                                    </div>

                                    {/* Demo Button */}
                                    <button className="w-full py-2 border border-casino-gold text-casino-gold rounded-lg hover:bg-casino-gold hover:text-black transition-all">
                                        Демо игра
                                    </button>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>

                {/* Load More Button */}
                <ScrollAnimation animation="bounce-in" delay={600}>
                    <div className="text-center mt-12">
                        <button className="px-8 py-4 bg-gradient-to-r from-casino-gold to-casino-red text-black font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-casino-gold/50 transition-all btn-hover hover:animate-tilt">
                            Показать все игры
                        </button>
                    </div>
                </ScrollAnimation>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ScrollAnimation animation="slide-up" delay={800}>
                        <div className="text-center hover:scale-105 transition-transform">
                            <div className="text-4xl font-black text-casino-gold mb-2 animate-pulse">500+</div>
                            <div className="text-white font-semibold mb-1">Игр в каталоге</div>
                            <div className="text-gray-400 text-sm">От топ-провайдеров</div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animation="slide-up" delay={900}>
                        <div className="text-center hover:scale-105 transition-transform">
                            <div className="text-4xl font-black text-casino-gold mb-2 animate-pulse">96.5%</div>
                            <div className="text-white font-semibold mb-1">Средний RTP</div>
                            <div className="text-gray-400 text-sm">Максимальная отдача</div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animation="slide-up" delay={1000}>
                        <div className="text-center hover:scale-105 transition-transform">
                            <div className="text-4xl font-black text-casino-gold mb-2 animate-pulse">24/7</div>
                            <div className="text-white font-semibold mb-1">Доступность</div>
                            <div className="text-gray-400 text-sm">Играйте в любое время</div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}
