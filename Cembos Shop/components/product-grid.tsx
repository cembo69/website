import Image from "next/image"
import { Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    id: 1,
    name: "Supreme Box Logo Hoodie",
    brand: "Supreme",
    price: 299,
    originalPrice: 399,
    image: "bilder/IMG_0371.HEIC",
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: "BAPE Shark Full Zip Hoodie",
    brand: "A Bathing Ape",
    price: 459,
    image: "bilder/IMG_0372.HEIC",
    isNew: true,
  },
  {
    id: 3,
    name: "Off-White Diagonal Tee",
    brand: "Off-White",
    price: 189,
    image: "bilder/IMG_0376.HEIC",
  },
  {
    id: 4,
    name: "Stone Island Cargo Pants",
    brand: "Stone Island",
    price: 329,
    image: "bilder/IMG_0385.HEIC",
  },
  {
    id: 5,
    name: "Palace Tri-Ferg Tee",
    brand: "Palace",
    price: 89,
    originalPrice: 119,
    image: "bilder/IMG_0387.HEIC",
    isSale: true,
  },
  {
    id: 6,
    name: "Fear of God Essentials Hoodie",
    brand: "Fear of God",
    price: 199,
    image: "bilder/IMG_0403.HEIC",
    isNew: true,
  },
  {
    id: 7,
    name: "Stussy 8 Ball Fleece",
    brand: "Stussy",
    price: 149,
    image: "bilder/IMG_0404.HEIC",
  },
  {
    id: 8,
    name: "Kith Williams III Hoodie",
    brand: "Kith",
    price: 179,
    image: "bilder/IMG_0559.heic",
  },
  {
    id: 9,
    name: "Travis Scott x Nike Air Jordan 1",
    brand: "Nike",
    price: 899,
    originalPrice: 1199,
    image: "bilder/IMG_1446.HEIC",
    isNew: true,
    isSale: true,
  },
  {
    id: 10,
    name: "Yeezy Boost 350 V2",
    brand: "Adidas",
    price: 220,
    image: "bilder/IMG_4957.PNG",
    isNew: true,
  },
  {
    id: 11,
    name: "Chrome Hearts Cross Hoodie",
    brand: "Chrome Hearts",
    price: 789,
    image: "bilder/IMG_5622.HEIC",
  },
  {
    id: 12,
    name: "Rhude Logo Tee",
    brand: "Rhude",
    price: 145,
    image: "bilder/IMG_5623.HEIC",
  },
  {
    id: 13,
    name: "Balenciaga Triple S Sneakers",
    brand: "Balenciaga",
    price: 995,
    originalPrice: 1295,
    image: "bilder/IMG_5633.HEIC",
    isSale: true,
  },
  {
    id: 14,
    name: "Vetements Oversized Hoodie",
    brand: "Vetements",
    price: 525,
    image: "bilder/IMG_5635.HEIC",
    isNew: true,
  },
  {
    id: 15,
    name: "Anti Social Social Club Hoodie",
    brand: "ASSC",
    price: 165,
    image: "bilder/IMG_6920.heic",
  },
  {
    id: 16,
    name: "Amiri Distressed Jeans",
    brand: "Amiri",
    price: 1150,
    image: "bilder/IMG_6923.heic",
  },
]

export function ProductGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">FEATURED PRODUCTS</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest drops from premium streetwear brands
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "bilder/IMG_0371.HEIC"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.isNew && <Badge className="bg-green-500 hover:bg-green-600 text-white">NEW</Badge>}
                  {product.isSale && <Badge className="bg-red-500 hover:bg-red-600 text-white">SALE</Badge>}
                </div>

                {/* Wishlist Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Quick Add Button */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500 font-medium">{product.brand}</p>
                  <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
