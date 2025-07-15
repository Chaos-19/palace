import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Globe, Heart, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { image4 } from "@/assets";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Craft",
      description:
        "Every piece we create is infused with our love for woodworking and attention to detail.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "We use only premium materials and time-tested techniques to ensure lasting quality.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Your vision drives our work. We collaborate closely to exceed your expectations.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Serving clients worldwide while maintaining our commitment to excellence.",
    },
  ];

  const team = [
    {
      name: "Michael Rodriguez",
      role: "Founder & Master Craftsman",
      experience: "20+ years",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael founded Palace Woodwork with a vision to create exceptional custom pieces that stand the test of time.",
    },
    {
      name: "Sarah Chen",
      role: "Design Director",
      experience: "15+ years",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sarah leads our design team, bringing innovative concepts and modern aesthetics to traditional craftsmanship.",
    },
    {
      name: "David Thompson",
      role: "Production Manager",
      experience: "18+ years",
      image: "/placeholder.svg?height=300&width=300",
      bio: "David ensures every project meets our exacting standards from conception to completion.",
    },
  ];

  const milestones = [
    { year: "2009", event: "Palace Woodwork founded" },
    { year: "2012", event: "First international project completed" },
    { year: "2015", event: "Expanded to commercial projects" },
    { year: "2018", event: "Opened second workshop facility" },
    { year: "2020", event: "Launched online ordering system" },
    { year: "2024", event: "Celebrating 15 years of excellence" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-amber-100 text-amber-800">
              Our Story
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Crafting Excellence Since 2009
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Palace Woodwork was born from a passion for creating beautiful,
              functional pieces that enhance people's lives. What started as a
              small workshop has grown into a trusted name in custom
              woodworking, serving clients across the globe with uncompromising
              quality and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To create exceptional custom woodwork that combines traditional
                craftsmanship with modern design, delivering pieces that not
                only meet but exceed our clients' expectations.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that quality woodwork is an investment in beauty,
                functionality, and lasting value. Every project we undertake is
                a testament to our commitment to excellence.
              </p>
              <Button asChild size="lg">
                <Link href="/quote">Start Your Project</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src={image4}
                alt="Craftsman at work"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the way we
              approach each project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-6">
                    <value.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our skilled craftsmen and designers bring decades of combined
              experience to every project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <Badge variant="outline" className="mb-4">
                    {member.experience}
                  </Badge>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth and evolution as a company.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200"></div>
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-2xl font-bold text-amber-600 mb-2">
                        {milestone.year}
                      </div>
                      <div className="text-gray-700">{milestone.event}</div>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the Palace Woodwork difference. Let's create something
            beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700"
            >
              <Link href="/quote">Request Quote</Link>
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
