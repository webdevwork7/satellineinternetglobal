"use client";

import type React from "react";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-navy to-teal/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-white/90">
                We're here to help you stay connected. Reach out to our team for
                assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-8">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our satellite internet services? Our team
                  of connectivity experts is ready to assist you with choosing
                  the right plan, technical support, or any other inquiries you
                  might have.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-teal/10 rounded-full p-3 mr-4">
                      <Phone className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">Phone</h3>
                      <p className="text-gray-600">
                        <a
                          href="tel:+18889701698"
                          className="hover:text-teal transition-colors"
                        >
                          +1 (888) 970-1698
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-teal/10 rounded-full p-3 mr-4">
                      <Mail className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">Email</h3>
                      <p className="text-gray-600">
                        <a
                          href="mailto:support@satelliteinternetglobal.com"
                          className="hover:text-teal transition-colors"
                        >
                          support@satelliteinternetglobal.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-teal/10 rounded-full p-3 mr-4">
                      <MapPin className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">Address</h3>
                      <p className="text-gray-600">
                        1234 Digital Ave, Suite 100
                        <br />
                        Tech City, TX 75001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-teal/10 rounded-full p-3 mr-4">
                      <Clock className="h-6 w-6 text-teal" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">
                        Hours of Operation
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 8:00 PM EST
                        <br />
                        Saturday - Sunday: 9:00 AM - 6:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-light p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-navy mb-6">
                    Send Us a Message
                  </h2>

                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
                      <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
                      <p>
                        Thank you for contacting us. One of our representatives
                        will get back to you shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Your Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(123) 456-7890"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Message
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="How can we help you?"
                            rows={5}
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-teal hover:bg-teal/90 flex items-center justify-center gap-2"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">
              Our Location
            </h2>
            <div className="bg-white p-2 rounded-lg shadow-md">
              <div className="aspect-video w-full bg-gray-200 rounded">
                <img
                  src="/tech-city-map-pin.png"
                  alt="satelliteinternetglobal office location map"
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-navy to-teal/90 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our connectivity experts are standing by to help you find the
              perfect satellite internet solution.
            </p>
            <a
              href="tel:+18889701698"
              className="inline-flex items-center bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +1 (888) 970-1698
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
