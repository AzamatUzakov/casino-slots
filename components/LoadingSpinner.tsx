'use client'

export default function LoadingSpinner() {
    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="text-center">
                {/* Spinning Casino Wheel */}
                <div className="w-24 h-24 mx-auto mb-6 relative">
                    <div className="w-full h-full border-4 border-casino-gold/30 rounded-full animate-spin-slow">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-casino-gold rounded-full"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-casino-gold rounded-full animate-pulse"></div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="text-white text-xl font-bold mb-2 animate-pulse">
                    Загрузка...
                </div>

                {/* Animated Dots */}
                <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-casino-gold rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-casino-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-casino-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    )
}
