import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Hammer,
  Home,
  Building,
  Wrench,
  Palette,
  Truck,
  Shield,
  Clock,
  Award,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { p3 } from "@/assets";

export default function ServicesPage() {
  const services = [
    {
      id: "custom-furniture",
      title: "Custom Furniture",
      description:
        "Bespoke furniture pieces designed and crafted to your exact specifications and style preferences.",
      icon: Home,
      image: p3,
      price: "From $800",
      features: [
        "Personalized design consultation",
        "3D visualization and planning",
        "Premium wood selection",
        "Handcrafted construction",
        "Custom sizing and finishes",
        "Lifetime craftsmanship warranty",
      ],
      process: [
        "Initial consultation and design brief",
        "3D modeling and approval",
        "Material selection and sourcing",
        "Expert craftsmanship and construction",
        "Quality control and finishing",
        "Professional delivery and setup",
      ],
      timeline: "4-8 weeks",
      popular: true,
    },
    {
      id: "kitchen-cabinets",
      title: "Kitchen Cabinets",
      description:
        "Transform your kitchen with custom cabinetry that maximizes storage and enhances functionality.",
      icon: Building,
      image: "/placeholder.svg?height=300&width=400",
      price: "From $2,500",
      features: [
        "Custom cabinet design",
        "Soft-close hinges and slides",
        "Various wood species available",
        "Multiple finish options",
        "Professional installation",
        "10-year warranty",
      ],
      process: [
        "Kitchen measurement and assessment",
        "Design consultation and planning",
        "Material and finish selection",
        "Cabinet construction and assembly",
        "Professional installation",
        "Final inspection and touch-ups",
      ],
      timeline: "6-10 weeks",
      popular: true,
    },
    {
      id: "built-in-storage",
      title: "Built-in Storage",
      description:
        "Maximize your space with custom built-in storage solutions for any room in your home.",
      icon: Hammer,
      image: "/placeholder.svg?height=300&width=400",
      price: "From $1,200",
      features: [
        "Space optimization analysis",
        "Custom compartment design",
        "Hidden storage solutions",
        "LED lighting integration",
        "Premium hardware",
        "Seamless integration",
      ],
      process: [
        "Space evaluation and planning",
        "Design development",
        "Construction and fabrication",
        "Installation and integration",
        "Finishing and detailing",
        "Final walkthrough",
      ],
      timeline: "3-6 weeks",
      popular: false,
    },
    {
      id: "commercial-projects",
      title: "Commercial Projects",
      description:
        "Large-scale woodworking solutions for offices, restaurants, retail spaces, and hospitality venues.",
      icon: Building,
      image: "/placeholder.svg?height=300&width=400",
      price: "Custom Quote",
      features: [
        "Project management",
        "Commercial-grade materials",
        "Bulk production capabilities",
        "Installation coordination",
        "Maintenance programs",
        "Extended warranties",
      ],
      process: [
        "Project consultation and planning",
        "Design development and approval",
        "Material sourcing and preparation",
        "Manufacturing and quality control",
        "Coordinated installation",
        "Project completion and handover",
      ],
      timeline: "8-16 weeks",
      popular: false,
    },
    {
      id: "restoration",
      title: "Restoration & Repair",
      description:
        "Breathe new life into antique or damaged furniture with our expert restoration services.",
      icon: Wrench,
      image: "/placeholder.svg?height=300&width=400",
      price: "From $200",
      features: [
        "Damage assessment",
        "Historical research",
        "Traditional repair techniques",
        "Matching original finishes",
        "Structural reinforcement",
        "Preservation treatments",
      ],
      process: [
        "Condition assessment",
        "Restoration planning",
        "Repair and reconstruction",
        "Finishing and refinishing",
        "Quality inspection",
        "Preservation guidance",
      ],
      timeline: "2-8 weeks",
      popular: false,
    },
    {
      id: "design-consultation",
      title: "Design Consultation",
      description:
        "Professional design guidance to help you plan and visualize your woodworking projects.",
      icon: Palette,
      image: "/placeholder.svg?height=300&width=400",
      price: "From $150",
      features: [
        "Professional design advice",
        "3D visualization",
        "Material recommendations",
        "Budget planning",
        "Timeline development",
        "Contractor referrals",
      ],
      process: [
        "Initial consultation meeting",
        "Space assessment and measurement",
        "Design development",
        "3D modeling and visualization",
        "Material and finish selection",
        "Final presentation and recommendations",
      ],
      timeline: "1-2 weeks",
      popular: false,
    },
  ];

  const additionalServices = [
    {
      icon: Truck,
      title: "Delivery & Installation",
      description:
        "Professional delivery and installation services for all projects",
    },
    {
      icon: Shield,
      title: "Warranty & Maintenance",
      description:
        "Comprehensive warranty coverage and ongoing maintenance support",
    },
    {
      icon: Clock,
      title: "Rush Orders",
      description: "Expedited production for time-sensitive projects",
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all craftsmanship",
    },
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Homeowner",
      content:
        "The custom kitchen cabinets exceeded our expectations. The team was professional and the quality is outstanding.",
      rating: 5,
    },
    {
      name: "Robert Chen",
      role: "Restaurant Owner",
      content:
        "Palace Woodwork delivered an amazing commercial project for our restaurant. The built-in seating and bar are beautiful.",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Interior Designer",
      content:
        "I regularly recommend Palace Woodwork to my clients. Their attention to detail and customer service is exceptional.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From custom furniture to commercial projects, we offer
              comprehensive woodworking services to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-lg transition-shadow"
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 z-10 bg-amber-600">
                    Popular
                  </Badge>
                )}
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                      <p className="text-amber-600 font-medium">
                        {service.price}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{service.timeline}</span>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/services/${service.id}`}>
                        Learn More <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine traditional craftsmanship with modern techniques to
              deliver exceptional results.
            </p>
          </div>

          <Tabs defaultValue="process" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="process">Our Process</TabsTrigger>
              <TabsTrigger value="features">Key Features</TabsTrigger>
              <TabsTrigger value="guarantee">Our Guarantee</TabsTrigger>
            </TabsList>

            <TabsContent value="process" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    step: "1",
                    title: "Consultation",
                    description:
                      "We start with a detailed consultation to understand your vision and requirements.",
                  },
                  {
                    step: "2",
                    title: "Design & Planning",
                    description:
                      "Our designers create detailed plans and 3D visualizations for your approval.",
                  },
                  {
                    step: "3",
                    title: "Material Selection",
                    description:
                      "Choose from our premium selection of woods, finishes, and hardware.",
                  },
                  {
                    step: "4",
                    title: "Craftsmanship",
                    description:
                      "Our skilled craftsmen bring your project to life with precision and care.",
                  },
                  {
                    step: "5",
                    title: "Quality Control",
                    description:
                      "Every piece undergoes rigorous quality inspection before delivery.",
                  },
                  {
                    step: "6",
                    title: "Installation",
                    description:
                      "Professional installation and setup to ensure perfect results.",
                  },
                ].map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {item.step}
                        </div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Premium Materials
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Solid hardwoods from sustainable sources",
                      "Premium hardware and finishes",
                      "Commercial-grade materials for durability",
                      "Eco-friendly finishing products",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Expert Craftsmanship
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "20+ years of woodworking experience",
                      "Traditional joinery techniques",
                      "Precision measuring and cutting",
                      "Hand-finished details",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="guarantee" className="mt-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Our Commitment to Quality
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We stand behind every piece we create with comprehensive
                  warranties and ongoing support.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "10-Year Warranty",
                    description:
                      "Comprehensive warranty on all structural elements and craftsmanship",
                  },
                  {
                    title: "100% Satisfaction",
                    description:
                      "We're not satisfied until you're completely happy with the result",
                  },
                  {
                    title: "Free Adjustments",
                    description:
                      "Minor adjustments and fine-tuning included in the first year",
                  },
                  {
                    title: "Lifetime Support",
                    description:
                      "Ongoing support and maintenance guidance for the life of your piece",
                  },
                ].map((guarantee, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-8 w-8 text-amber-600" />
                      </div>
                      <h4 className="font-semibold mb-2">{guarantee.title}</h4>
                      <p className="text-sm text-gray-600">
                        {guarantee.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support for all your woodworking needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 bg-yellow-400 rounded-full mr-1"
                      ></div>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something beautiful together.
            Get a free consultation and quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700"
            >
              <Link href="/quote">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 pt-8 border-t border-gray-700">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-amber-400" />
              <span>+251 911018883</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-amber-400" />
              <span>info@palacewoodwork.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
