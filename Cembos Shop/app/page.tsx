import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FlagshipStores } from "@/components/flagship-stores"
import { ProductGrid } from "@/components/product-grid"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FlagshipStores />
      <ProductGrid />
      <Newsletter />
      <Footer />
    </div>
  )
}
