"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Award,
  Users,
  Hammer,
  Truck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LanguageSelector from "@/components/language-selector";
import heroImage from "@/assets/images/6.jpg";
import { image1, image2, image4, p10, p13, p4 } from "@/assets";

export default function ClientPage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Custom Kitchen Cabinets",
      category: "Kitchen",
      price: "From $2,500",
      image: p13,
      rating: 4.9,
      reviews: 127,
    },
    {
      id: 2,
      name: "Custom-crafted Door",
      category: "Furniture",
      price: "From $1,200",
      image: p10,
      rating: 4.8,
      reviews: 89,
    },
    {
      id: 3,
      name: "Built-in Wardrobes",
      category: "Storage",
      price: "From $1,800",
      image: p4,
      rating: 4.9,
      reviews: 156,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      content:
        "Palace Woodwork transformed our kitchen with beautiful custom cabinets. The craftsmanship is exceptional!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Interior Designer",
      content:
        "I've worked with Palace Woodwork on multiple projects. Their attention to detail and quality is unmatched.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Restaurant Owner",
      content:
        "They created stunning custom furniture for our restaurant. Professional service from start to finish.",
      rating: 5,
    },
  ];

  const stats = [
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Hammer, label: "Projects Completed", value: "1,200+" },
    { icon: Truck, label: "Countries Served", value: "25+" },
  ];

  const handleQuoteClick = () => {
    console.log("Quote button clicked");
  };

  const handleContactClick = () => {
    console.log("Contact button clicked");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-palace-cream-100 via-white to-palace-teal-50 py-20">
        <div className="container mx-auto px-4">
          {/* <LanguageSelector className="mb-4" /> */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-palace-gold-500 text-black hover:bg-palace-gold-600 border-0">
                Premium Woodworking Since 2009
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Crafting Excellence in
                <span className="text-palace-gold-600"> Wood</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                From custom furniture to architectural millwork, we bring your
                vision to life with unparalleled craftsmanship and attention to
                detail. Serving clients locally and internationally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-palace-gold-500 hover:bg-palace-gold-600 text-black font-semibold"
                  onClick={handleQuoteClick}
                >
                  <Link href="/quote" aria-label="Request a Quote">
                    Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-palace-brown-600 text-palace-brown-700 hover:bg-palace-brown-50 bg-transparent"
                >
                  <Link href="/products">Browse Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src={heroImage}
                alt="Palace Woodwork Craftsmanship"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg border border-palace-gold-200">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-palace-gold-500 fill-current" />
                  <span className="font-semibold text-gray-900">4.9/5</span>
                  <span className="text-gray-600">from 500+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-palace-teal-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-palace-teal-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-palace-cream-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Discover our most popular woodworking creations, each piece
              crafted with precision and care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-shadow bg-white border-palace-cream-200"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-palace-brown-600 text-white">
                    {product.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? "text-palace-gold-500 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-palace-gold-600">
                      {product.price}
                    </span>
                    <Button
                      asChild
                      variant="outline"
                      className="border-palace-teal-500 text-palace-teal-600 hover:bg-palace-teal-50 bg-transparent"
                    >
                      <Link href={`/products/${product.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-palace-brown-600 text-palace-brown-700 hover:bg-palace-brown-50 bg-transparent"
            >
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We offer comprehensive woodworking services for residential,
                commercial, and industrial clients worldwide.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-palace-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Hammer className="h-6 w-6 text-palace-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Custom Furniture
                    </h3>
                    <p className="text-gray-600">
                      Bespoke furniture pieces designed and crafted to your
                      exact specifications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-palace-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Hammer className="h-6 w-6 text-palace-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Kitchen Cabinets
                    </h3>
                    <p className="text-gray-600">
                      Premium kitchen cabinetry with modern designs and superior
                      functionality.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-palace-gold-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Hammer className="h-6 w-6 text-palace-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Commercial Projects
                    </h3>
                    <p className="text-gray-600">
                      Large-scale woodworking solutions for offices,
                      restaurants, and retail spaces.
                    </p>
                  </div>
                </div>
              </div>
              <Button
                asChild
                className="mt-8 bg-palace-teal-600 hover:bg-palace-teal-700 text-white"
                size="lg"
              >
                <Link href="/services">Explore All Services</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src={image1}
                alt="Woodworking Services"
                width={500}
                height={600}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-palace-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-700">
              Don't just take our word for it - hear from our satisfied
              customers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-palace-teal-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-palace-gold-500 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-palace-teal-600 text-palace-teal-700 hover:bg-palace-teal-100 bg-transparent"
            >
              <Link href="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your woodworking project. Our
            experts are ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-palace-gold-500 hover:bg-palace-gold-600 text-black font-semibold"
              onClick={handleQuoteClick}
            >
              <Link href="/quote" aria-label="Get Free Quote">
                Get Free Quote
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              onClick={handleContactClick}
            >
              <Link href="/contact" aria-label="Contact Us">
                Contact Us
              </Link>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 pt-8 border-t border-gray-700">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-palace-gold-400" />
              <span>+251 911018883</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-palace-gold-400" />
              <span>info@palacewoodwork.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-palace-gold-400" />
              <span>Addis Ababa ,A.A</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
