"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, User, Search, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NewsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { value: "all", label: "All Posts" },
    { value: "projects", label: "Project Showcases" },
    { value: "tips", label: "Tips & Techniques" },
    { value: "news", label: "Company News" },
    { value: "materials", label: "Materials & Tools" },
    { value: "trends", label: "Design Trends" },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Tips for Choosing the Right Wood for Your Custom Furniture",
      excerpt:
        "Learn how to select the perfect wood species for your next custom furniture project, considering durability, aesthetics, and budget.",
      content:
        "When it comes to custom furniture, choosing the right wood is crucial for both aesthetics and longevity...",
      category: "tips",
      author: "Michael Rodriguez",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      tags: ["wood selection", "furniture", "tips"],
    },
    {
      id: 2,
      title: "Stunning Kitchen Cabinet Transformation in Manhattan Penthouse",
      excerpt:
        "Take a look at our latest kitchen cabinet project featuring custom walnut cabinetry with modern hardware and innovative storage solutions.",
      content:
        "This Manhattan penthouse kitchen transformation showcases the perfect blend of luxury and functionality...",
      category: "projects",
      author: "Sarah Chen",
      date: "2024-01-12",
      readTime: "3 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
      tags: ["kitchen", "cabinets", "luxury", "manhattan"],
    },
    {
      id: 3,
      title: "The Art of Hand-Finishing: Why It Makes a Difference",
      excerpt:
        "Discover the traditional techniques we use for hand-finishing our custom pieces and why it sets our work apart from mass-produced furniture.",
      content: "Hand-finishing is a time-honored tradition that brings out the natural beauty of wood...",
      category: "tips",
      author: "David Thompson",
      date: "2024-01-10",
      readTime: "4 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      tags: ["finishing", "craftsmanship", "techniques"],
    },
    {
      id: 4,
      title: "Palace Woodwork Expands International Shipping to 15 New Countries",
      excerpt:
        "We're excited to announce that we now ship our custom woodwork to 40 countries worldwide, making our craftsmanship accessible to more clients globally.",
      content: "As part of our commitment to serving clients worldwide, we've expanded our shipping capabilities...",
      category: "news",
      author: "Palace Woodwork Team",
      date: "2024-01-08",
      readTime: "2 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      tags: ["shipping", "international", "expansion"],
    },
    {
      id: 5,
      title: "2024 Interior Design Trends: Natural Wood Takes Center Stage",
      excerpt:
        "Explore the latest interior design trends for 2024 and how natural wood elements are becoming the focal point of modern homes.",
      content: "This year, we're seeing a strong shift towards natural materials in interior design...",
      category: "trends",
      author: "Sarah Chen",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      tags: ["trends", "interior design", "2024", "natural wood"],
    },
    {
      id: 6,
      title: "Tool Spotlight: The Japanese Hand Plane and Its Superior Finish",
      excerpt:
        "Learn about the traditional Japanese hand plane and why we incorporate these precision tools into our modern woodworking process.",
      content: "The Japanese hand plane, or 'kanna', represents centuries of refined craftsmanship...",
      category: "materials",
      author: "Michael Rodriguez",
      date: "2024-01-03",
      readTime: "4 min read",
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      tags: ["tools", "japanese", "hand plane", "craftsmanship"],
    },
  ]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">News & Updates</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest projects, woodworking tips, and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
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
            <div className="text-sm text-gray-600">{filteredPosts.length} articles found</div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-amber-600">Featured</Badge>
                    <Badge className="absolute top-4 right-4 bg-white text-gray-900">
                      {categories.find((cat) => cat.value === post.category)?.label}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
                      <Link href={`/news/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/news/${post.id}`}>
                          Read More <ArrowRight className="h-4 w-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-white text-gray-900">
                      {categories.find((cat) => cat.value === post.category)?.label}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
                      <Link href={`/news/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link href={`/news/${post.id}`}>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest woodworking tips, project showcases, and company updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Your email address"
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
            />
            <Button className="bg-amber-600 hover:bg-amber-700">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
