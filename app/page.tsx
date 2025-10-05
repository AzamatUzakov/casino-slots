import Header from '@/components/Header'
import Hero from '@/components/Hero'
import GamesSection from '@/components/GamesSection'
import BonusSection from '@/components/BonusSection'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen bg-casino-bg">
            <Header />
            <Hero />
            <GamesSection />
            <BonusSection />
            <Footer />
        </main>
    )
}
