import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen bg-gray-50 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="bilder/IMG_8499 10.jpg"
          alt="CEMBO'S SHOP Store Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">FLAGSHIP</h1>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto">
            Experience premium streetwear in our flagship stores worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-3">
              Find a Store
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 bg-transparent"
            >
              Shop Online
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
