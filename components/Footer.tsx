'use client'

import { Star, Mail, Phone, MapPin, Shield, CreditCard, Clock, Users } from 'lucide-react'

const footerLinks = {
    games: [
        { name: 'Слоты', href: '#' },
        { name: 'Рулетка', href: '#' },
        { name: 'Блэкджек', href: '#' },
        { name: 'Покер', href: '#' },
        { name: 'Баккара', href: '#' },
    ],
    support: [
        { name: 'Помощь', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Контакты', href: '#' },
        { name: 'Live чат', href: '#' },
        { name: 'Техподдержка', href: '#' },
    ],      
    legal: [
        { name: 'Правила', href: '#' },
        { name: 'Политика конфиденциальности', href: '#' },
        { name: 'Ответственная игра', href: '#' },
        { name: 'Лицензия', href: '#' },
        { name: 'AML политика', href: '#' },
    ],
}

const paymentMethods = [
    'Visa', 'Mastercard', 'PayPal', 'Skrill', 'Neteller', 'Bitcoin', 'Ethereum'
]

const licenses = [
    'Curacao eGaming',
    'Malta Gaming Authority',
    'UK Gambling Commission'
]

export default function Footer() {
    return (
        <footer className="bg-black border-t border-casino-gold/20">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-14 h-14  rounded-lg flex items-center justify-center">
                                <img src="/casino.png" alt="" />
                            </div>
                           
                        </div>
                        <p className="text-gray-400 mb-6">
                            Лучшее онлайн казино с самыми популярными слотами и щедрыми бонусами.
                            Играйте ответственно и выигрывайте больше!
                        </p>

                        {/* Trust Indicators */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2 text-sm text-gray-400">
                                <Shield className="w-4 h-4 text-green-500" />
                                <span>Лицензированное казино</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-400">
                                <CreditCard className="w-4 h-4 text-green-500" />
                                <span>Безопасные платежи</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm text-gray-400">
                                <Clock className="w-4 h-4 text-green-500" />
                                <span>24/7 поддержка</span>
                            </div>
                        </div>
                    </div>

                    {/* Games Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Игры</h3>
                        <ul className="space-y-3">
                            {footerLinks.games.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-casino-gold transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Поддержка</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-casino-gold transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Правовая информация</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-casino-gold transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-center space-x-3">
                            <Mail className="w-5 h-5 text-casino-gold" />
                            <div>
                                <p className="text-white font-semibold">Email</p>
                                <p className="text-gray-400">support@casinoslots.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="w-5 h-5 text-casino-gold" />
                            <div>
                                <p className="text-white font-semibold">Телефон</p>
                                <p className="text-gray-400">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-casino-gold" />
                            <div>
                                <p className="text-white font-semibold">Адрес</p>
                                <p className="text-gray-400">Curacao, Netherlands</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <h3 className="text-white font-bold text-lg mb-6">Способы оплаты</h3>
                    <div className="flex flex-wrap gap-4">
                        {paymentMethods.map((method) => (
                            <div
                                key={method}
                                className="px-4 py-2 bg-white/10 rounded-lg text-gray-300 text-sm hover:bg-casino-gold/20 hover:text-white transition-all"
                            >
                                {method}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Licenses */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <h3 className="text-white font-bold text-lg mb-6">Лицензии</h3>
                    <div className="flex flex-wrap gap-4">
                        {licenses.map((license) => (
                            <div
                                key={license}
                                className="px-4 py-2 bg-casino-gold/20 rounded-lg text-casino-gold text-sm font-semibold"
                            >
                                {license}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800 bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © 2024 CasinoSlots. Все права защищены.
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <span>18+</span>
                            <span>•</span>
                            <span>Играйте ответственно</span>
                            <span>•</span>
                            <a href="#" className="hover:text-casino-gold transition-colors">
                                Помощь игрокам
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Live Chat Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button className="w-16 h-16 bg-gradient-to-r from-casino-gold to-casino-red rounded-full shadow-2xl hover:shadow-casino-gold/50 transition-all btn-hover flex items-center justify-center group animate-bounce-in hover:animate-tilt">
                    <Users className="w-8 h-8 text-black group-hover:scale-110 transition-transform animate-pulse" />
                </button>
            </div>
        </footer>
    )
}
