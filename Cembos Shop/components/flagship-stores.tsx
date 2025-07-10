import Image from "next/image"
import { MapPin, Clock, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const stores = [
  {
    city: "NEW YORK",
    address: "123 Broadway, SoHo, NY 10012",
    hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-7PM",
    phone: "+1 (212) 555-0123",
    image: "bilder/IMG_7583.HEIC",
  },
  {
    city: "LOS ANGELES",
    address: "456 Melrose Ave, West Hollywood, CA 90069",
    hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-7PM",
    phone: "+1 (323) 555-0456",
    image: "bilder/IMG_8270.HEIC",
  },
  {
    city: "LONDON",
    address: "789 Oxford Street, London W1C 1JN, UK",
    hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
    phone: "+44 20 7555 0789",
    image: "bilder/IMG_5621.HEIC",
  },
  {
    city: "TOKYO",
    address: "101 Shibuya Crossing, Tokyo 150-0043, Japan",
    hours: "Daily: 10AM-9PM",
    phone: "+81 3-5555-0101",
    image: "bilder/IMG_0682.HEIC",
  },
]

export function FlagshipStores() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">FLAGSHIP STORES</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit our flagship stores around the world for the complete CEMBO'S SHOP experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stores.map((store, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={store.image || "bilder/IMG_0682.HEIC"}
                  alt={`CEMBO'S SHOP ${store.city} Store`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">{store.city}</h3>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{store.address}</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{store.hours}</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{store.phone}</p>
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <Button className="flex-1 bg-gray-900 hover:bg-gray-800">Get Directions</Button>
                  <Button variant="outline" className="flex-1 bg-transparent">
                    Call Store
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
