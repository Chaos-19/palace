"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Search, Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { p1, p12, p2, p3, p4, p5, p6, p8, p9 } from "@/assets";

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const categories = [
    { value: "all", label: "All Products" },
    { value: "furniture", label: "Furniture" },
    { value: "kitchen", label: "Kitchen" },
    { value: "storage", label: "Storage" },
    { value: "commercial", label: "Commercial" },
    { value: "outdoor", label: "Outdoor" },
  ];

  const products = [
    {
      id: 1,
      name: "Interior Room Door",
      category: "kitchen",
      price: "From $2,500",
      originalPrice: "$3,000",
      image: p5,
      rating: 4.9,
      reviews: 127,
      description:
        "Elegant interior room door with a modern design, featuring soft-close hinges and premium wood construction.",
      features: [
        "Soft-close hinges",
        "Premium wood",
        "Custom sizing",
        "Multiple finishes",
      ],
      inStock: true,
      featured: true,
    },
    {
      id: 2,
      name: "Modern Living Room Interior",
      category: "furniture",
      price: "From $1,200",
      image: p2,
      rating: 4.8,
      reviews: 89,
      description:
        "Elegant space with a mounted TV, marble and wood accents, decorative vases, and stylish shelving, complemented by a chandelier.",
      features: [
        "Solid hardwood",
        "Hand-finished",
        "Custom dimensions",
        "Durable construction",
      ],
      inStock: true,
      featured: true,
    },
    {
      id: 3,
      name: "Solid Wooden Front Door with Glass Panel",
      category: "storage",
      price: "From $1,800",
      image: p3,
      rating: 4.9,
      reviews: 156,
      description:
        "Premium floor-to-ceiling wooden entrance door featuring vertical paneling and a decorative glass insert for classic elegance.",
      features: [
        "Space optimization",
        "Custom compartments",
        "Premium hardware",
        "LED lighting",
      ],
      inStock: true,
      featured: true,
    },
    {
      id: 4,
      name: "Wardrobes with Integrated Storage",
      category: "commercial",
      price: "From $950",
      image: p4,
      rating: 4.7,
      reviews: 73,
      description:
        "Stylish wardrobe with integrated storage solutions, perfect for modern living spaces.",
      features: [
        "Cable management",
        "Built-in storage",
        "Ergonomic design",
        "Premium finish",
      ],
      inStock: true,
      featured: false,
    },
    {
      id: 5,
      name: "Outdoor Garden Bench",
      category: "outdoor",
      price: "From $450",
      image: p5,
      rating: 4.6,
      reviews: 92,
      description:
        "Weather-resistant outdoor bench perfect for gardens and patios.",
      features: [
        "Weather-resistant",
        "Comfortable seating",
        "Durable construction",
        "Natural finish",
      ],
      inStock: true,
      featured: false,
    },
    {
      id: 6,
      name: "Custom Bookshelf",
      category: "furniture",
      price: "From $680",
      image: p12,
      rating: 4.8,
      reviews: 114,
      description:
        "Floor-to-ceiling custom bookshelf with adjustable shelving.",
      features: [
        "Adjustable shelves",
        "Custom height",
        "Multiple wood options",
        "Sturdy construction",
      ],
      inStock: false,
      featured: false,
    },
    {
      id: 7,
      name: "Modern Door",
      category: "kitchen",
      price: "From $2,200",
      image: p8,
      rating: 4.9,
      reviews: 168,
      description:
        "Sleek modern door with a minimalist design and high-quality finish.",
      features: [
        "Built-in storage",
        "Seating area",
        "Premium countertop",
        "Custom design",
      ],
      inStock: true,
      featured: false,
    },
    {
      id: 8,
      name: "Kitchen Cabinets",
      category: "commercial",
      price: "From $1,800",
      image: p9,
      rating: 4.7,
      reviews: 45,
      description:
        "High-quality kitchen cabinets with modern finishes and soft-close features.",
      features: [
        "Large capacity",
        "Cable management",
        "Professional finish",
        "Custom sizing",
      ],
      inStock: true,
      featured: false,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return (
          Number.parseInt(a.price.replace(/\D/g, "")) -
          Number.parseInt(b.price.replace(/\D/g, ""))
        );
      case "price-high":
        return (
          Number.parseInt(b.price.replace(/\D/g, "")) -
          Number.parseInt(a.price.replace(/\D/g, ""))
        );
      case "rating":
        return b.rating - a.rating;
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our extensive collection of handcrafted furniture and
              custom woodwork solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
              <div className="text-sm text-gray-600">
                {sortedProducts.length} products found
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-shadow bg-white"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.featured && (
                      <Badge className="bg-amber-600">Featured</Badge>
                    )}
                    {!product.inStock && (
                      <Badge variant="destructive">Out of Stock</Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <Badge className="absolute bottom-4 left-4 bg-white text-gray-900">
                    {
                      categories.find((cat) => cat.value === product.category)
                        ?.label
                    }
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-xl font-bold text-amber-600">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 bg-transparent"
                    >
                      <Link href={`/products/${product.id}`}>View Details</Link>
                    </Button>
                    <Button
                      className="bg-amber-600 hover:bg-amber-700"
                      disabled={!product.inStock}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We specialize in custom woodwork. Let us create something unique
            just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700"
            >
              <Link href="/quote">Request Custom Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
