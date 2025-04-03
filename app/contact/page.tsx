"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In a real application, you would send the form data to your backend
      console.log("Form submitted:", formData)

      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      setSubmitError("There was an error submitting the form. Please try again.")
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            We're here to help with any questions you may have about our services or to schedule an appointment.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                If you have any questions about our services or would like to schedule an appointment, please fill out
                the form or contact us directly using the information below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-primary-blue mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-gray-700">
                      29-23-31/1, Venkataratnam Street, Dornakal Road, Suryaraopet, Vijayawada – 520002
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-primary-blue mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-700">0866-2437968/69, 9305669999</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-primary-blue mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:appointment@aimshospitalsap.com" className="hover:text-primary-blue">
                        appointment@aimshospitalsap.com
                      </a>
                      <br />
                      <a href="mailto:contact@aimshospitalsap.com" className="hover:text-primary-blue">
                        contact@aimshospitalsap.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-bold text-lg mb-4">Our Locations</h3>
                <div className="aspect-video bg-gray-200 rounded-lg">
                  {/* In a real implementation, this would be a Google Maps iframe */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    Google Maps Integration
                  </div>
                </div>
              </div>
            </div>

            <div id="appointment">
              <div className="card-neumorphic">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                    <p className="font-medium">Thank you for your message!</p>
                    <p>We have received your inquiry and will get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4">{submitError}</div>
                    )}

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send className="mr-2" size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

