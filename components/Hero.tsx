'use client'

import { useState, useEffect } from 'react'
import { Play, Star, Zap, Gift } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation';
import SwiperSlides from './Swiper';
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

export default function Hero() {
    const [jackpot, setJackpot] = useState(1250000)
    const [hoveredGame, setHoveredGame] = useState<number | null>(null)

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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-4xl mx-auto text-center ">
                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-2 leading-tight">
                        <span className="block animate-slide-down">Играй в</span>
                        <span className="block bg-gradient-to-r from-casino-gold via-casino-red to-casino-gold bg-clip-text text-transparent animate-glow-pulse">
                            ЛУЧШИЕ СЛОТЫ
                        </span>
                        <span className="block text-xl sm:text-2xl lg:text-3xl font-normal mt-4 animate-slide-up">
                            и выигрывай миллионы!
                        </span>
                    </h1>
                </div>

                {/* Swiper Section */}
                <div className="mb-8 ">
                    <SwiperSlides />
                </div>

                {/* Games Grid */}
                <div className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
                        Популярные игры
                    </h2>
                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 md:gap-4">
                        {games.map((game, index) => (
                            <ScrollAnimation
                                key={game.id}
                                animation="scale-in"
                                delay={index * 100}
                            >
                                <div
                                    className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-casino-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-casino-gold/10 h-full flex flex-col"
                                    onMouseEnter={() => setHoveredGame(game.id)}
                                    onMouseLeave={() => setHoveredGame(null)}
                                >
                                    <div className="relative h-24 sm:h-28 overflow-hidden">
                                        <img
                                            src={game.image}
                                            alt={game.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                                    </div>

                                    <div className="p-3 flex flex-col justify-between flex-1">
                                        <h3 className="text-white font-bold text-sm mb-2 text-center truncate">
                                            {game.name}
                                        </h3>
                                        <button className="w-full py-1.5 border border-casino-gold text-casino-gold rounded-lg hover:bg-casino-gold hover:text-black transition-all text-xs">
                                            Играть
                                        </button>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-gray-400 text-sm px-4">
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

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-4 animate-float">
                <div className="w-12 h-12 bg-casino-gold/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-rotate-3d">
                    <span className="text-xl">🎰</span>
                </div>
            </div>
            <div className="absolute top-1/3 right-4 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="w-10 h-10 bg-casino-red/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-wiggle">
                    <span className="text-lg">💎</span>
                </div>
            </div>
            <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '3s' }}>
                <div className="w-12 h-12 bg-casino-purple/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer animate-bounce-slow">
                    <span className="text-xl">🎲</span>
                </div>
            </div>
        </section>
    )
}