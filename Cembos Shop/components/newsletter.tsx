import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">STAY IN THE LOOP</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Be the first to know about new drops, exclusive releases, and special events at CEMBO'S SHOP
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email" className="flex-1 bg-white text-black border-0 h-12" />
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8">
            Subscribe
          </Button>
        </div>

        <p className="text-sm text-gray-400 mt-6">
          By subscribing, you agree to our Privacy Policy and Terms of Service
        </p>
      </div>
    </section>
  )
}
