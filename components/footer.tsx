import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-palace-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold">Palace Woodwork</span>
            </div>
            <p className="text-gray-300 mb-6">
              Crafting exceptional woodwork with precision and passion. Serving
              clients worldwide with premium custom solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://web.facebook.com/p/Palace-Woodworks-%E1%8D%93%E1%88%8B%E1%88%B5-%E1%8B%A8%E1%8A%A5%E1%8A%95%E1%8C%A8%E1%89%B5-%E1%88%B5%E1%88%AB%E1%8B%8E%E1%89%BD-100064773673253/?_rdc=1&_rdr#"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-palace-gold-400 hover:bg-gray-800"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://www.tiktok.com/@palace.woodworks?_t=8rKb1V0fUH9&_r=1"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-palace-gold-400 hover:bg-gray-800"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://www.tiktok.com/@palace.woodworks?_t=8rKb1V0fUH9&_r=1"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-palace-gold-400 hover:bg-gray-800"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://www.tiktok.com/@palace.woodworks?_t=8rKb1V0fUH9&_r=1"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-palace-gold-400 hover:bg-gray-800"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-palace-gold-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-300 hover:text-palace-gold-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-palace-gold-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-gray-300 hover:text-palace-gold-400 transition-colors"
                >
                  Request Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-300 hover:text-palace-gold-400 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-gray-300 hover:text-palace-gold-400 transition-colors"
                >
                  News & Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/custom-furniture"
                  className="text-gray-300 hover:text-palace-gold-400 transition-colors"
                >
                  Custom Furniture
                </Link>
              </li>
              <li>
                <Link
                  href="/services/kitchen-cabinets"
                  className="text-gray-300 hover:text-palace-gold-400 transition-colors"
                >
                  Kitchen Cabinets
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial"
                  className="text-gray-300 hover:text-palace-gold-400 transition-colors"
                >
                  Commercial Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/services/restoration"
                  className="text-gray-300 hover:text-palace-gold-400 transition-colors"
                >
                  Restoration
                </Link>
              </li>
              <li>
                <Link
                  href="/services/consultation"
                  className="text-gray-300 hover:text-palace-gold-400 transition-colors"
                >
                  Design Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-palace-gold-400" />
                <span className="text-gray-300">+251 911018883</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-palace-gold-400" />
                <span className="text-gray-300">info@palacewoodwork.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-palace-gold-400" />
                <span className="text-gray-300">
                  22 signal, Dema hope building 2nd floor Jackros EBM building,
                  1 st floor
                </span>
              </div>
            </div>

            <h4 className="text-md font-semibold mb-3">Newsletter</h4>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-palace-gold-500"
              />
              <Button className="bg-palace-gold-500 hover:bg-palace-gold-600 text-black">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Palace Woodwork. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-palace-gold-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-palace-gold-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-palace-gold-400 text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
