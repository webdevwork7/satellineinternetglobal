"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleCallNow = () => {
    window.location.href = "tel:+18889701698";
  };

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-navy">
                Satellite Internet<span className="text-teal"> Global</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link
                to="/"
                className={`text-base font-medium ${
                  isActive("/") ? "text-teal" : "text-navy hover:text-teal"
                } transition-colors`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-base font-medium ${
                  isActive("/about") ? "text-teal" : "text-navy hover:text-teal"
                } transition-colors`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`text-base font-medium ${
                  isActive("/contact")
                    ? "text-teal"
                    : "text-navy hover:text-teal"
                } transition-colors`}
              >
                Contact Us
              </Link>
            </div>

            <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="relative inline-flex"
>
  <button
    onClick={handleCallNow}
    className="relative z-10 inline-flex items-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold rounded-full text-white bg-orange hover:bg-orange/90 shadow-lg transition-all duration-300"
  >
    <PhoneCall className="h-5 w-5 animate-pulse" />
    <span>
      Call Now: <span className="font-bold tracking-wide ml-1">+1 (888) 970-1698</span>
    </span>
  </button>

  {/* Glowing Orange Background */}
  <motion.div
    initial={{ opacity: 0.4, scale: 1 }}
    animate={{ opacity: [0.4, 0.1, 0.4], scale: [1, 1.07, 1] }}
    transition={{
      duration: 2.4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute inset-0 z-0 rounded-full bg-orange blur-xl"
  />
</motion.div>


          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-navy" />
              ) : (
                <Menu className="h-6 w-6 text-navy" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-3 animate-slide-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-base font-medium ${
                  isActive("/") ? "text-teal" : "text-navy"
                } hover:text-teal transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-base font-medium ${
                  isActive("/about") ? "text-teal" : "text-navy"
                } hover:text-teal transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className={`text-base font-medium ${
                  isActive("/contact") ? "text-teal" : "text-navy"
                } hover:text-teal transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>

              <Button
                onClick={handleCallNow}
                className="bg-orange hover:bg-orange/90 text-white flex items-center gap-2 w-full justify-center mt-2"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
