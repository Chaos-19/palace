"use client";

import Link from "next/link";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Star,
  Quote,
  Search,
  Calendar,
  User,
  MapPin,
  Award,
} from "lucide-react";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

export default function TestimonialsPage() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    rating: 5,
    review: "",
    location: "",
    allowContact: false,
  });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      location: "Addis Ababa ,A.A",
      project: "Custom Kitchen Cabinets",
      rating: 5,
      date: "2024-01-15",
      content:
        "Working with Palace Woodwork was an absolute pleasure. From the initial consultation to the final installation, every aspect was handled professionally. The custom kitchen cabinets exceeded our expectations in both quality and design. The attention to detail is remarkable, and the craftsmanship is truly exceptional. I would highly recommend them to anyone looking for premium woodwork.",
      image: "/placeholder.svg?height=80&width=80",
      verified: true,
      featured: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Restaurant Owner",
      location: "Los Angeles, CA",
      project: "Commercial Restaurant Furniture",
      rating: 5,
      date: "2024-01-10",
      content:
        "Palace Woodwork delivered outstanding results for our restaurant renovation. The custom dining tables and booth seating are not only beautiful but also incredibly durable. The team understood our commercial needs and timeline perfectly. Six months later, everything still looks brand new despite heavy daily use. Excellent work!",
      image: "/placeholder.svg?height=80&width=80",
      verified: true,
      featured: true,
    },
    {
      id: 3,
      name: "Emma Davis",
      role: "Interior Designer",
      location: "Chicago, IL",
      project: "Built-in Storage Solutions",
      rating: 5,
      date: "2024-01-08",
      content:
        "As an interior designer, I've worked with many contractors, but Palace Woodwork stands out. Their attention to detail and ability to execute complex designs is impressive. The built-in storage solutions they created for my client's home office are both functional and beautiful. I regularly recommend them to my clients.",
      image: "/placeholder.svg?height=80&width=80",
      verified: true,
      featured: true,
    },
    {
      id: 4,
      name: "Robert Martinez",
      role: "Homeowner",
      location: "Miami, FL",
      project: "Custom Dining Table",
      rating: 5,
      date: "2024-01-05",
      content:
        "The custom dining table we commissioned is absolutely stunning. The live-edge walnut top is gorgeous, and the craftsmanship is flawless. The team worked with us throughout the process, keeping us informed and involved. The table has become the centerpiece of our dining room. Worth every penny!",
      image: "/placeholder.svg?height=80&width=80",
      verified: true,
      featured: false,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Office Manager",
      location: "Seattle, WA",
      project: "Office Reception Desk",
      rating: 5,
      date: "2024-01-03",
      content:
        "Our new reception desk is perfect! Palace Woodwork created a piece that reflects our company's values and style. The desk is not only beautiful but also functional with integrated cable management and storage. The installation was quick and professional. Highly recommend for commercial projects.",
      image: "/placeholder.svg?height=80&width=80",
      verified: true,
      featured: false,
    },
    {
      id: 6,
      name: "David Wilson",
      role: "Architect",
      location: "Denver, CO",
      project: "Architectural Millwork",
      rating: 5,
      date: "2023-12-28",
      content:
        "Working with Palace Woodwork on our architectural millwork project was seamless. They understood our technical drawings and specifications perfectly. The crown molding and wainscoting they created elevated the entire space. Their precision and expertise in architectural details is remarkable.",
      image: "/placeholder.svg?height=80&width=80",
      verified: true,
      featured: false,
    },
    {
      id: 7,
      name: "Amanda Foster",
      role: "Homeowner",
      location: "Boston, MA",
      project: "Bedroom Furniture Set",
      rating: 4,
      date: "2023-12-25",
      content:
        "We're very happy with our custom bedroom furniture set. The bed frame, nightstands, and dresser are beautifully crafted and match perfectly. The only minor issue was a slight delay in delivery, but the quality makes up for it. The customer service was excellent throughout the process.",
      image: "/placeholder.svg?height=80&width=80",
      verified: true,
      featured: false,
    },
    {
      id: 8,
      name: "James Rodriguez",
      role: "Hotel Owner",
      location: "Orlando, FL",
      project: "Hotel Lobby Furniture",
      rating: 5,
      date: "2023-12-20",
      content:
        "Palace Woodwork transformed our hotel lobby with stunning custom furniture. The reception desk, lounge seating, and decorative panels create a warm, welcoming atmosphere. Guests regularly compliment the beautiful woodwork. The team managed the entire project professionally and delivered on time.",
      image: "/placeholder.svg?height=80&width=80",
      verified: true,
      featured: false,
    },
  ];

  const stats = [
    { label: "Total Reviews", value: "500+", icon: Star },
    { label: "Average Rating", value: "4.9", icon: Award },
    { label: "Verified Customers", value: "98%", icon: User },
    { label: "Project Types", value: "15+", icon: MapPin },
  ];

  const filteredTestimonials = testimonials.filter((testimonial) => {
    const matchesSearch =
      testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      testimonial.project.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterBy === "all" ||
      (filterBy === "5-star" && testimonial.rating === 5) ||
      (filterBy === "4-star" && testimonial.rating === 4) ||
      (filterBy === "featured" && testimonial.featured) ||
      (filterBy === "verified" && testimonial.verified);

    return matchesSearch && matchesFilter;
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Review Submitted!",
      description:
        "Thank you for your feedback. Your review will be published after verification.",
    });
    setShowForm(false);
    setFormData({
      name: "",
      email: "",
      project: "",
      rating: 5,
      review: "",
      location: "",
      allowContact: false,
    });
  };

  const averageRating =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map((rating) => ({
    rating,
    count: testimonials.filter((t) => t.rating === rating).length,
    percentage:
      (testimonials.filter((t) => t.rating === rating).length /
        testimonials.length) *
      100,
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Customer Testimonials
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied customers about their experience with
              Palace Woodwork
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-amber-600" />
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

      {/* Rating Overview */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Overall Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl font-bold text-amber-600">
                    {averageRating.toFixed(1)}
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${
                            i < Math.floor(averageRating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-gray-600">
                      Based on {testimonials.length} reviews
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {ratingDistribution.map((item) => (
                    <div key={item.rating} className="flex items-center gap-2">
                      <span className="text-sm w-8">{item.rating}★</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-amber-500 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-8">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Write a Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Share your experience with Palace Woodwork and help others
                  make informed decisions.
                </p>
                <Button
                  onClick={() => setShowForm(true)}
                  className="w-full bg-amber-600 hover:bg-amber-700"
                >
                  Write a Review
                </Button>
              </CardContent>
            </Card>
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
                  placeholder="Search reviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Reviews</SelectItem>
                  <SelectItem value="5-star">5 Star Reviews</SelectItem>
                  <SelectItem value="4-star">4 Star Reviews</SelectItem>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="verified">Verified Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-gray-600">
              {filteredTestimonials.length} reviews found
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className={`${
                  testimonial.featured ? "ring-2 ring-amber-500" : ""
                }`}
              >
                <CardContent className="p-6">
                  {testimonial.featured && (
                    <Badge className="mb-4 bg-amber-600">Featured Review</Badge>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        {testimonial.verified && (
                          <Badge variant="secondary" className="text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {new Date(testimonial.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 italic relative">
                    <Quote className="h-4 w-4 text-amber-400 absolute -top-2 -left-2" />
                    {testimonial.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.project}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {testimonial.rating}/5 stars
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No reviews found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setFilterBy("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Review Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Write a Review</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitReview} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="project">Project Type *</Label>
                    <Select
                      value={formData.project}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, project: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kitchen-cabinets">
                          Kitchen Cabinets
                        </SelectItem>
                        <SelectItem value="custom-furniture">
                          Custom Furniture
                        </SelectItem>
                        <SelectItem value="built-in-storage">
                          Built-in Storage
                        </SelectItem>
                        <SelectItem value="commercial-project">
                          Commercial Project
                        </SelectItem>
                        <SelectItem value="restoration">Restoration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="City, State"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          location: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                <div>
                  <Label>Rating *</Label>
                  <RadioGroup
                    value={formData.rating.toString()}
                    onValueChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        rating: Number.parseInt(value),
                      }))
                    }
                    className="flex gap-6 mt-2"
                  >
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={rating.toString()}
                          id={`rating-${rating}`}
                        />
                        <Label
                          htmlFor={`rating-${rating}`}
                          className="flex items-center gap-1"
                        >
                          {[...Array(rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="review">Your Review *</Label>
                  <Textarea
                    id="review"
                    placeholder="Share your experience with Palace Woodwork..."
                    value={formData.review}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        review: e.target.value,
                      }))
                    }
                    rows={4}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="allowContact"
                    checked={formData.allowContact}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        allowContact: e.target.checked,
                      }))
                    }
                  />
                  <Label htmlFor="allowContact" className="text-sm">
                    I allow Palace Woodwork to contact me about this review
                  </Label>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-amber-600 hover:bg-amber-700"
                  >
                    Submit Review
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience the Palace Woodwork Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who chose Palace Woodwork for
            their custom woodworking needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700"
            >
              <Link href="/quote">Get Your Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
