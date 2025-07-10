"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingBag, Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gray-900 text-white py-2 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-8 text-sm font-medium">
            FREE SHIPPING ON ORDERS OVER $100 ⚡ EASY RETURNS ⚡ FREE SHIPPING ON ORDERS OVER $100 ⚡ EASY RETURNS ⚡
            FREE SHIPPING ON ORDERS OVER $100 ⚡ EASY RETURNS ⚡
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link href="/new-arrivals" className="text-lg font-medium hover:text-gray-600 transition-colors">
                    New Arrivals
                  </Link>
                  <Link href="/clothing" className="text-lg font-medium hover:text-gray-600 transition-colors">
                    Clothing
                  </Link>
                  <Link href="/accessories" className="text-lg font-medium hover:text-gray-600 transition-colors">
                    Accessories
                  </Link>
                  <Link href="/brands" className="text-lg font-medium hover:text-gray-600 transition-colors">
                    Brands
                  </Link>
                  <Link href="/sale" className="text-lg font-medium hover:text-gray-600 transition-colors text-red-600">
                    Sale
                  </Link>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold tracking-tight text-gray-900">CEMBO'S SHOP</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/new-arrivals" className="text-sm font-medium hover:text-gray-600 transition-colors">
                New Arrivals
              </Link>
              <Link href="/clothing" className="text-sm font-medium hover:text-gray-600 transition-colors">
                Clothing
              </Link>
              <Link href="/accessories" className="text-sm font-medium hover:text-gray-600 transition-colors">
                Accessories
              </Link>
              <Link href="/brands" className="text-sm font-medium hover:text-gray-600 transition-colors">
                Brands
              </Link>
              <Link href="/sale" className="text-sm font-medium hover:text-gray-600 transition-colors text-red-600">
                Sale
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                {isSearchOpen ? (
                  <div className="flex items-center space-x-2">
                    <Input type="search" placeholder="Search products..." className="w-64 h-9" autoFocus />
                    <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
                    <Search className="h-5 w-5" />
                  </Button>
                )}
              </div>

              {/* User Account */}
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>

              {/* Shopping Bag */}
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
