"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Handshake,
  TrendingUp,
  Users,
  Globe,
  Award,
  DollarSign,
  CheckCircle,
  Building,
  Home,
  Store,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function PartnerPage() {
  const { toast } = useToast();
  type FormData = {
    companyName: string;
    contactName: string;
    email: string;
    phone: string;
    website: string;
    address: string;
    businessType: string;
    yearsInBusiness: string;
    annualRevenue: string;
    employeeCount: string;
    partnershipType: string;
    territories: string[];
    experience: string;
    why: string;
    references: string;
    certifications: string;
    portfolio: string;
    termsAccepted: boolean;
    marketingConsent: boolean;
  };

  const [formData, setFormData] = useState<FormData>({
    // Company Information
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    website: "",
    address: "",

    // Business Details
    businessType: "",
    yearsInBusiness: "",
    annualRevenue: "",
    employeeCount: "",

    // Partnership Interest
    partnershipType: "",
    territories: [],
    experience: "",
    why: "",

    // Additional Information
    references: "",
    certifications: "",
    portfolio: "",

    // Agreements
    termsAccepted: false,
    marketingConsent: false,
  });

  const partnershipTypes = [
    {
      id: "dealer",
      title: "Authorized Dealer",
      description: "Sell Palace Woodwork products in your market",
      icon: Store,
      benefits: [
        "Exclusive territory rights",
        "Wholesale pricing",
        "Marketing support",
        "Training programs",
        "Lead generation",
      ],
    },
    {
      id: "contractor",
      title: "Preferred Contractor",
      description: "Partner with us for installation services",
      icon: Building,
      benefits: [
        "Steady work flow",
        "Competitive rates",
        "Quality materials",
        "Project support",
        "Referral program",
      ],
    },
    {
      id: "designer",
      title: "Design Partner",
      description: "Collaborate on custom design projects",
      icon: Home,
      benefits: [
        "Commission structure",
        "Design resources",
        "Client referrals",
        "Collaborative projects",
        "Brand recognition",
      ],
    },
  ];

  const requirements = [
    {
      type: "dealer",
      title: "Dealer Requirements",
      items: [
        "Established retail presence",
        "Minimum 3 years in business",
        "Strong local market knowledge",
        "Dedicated showroom space",
        "Financial stability",
        "Commitment to quality service",
      ],
    },
    {
      type: "contractor",
      title: "Contractor Requirements",
      items: [
        "Licensed and insured",
        "Proven installation experience",
        "Quality workmanship standards",
        "Professional references",
        "Reliable team",
        "Commitment to deadlines",
      ],
    },
    {
      type: "designer",
      title: "Designer Requirements",
      items: [
        "Professional design credentials",
        "Portfolio of completed projects",
        "Client base and network",
        "Understanding of woodworking",
        "Collaborative approach",
        "Marketing capabilities",
      ],
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Growing Market",
      description:
        "Tap into the expanding custom woodworking market with proven products",
    },
    {
      icon: Award,
      title: "Premium Brand",
      description:
        "Associate with a respected brand known for quality and craftsmanship",
    },
    {
      icon: Users,
      title: "Ongoing Support",
      description:
        "Receive training, marketing materials, and technical support",
    },
    {
      icon: Globe,
      title: "Expansion Opportunities",
      description:
        "Grow your business with exclusive territory rights and lead generation",
    },
    {
      icon: DollarSign,
      title: "Competitive Margins",
      description:
        "Enjoy attractive pricing and profit margins on all products",
    },
    {
      icon: Handshake,
      title: "Long-term Partnership",
      description:
        "Build a lasting relationship with a company committed to your success",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Partnership Application Submitted!",
      description:
        "Thank you for your interest. We'll review your application and get back to you within 5 business days.",
    });

    // Reset form
    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      website: "",
      address: "",
      businessType: "",
      yearsInBusiness: "",
      annualRevenue: "",
      employeeCount: "",
      partnershipType: "",
      territories: [],
      experience: "",
      why: "",
      references: "",
      certifications: "",
      portfolio: "",
      termsAccepted: false,
      marketingConsent: false,
    });
  };

  const handleTerritoryChange = (territory: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      territories: checked
        ? [...prev.territories, territory]
        : prev.territories.filter((t) => t !== territory),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Become a Partner
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join the Palace Woodwork family and grow your business with our
              premium products and support
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Choose the partnership model that best fits your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type) => (
              <Card
                key={type.id}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <type.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <p className="text-gray-600">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Benefits Include:</h4>
                  <ul className="space-y-2 mb-6">
                    {type.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Partner With Palace Woodwork?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to succeed in the premium
              woodworking market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Partnership Requirements
            </h2>
            <p className="text-xl text-gray-600">
              We work with qualified partners who share our commitment to
              quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{req.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {req.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                  Partnership Application
                </CardTitle>
                <p className="text-gray-600">
                  Complete the form below to apply for a partnership with Palace
                  Woodwork
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Company Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Company Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="companyName">Company Name *</Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              companyName: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="contactName">Contact Name *</Label>
                        <Input
                          id="contactName"
                          value={formData.contactName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              contactName: e.target.value,
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
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input
                          id="website"
                          type="url"
                          value={formData.website}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              website: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="address">Business Address *</Label>
                        <Input
                          id="address"
                          value={formData.address}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              address: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Business Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Business Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="businessType">Business Type *</Label>
                        <Select
                          value={formData.businessType}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              businessType: value,
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="retail">Retail Store</SelectItem>
                            <SelectItem value="contractor">
                              Contractor
                            </SelectItem>
                            <SelectItem value="designer">
                              Interior Designer
                            </SelectItem>
                            <SelectItem value="architect">Architect</SelectItem>
                            <SelectItem value="distributor">
                              Distributor
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="yearsInBusiness">
                          Years in Business *
                        </Label>
                        <Select
                          value={formData.yearsInBusiness}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              yearsInBusiness: value,
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select years" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-2">1-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="11-20">11-20 years</SelectItem>
                            <SelectItem value="20+">20+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="annualRevenue">Annual Revenue</Label>
                        <Select
                          value={formData.annualRevenue}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              annualRevenue: value,
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-100k">
                              Under $100K
                            </SelectItem>
                            <SelectItem value="100k-500k">
                              $100K - $500K
                            </SelectItem>
                            <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                            <SelectItem value="1m-5m">$1M - $5M</SelectItem>
                            <SelectItem value="5m+">$5M+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="employeeCount">
                          Number of Employees
                        </Label>
                        <Select
                          value={formData.employeeCount}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              employeeCount: value,
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-5">1-5</SelectItem>
                            <SelectItem value="6-10">6-10</SelectItem>
                            <SelectItem value="11-25">11-25</SelectItem>
                            <SelectItem value="26-50">26-50</SelectItem>
                            <SelectItem value="50+">50+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Partnership Interest */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Partnership Interest
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="partnershipType">
                          Partnership Type *
                        </Label>
                        <Select
                          value={formData.partnershipType}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              partnershipType: value,
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select partnership type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dealer">
                              Authorized Dealer
                            </SelectItem>
                            <SelectItem value="contractor">
                              Preferred Contractor
                            </SelectItem>
                            <SelectItem value="designer">
                              Design Partner
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Target Markets/Territories</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                          {[
                            "Northeast",
                            "Southeast",
                            "Midwest",
                            "Southwest",
                            "West Coast",
                            "Pacific Northwest",
                            "International",
                            "Online Only",
                          ].map((territory) => (
                            <div
                              key={territory}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={territory}
                                checked={formData.territories.includes(
                                  territory
                                )}
                                onCheckedChange={(checked) =>
                                  handleTerritoryChange(
                                    territory,
                                    checked as boolean
                                  )
                                }
                              />
                              <Label htmlFor={territory} className="text-sm">
                                {territory}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="experience">
                          Relevant Experience *
                        </Label>
                        <Textarea
                          id="experience"
                          placeholder="Describe your experience in the woodworking, furniture, or related industry..."
                          value={formData.experience}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              experience: e.target.value,
                            }))
                          }
                          rows={3}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="why">Why Palace Woodwork? *</Label>
                        <Textarea
                          id="why"
                          placeholder="Tell us why you want to partner with Palace Woodwork and what you hope to achieve..."
                          value={formData.why}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              why: e.target.value,
                            }))
                          }
                          rows={3}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Additional Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="references">References</Label>
                        <Textarea
                          id="references"
                          placeholder="Please provide 2-3 business references (name, company, phone, email)..."
                          value={formData.references}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              references: e.target.value,
                            }))
                          }
                          rows={2}
                        />
                      </div>

                      <div>
                        <Label htmlFor="certifications">
                          Certifications & Licenses
                        </Label>
                        <Textarea
                          id="certifications"
                          placeholder="List any relevant certifications, licenses, or professional memberships..."
                          value={formData.certifications}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              certifications: e.target.value,
                            }))
                          }
                          rows={2}
                        />
                      </div>

                      <div>
                        <Label htmlFor="portfolio">Portfolio/Website</Label>
                        <Input
                          id="portfolio"
                          placeholder="Link to your portfolio or website showcasing your work..."
                          value={formData.portfolio}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              portfolio: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Agreements */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Agreements</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="termsAccepted"
                          checked={formData.termsAccepted}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({
                              ...prev,
                              termsAccepted: checked as boolean,
                            }))
                          }
                          required
                        />
                        <Label htmlFor="termsAccepted" className="text-sm">
                          I agree to the{" "}
                          <Link
                            href="/terms"
                            className="text-amber-600 hover:underline"
                          >
                            Terms and Conditions
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="/privacy"
                            className="text-amber-600 hover:underline"
                          >
                            Privacy Policy
                          </Link>{" "}
                          *
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="marketingConsent"
                          checked={formData.marketingConsent}
                          onCheckedChange={(checked) =>
                            setFormData((prev) => ({
                              ...prev,
                              marketingConsent: checked as boolean,
                            }))
                          }
                        />
                        <Label htmlFor="marketingConsent" className="text-sm">
                          I consent to receiving marketing communications from
                          Palace Woodwork
                        </Label>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-amber-600 hover:bg-amber-700"
                  >
                    Submit Partnership Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions About Partnership?
            </h2>
            <p className="text-xl text-gray-600">
              Our partnership team is here to help you get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-600">
                      Speak with our partnership team
                    </p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  +251 911018883
                </p>
                <p className="text-gray-600">
                  Monday - Friday, 9:00 AM - 6:00 PM EST
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-600">Send us your questions</p>
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  partnerships@palacewoodwork.com
                </p>
                <p className="text-gray-600">We'll respond within 24 hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
