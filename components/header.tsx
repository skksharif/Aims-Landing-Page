"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/placeholder.svg?height=50&width=180"
            alt="AIMS Hospitals Logo"
            width={180}
            height={50}
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-medium text-gray-800 hover:text-primary-blue transition-colors">
            Home
          </Link>
          <Link href="/about" className="font-medium text-gray-800 hover:text-primary-blue transition-colors">
            About Us
          </Link>
          <Link href="/services" className="font-medium text-gray-800 hover:text-primary-blue transition-colors">
            Services
          </Link>
          <Link href="/statistics" className="font-medium text-gray-800 hover:text-primary-blue transition-colors">
            Statistics
          </Link>
          <Link href="/team" className="font-medium text-gray-800 hover:text-primary-blue transition-colors">
            Our Team
          </Link>
          <Link href="/contact" className="font-medium text-gray-800 hover:text-primary-blue transition-colors">
            Contact
          </Link>
          <Link href="/contact#appointment" className="btn-primary">
            Book Appointment
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="font-medium text-gray-800 hover:text-primary-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-medium text-gray-800 hover:text-primary-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="font-medium text-gray-800 hover:text-primary-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/statistics"
              className="font-medium text-gray-800 hover:text-primary-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Statistics
            </Link>
            <Link
              href="/team"
              className="font-medium text-gray-800 hover:text-primary-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link
              href="/contact"
              className="font-medium text-gray-800 hover:text-primary-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/contact#appointment" className="btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

