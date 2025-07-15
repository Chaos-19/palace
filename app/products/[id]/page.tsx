"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Ruler,
  Truck,
  Award,
  MessageCircle,
  ArrowLeft,
  Plus,
  Minus,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)
  const [selectedVariant, setSelectedVariant] = useState("standard")
  const [isWishlisted, setIsWishlisted] = useState(false)

  // Mock product data - in real app, this would come from API
  const product = {
    id: params.id,
    name: "Custom Kitchen Cabinets",
    category: "Kitchen",
    price: 2500,
    originalPrice: 3000,
    description:
      "Transform your kitchen with our premium custom kitchen cabinets. Crafted from solid hardwood with soft-close hinges and premium finishes. Each cabinet is made to order with your exact specifications.",
    longDescription:
      "Our custom kitchen cabinets represent the pinnacle of craftsmanship and functionality. Each piece is carefully constructed using traditional joinery techniques combined with modern hardware for optimal performance. The cabinets feature full-extension drawers, soft-close hinges, and adjustable shelving to maximize storage efficiency.",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    rating: 4.9,
    reviews: 127,
    inStock: true,
    dimensions: {
      width: "Custom",
      height: "Custom",
      depth: "24 inches standard",
    },
    materials: ["Solid Oak", "Maple", "Cherry", "Walnut"],
    features: [
      "Soft-close hinges and drawer slides",
      "Full-extension drawers",
      "Adjustable shelving",
      "Custom sizing available",
      "Multiple finish options",
      "Solid hardwood construction",
      "Professional installation available",
      "10-year warranty",
    ],
    specifications: {
      Material: "Solid Hardwood",
      Finish: "Multiple Options Available",
      Hardware: "Soft-Close Hinges & Slides",
      Warranty: "10 Years",
      Installation: "Professional Available",
      Delivery: "2-4 weeks",
    },
    variants: [
      { id: "standard", name: "Standard", price: 2500, description: "Our classic cabinet design" },
      { id: "premium", name: "Premium", price: 3200, description: "Enhanced with premium hardware" },
      { id: "luxury", name: "Luxury", price: 4500, description: "Top-tier materials and finishes" },
    ],
  }

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2024-01-15",
      comment:
        "Absolutely stunning cabinets! The craftsmanship is exceptional and they fit perfectly in our kitchen. The installation team was professional and efficient.",
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      date: "2024-01-10",
      comment:
        "Best investment we made for our home. The quality is outstanding and the custom sizing was perfect for our space. Highly recommend!",
      verified: true,
    },
    {
      id: 3,
      name: "Emma Davis",
      rating: 4,
      date: "2024-01-05",
      comment:
        "Beautiful cabinets with great attention to detail. Delivery was on time and the finish is exactly what we wanted.",
      verified: true,
    },
  ]

  const relatedProducts = [
    {
      id: 2,
      name: "Kitchen Island",
      price: 2200,
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.8,
    },
    {
      id: 7,
      name: "Pantry Cabinets",
      price: 1800,
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.7,
    },
    {
      id: 12,
      name: "Under-Cabinet Storage",
      price: 650,
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.9,
    },
  ]

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleRequestQuote = () => {
    toast({
      title: "Quote Request Sent",
      description: "We'll prepare a custom quote for your project.",
    })
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: isWishlisted ? "Item removed from your wishlist" : "Item added to your wishlist",
    })
  }

  const selectedVariantData = product.variants.find((v) => v.id === selectedVariant)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-amber-600">
              Products
            </Link>
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/products">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative mb-4">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                width={800}
                height={600}
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button size="sm" variant="secondary" onClick={handleWishlist}>
                  <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
                <Button size="sm" variant="secondary">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <Image
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} ${index + 1}`}
                  width={200}
                  height={150}
                  className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge className="mb-2">{product.category}</Badge>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-amber-600">
                  ${selectedVariantData?.price.toLocaleString() || product.price.toLocaleString()}
                </div>
                {product.originalPrice && (
                  <div className="text-lg text-gray-500 line-through">${product.originalPrice.toLocaleString()}</div>
                )}
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

            {/* Variants */}
            <div className="mb-6">
              <Label className="text-base font-semibold mb-3 block">Choose Variant</Label>
              <div className="grid grid-cols-1 gap-2">
                {product.variants.map((variant) => (
                  <div
                    key={variant.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedVariant === variant.id
                        ? "border-amber-500 bg-amber-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedVariant(variant.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{variant.name}</div>
                        <div className="text-sm text-gray-600">{variant.description}</div>
                      </div>
                      <div className="text-lg font-semibold text-amber-600">${variant.price.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <Label className="text-base font-semibold mb-3 block">Quantity</Label>
              <div className="flex items-center gap-3">
                <Button size="sm" variant="outline" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                  className="w-20 text-center"
                />
                <Button size="sm" variant="outline" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <Button onClick={handleAddToCart} className="flex-1 bg-amber-600 hover:bg-amber-700">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button onClick={handleRequestQuote} variant="outline" className="flex-1 bg-transparent">
                Request Custom Quote
              </Button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                <Truck className="h-5 w-5 text-amber-600" />
                <div>
                  <div className="font-medium text-sm">Free Shipping</div>
                  <div className="text-xs text-gray-600">On orders over $1,000</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                <Award className="h-5 w-5 text-amber-600" />
                <div>
                  <div className="font-medium text-sm">10 Year Warranty</div>
                  <div className="text-xs text-gray-600">Quality guarantee</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                <Ruler className="h-5 w-5 text-amber-600" />
                <div>
                  <div className="font-medium text-sm">Custom Sizing</div>
                  <div className="text-xs text-gray-600">Made to measure</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                <MessageCircle className="h-5 w-5 text-amber-600" />
                <div>
                  <div className="font-medium text-sm">Expert Support</div>
                  <div className="text-xs text-gray-600">24/7 assistance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
              <TabsTrigger value="customization">Customization</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.longDescription}</p>

                  <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Dimensions</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Width:</span>
                          <span>{product.dimensions.width}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Height:</span>
                          <span>{product.dimensions.height}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Depth:</span>
                          <span>{product.dimensions.depth}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Product Details</h4>
                      <div className="space-y-2">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span>{key}:</span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">Customer Reviews</h3>
                    <Button variant="outline">Write a Review</Button>
                  </div>

                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b pb-6 last:border-b-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{review.name}</span>
                              {review.verified && (
                                <Badge variant="secondary" className="text-xs">
                                  Verified Purchase
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="customization" className="mt-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Customization Options</h3>
                  <p className="text-gray-600 mb-6">
                    Every piece can be customized to your exact specifications. Our skilled craftsmen will work with you
                    to create the perfect solution for your space.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Available Materials</h4>
                      <ul className="space-y-2">
                        {product.materials.map((material, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                            <span>{material}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Custom Options</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                          <span>Custom dimensions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                          <span>Multiple finish options</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                          <span>Hardware selection</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                          <span>Interior configurations</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Need Help with Customization?</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Our design team can help you create the perfect custom solution. Schedule a consultation to
                      discuss your specific needs.
                    </p>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                      Schedule Consultation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(relatedProduct.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({relatedProduct.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-amber-600">${relatedProduct.price.toLocaleString()}</span>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/products/${relatedProduct.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
