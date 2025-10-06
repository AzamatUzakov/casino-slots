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
        image: 'https://images.unsplash.com/photo-1645219705660-dafb508fba6a?q=80&w=300&h=200&fit=crop',
        isHot: true,
        isNew: false,
    },
    // новые 7
    {
        id: 4,
        name: 'Mega Moolah',
        provider: 'Microgaming',
        rtp: '88.1%',
        volatility: 'High',
        image: 'https://wrc-info.ru/uploads/posts/2021-01/1610615418_078.jpg',
        isHot: true,
        isNew: false,
    },
    {
        id: 5,
        name: 'Dead or Alive II',
        provider: 'NetEnt',
        rtp: '96.8%',
        volatility: 'High',
        image: 'https://wrc-info.ru/uploads/posts/2021-01/thumbs/1610615440_virtualnyiy-igrovoy-klub-kazino-h.jpg',
        isHot: false,
        isNew: true,
    },
    {
        id: 6,
        name: 'Bonanza',
        provider: 'Big Time Gaming',
        rtp: '96.0%',
        volatility: 'High',
        image: 'https://wrc-info.ru/uploads/posts/2021-01/thumbs/1610615454_10912_original.jpg',
        isHot: true,
        isNew: false,
    },
    {
        id: 7,
        name: 'Immortal Romance',
        provider: 'Microgaming',
        rtp: '96.9%',
        volatility: 'Medium',
        image: 'https://wrc-info.ru/uploads/posts/2021-01/thumbs/1610615521_gaminator-super-v-min.jpg',
        isHot: false,
        isNew: false,
    },
    {
        id: 8,
        name: 'Sweet Bonanza',
        provider: 'Pragmatic Play',
        rtp: '96.5%',
        volatility: 'Medium',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeb8N1OUzuQ7E1e-dIBGBolzFa0BEv75DFDA&s',
        isHot: true,
        isNew: true,
    },
    {
        id: 9,
        name: 'Book of Dead',
        provider: 'Play’n GO',
        rtp: '96.21%',
        volatility: 'High',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnFw0XLGXPXjMuYNvGBF49XybJGDndrgG-IwGHwA42Jg0W2CYttMcYTPpme8wAbCegd6o&usqp=CAU',
        isHot: false,
        isNew: true,
    },
    {
        id: 10,
        name: 'Wolf Gold',
        provider: 'Pragmatic Play',
        rtp: '96.01%',
        volatility: 'Low',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvgMXePcm1a48KATF4Qw9tdDZFnrSHOf_-snCET4XFrBVUNKpHy5G3ANV-ESQ5ZPbP5A&usqp=CAU',
        isHot: false,
        isNew: false,
    },
];

const categories = ['Все', 'Популярные', 'Новые', 'Джекпот']

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
        <section id="games" className="py-16 bg-gradient-to-b from-casino-dark to-black">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Компактный заголовок с текстом сразу */}
                <ScrollAnimation animation="slide-down" delay={200}>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
                            <span className="bg-gradient-to-r from-casino-gold to-casino-red bg-clip-text text-transparent">
                                ТОП ИГРЫ
                            </span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
                            Более 500 слотов от ведущих провайдеров с высокой отдачей
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Компактные категории */}
                <ScrollAnimation animation="fade-in" delay={400}>
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all text-sm ${activeCategory === category
                                    ? 'bg-casino-gold text-black shadow-md'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </ScrollAnimation>

                {/* Компактная сетка игр */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {filteredGames.map((game, index) => (
                        <ScrollAnimation
                            key={game.id}
                            animation="scale-in"
                            delay={index * 100}
                        >
                            <div
                                className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-casino-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-casino-gold/10"
                                onMouseEnter={() => setHoveredGame(game.id)}
                                onMouseLeave={() => setHoveredGame(null)}
                            >
                                {/* Game Image */}
                                <div className="relative h-40 overflow-hidden">
                                    <img
                                        src={game.image}
                                        alt={game.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                                    {/* Badges */}
                                    <div className="absolute top-3 left-3 flex gap-2">
                                        {game.isHot && (
                                            <span className="px-2 py-1 bg-casino-red text-white text-xs font-bold rounded flex items-center gap-1">
                                                <Zap className="w-3 h-3" />
                                                HOT
                                            </span>
                                        )}
                                        {game.isNew && (
                                            <span className="px-2 py-1 bg-casino-gold text-black text-xs font-bold rounded">
                                                NEW
                                            </span>
                                        )}
                                    </div>

                                    {/* Play Button */}
                                    <div
                                        className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredGame === game.id ? "opacity-100" : "opacity-0"
                                            }`}
                                    >
                                        <button className="px-6 py-2 bg-casino-gold text-black font-bold rounded-lg hover:bg-casino-red transition-all flex items-center gap-2 text-sm">
                                            <Play className="w-4 h-4" />
                                            Играть
                                        </button>
                                    </div>
                                </div>

                                {/* Game Info */}
                                <div className="p-4">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex-1">
                                            <h3 className="text-white font-bold text-base mb-1">{game.name}</h3>
                                            <p className="text-gray-400 text-xs">{game.provider}</p>
                                        </div>
                                        <div className="flex items-center gap-1 ml-2">
                                            <Star className="w-3 h-3 text-casino-gold fill-current" />
                                            <span className="text-casino-gold font-semibold text-sm">4.8</span>
                                        </div>
                                    </div>

                                    {/* Game Stats */}
                                    <div className="flex justify-between items-center mb-3">
                                        <div className="text-center">
                                            <p className="text-gray-400 text-xs mb-1">RTP</p>
                                            <p className="text-white font-semibold text-sm">{game.rtp}</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-gray-400 text-xs mb-1">Волатильность</p>
                                            <p className="text-white font-semibold text-sm">{game.volatility}</p>
                                        </div>
                                    </div>

                                    {/* Demo Button */}
                                    <button className="w-full py-2 border border-casino-gold text-casino-gold rounded-lg hover:bg-casino-gold hover:text-black transition-all text-sm">
                                        Демо игра
                                    </button>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>


               
                {/* Компактные статистики */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ScrollAnimation animation="slide-up" delay={800}>
                        <div className="text-center">
                            <div className="text-2xl font-black text-casino-gold mb-1">500+</div>
                            <div className="text-white font-medium text-sm mb-1">Игр в каталоге</div>
                            <div className="text-gray-400 text-xs">От топ-провайдеров</div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animation="slide-up" delay={900}>
                        <div className="text-center">
                            <div className="text-2xl font-black text-casino-gold mb-1">96.5%</div>
                            <div className="text-white font-medium text-sm mb-1">Средний RTP</div>
                            <div className="text-gray-400 text-xs">Максимальная отдача</div>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animation="slide-up" delay={1000}>
                        <div className="text-center">
                            <div className="text-2xl font-black text-casino-gold mb-1">24/7</div>
                            <div className="text-white font-medium text-sm mb-1">Доступность</div>
                            <div className="text-gray-400 text-xs">Играйте в любое время</div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
}