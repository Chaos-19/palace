"use client";

import type React from "react";

import { useState } from "react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Upload, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function QuotePage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",

    // Project Details
    projectType: "",
    category: "",
    description: "",
    dimensions: "",
    materials: [],
    timeline: "",
    budget: "",

    // Location & Installation
    location: "",
    installationRequired: "",

    // Additional Services
    additionalServices: [],

    // Files
    files: [],
  });

  const projectTypes = [
    { value: "custom-furniture", label: "Custom Furniture" },
    { value: "kitchen-cabinets", label: "Kitchen Cabinets" },
    { value: "built-ins", label: "Built-in Storage" },
    { value: "commercial", label: "Commercial Project" },
    { value: "restoration", label: "Restoration" },
    { value: "other", label: "Other" },
  ];

  const materials = [
    { id: "oak", label: "Oak" },
    { id: "maple", label: "Maple" },
    { id: "cherry", label: "Cherry" },
    { id: "walnut", label: "Walnut" },
    { id: "pine", label: "Pine" },
    { id: "mahogany", label: "Mahogany" },
    { id: "other", label: "Other/Not Sure" },
  ];

  const additionalServices = [
    { id: "design", label: "Design Consultation" },
    { id: "installation", label: "Professional Installation" },
    { id: "delivery", label: "Delivery Service" },
    { id: "finishing", label: "Custom Finishing" },
    { id: "maintenance", label: "Maintenance Plan" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Quote Request Submitted!",
      description:
        "We'll review your request and get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      category: "",
      description: "",
      dimensions: "",
      materials: [],
      timeline: "",
      budget: "",
      location: "",
      installationRequired: "",
      additionalServices: [],
      files: [],
    });
  };

  const handleMaterialChange = (materialId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      materials: checked
        ? [...prev.materials, materialId]
        : prev.materials.filter((id) => id !== materialId),
    }));
  };

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: checked
        ? [...prev.additionalServices, serviceId]
        : prev.additionalServices.filter((id) => id !== serviceId),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Request a Quote
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your project and we'll provide you with a detailed
              quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quote Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              firstName: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              lastName: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
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
                      <div className="md:col-span-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              company: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Project Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="projectType">Project Type *</Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              projectType: value,
                            }))
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            {projectTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="description">
                          Project Description *
                        </Label>
                        <Textarea
                          id="description"
                          placeholder="Please describe your project in detail..."
                          value={formData.description}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              description: e.target.value,
                            }))
                          }
                          rows={4}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="dimensions">Dimensions/Size</Label>
                        <Input
                          id="dimensions"
                          placeholder="e.g., 8ft x 4ft x 2ft"
                          value={formData.dimensions}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              dimensions: e.target.value,
                            }))
                          }
                        />
                      </div>

                      <div>
                        <Label>Preferred Materials</Label>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                          {materials.map((material) => (
                            <div
                              key={material.id}
                              className="flex items-center space-x-2"
                            >
                              <Checkbox
                                id={material.id}
                                checked={formData.materials.includes(
                                  material.id
                                )}
                                onCheckedChange={(checked) =>
                                  handleMaterialChange(
                                    material.id,
                                    checked as boolean
                                  )
                                }
                              />
                              <Label htmlFor={material.id} className="text-sm">
                                {material.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="timeline">Timeline</Label>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                timeline: value,
                              }))
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">ASAP</SelectItem>
                              <SelectItem value="1-2-weeks">
                                1-2 weeks
                              </SelectItem>
                              <SelectItem value="1-month">
                                Within 1 month
                              </SelectItem>
                              <SelectItem value="2-3-months">
                                2-3 months
                              </SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) =>
                              setFormData((prev) => ({
                                ...prev,
                                budget: value,
                              }))
                            }
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="under-1000">
                                Under $1,000
                              </SelectItem>
                              <SelectItem value="1000-2500">
                                $1,000 - $2,500
                              </SelectItem>
                              <SelectItem value="2500-5000">
                                $2,500 - $5,000
                              </SelectItem>
                              <SelectItem value="5000-10000">
                                $5,000 - $10,000
                              </SelectItem>
                              <SelectItem value="over-10000">
                                Over $10,000
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location & Installation */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Location & Installation
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="location">Project Location *</Label>
                        <Input
                          id="location"
                          placeholder="City, State/Country"
                          value={formData.location}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              location: e.target.value,
                            }))
                          }
                          required
                        />
                      </div>

                      <div>
                        <Label>Installation Required?</Label>
                        <RadioGroup
                          value={formData.installationRequired}
                          onValueChange={(value) =>
                            setFormData((prev) => ({
                              ...prev,
                              installationRequired: value,
                            }))
                          }
                          className="flex gap-6 mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="install-yes" />
                            <Label htmlFor="install-yes">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="install-no" />
                            <Label htmlFor="install-no">No</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="maybe" id="install-maybe" />
                            <Label htmlFor="install-maybe">Not sure</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Additional Services
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {additionalServices.map((service) => (
                        <div
                          key={service.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={service.id}
                            checked={formData.additionalServices.includes(
                              service.id
                            )}
                            onCheckedChange={(checked) =>
                              handleServiceChange(
                                service.id,
                                checked as boolean
                              )
                            }
                          />
                          <Label htmlFor={service.id} className="text-sm">
                            {service.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* File Upload */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Attachments</h3>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">
                        Upload reference images, sketches, or documents
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        Supported formats: JPG, PNG, PDF, DWG (Max 10MB each)
                      </p>
                      <Button type="button" variant="outline">
                        Choose Files
                      </Button>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-amber-600 hover:bg-amber-700"
                  >
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm text-gray-600">+251 911018883</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-sm text-gray-600">
                      quotes@palacewoodwork.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Our Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Submit Request</p>
                      <p className="text-sm text-gray-600">
                        Fill out the quote form with your project details
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Review & Consultation</p>
                      <p className="text-sm text-gray-600">
                        We review your request and may schedule a consultation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Detailed Quote</p>
                      <p className="text-sm text-gray-600">
                        Receive a comprehensive quote with timeline and pricing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Project Start</p>
                      <p className="text-sm text-gray-600">
                        Upon approval, we begin crafting your custom piece
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Quick FAQ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium text-sm">
                    How long does quoting take?
                  </p>
                  <p className="text-sm text-gray-600">
                    Most quotes are provided within 24 hours.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-sm">Is the quote free?</p>
                  <p className="text-sm text-gray-600">
                    Yes, all quotes are completely free with no obligation.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-sm">
                    Do you ship internationally?
                  </p>
                  <p className="text-sm text-gray-600">
                    Yes, we ship worldwide with secure packaging.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
