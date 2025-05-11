"use client";

import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow flex items-center justify-center bg-light py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-navy to-teal p-8 text-white text-center">
              <h1 className="text-7xl font-bold mb-4">404</h1>
              <p className="text-2xl font-medium">Page Not Found</p>
            </div>

            <div className="p-8">
              <div className="mb-8 text-center">
                <p className="text-lg text-gray-700 mb-4">
                  Oops! We couldn't find the page you're looking for.
                </p>
                <p className="text-gray-600">
                  The page may have been moved, deleted, or perhaps you entered
                  an incorrect URL.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button
                  asChild
                  className="bg-navy hover:bg-navy/90 flex items-center gap-2"
                >
                  <Link to="/">
                    <Home className="h-4 w-4" />
                    Back to Home
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-teal text-teal hover:bg-teal/10 flex items-center gap-2"
                >
                  <Link to="/contact">
                    <Search className="h-4 w-4" />
                    Search Our Site
                  </Link>
                </Button>
              </div>

              <div className="text-center text-gray-500 text-sm">
                <p>
                  Need assistance?{" "}
                  <a
                    href="tel:+18889701698"
                    className="text-teal hover:underline"
                  >
                    Call us at +1 (888) 970-1698
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-navy"
                >
                  <Link to="/" className="flex items-center gap-1">
                    <ArrowLeft className="h-4 w-4" />
                    Return to previous page
                  </Link>
                </Button>

                <div className="text-sm text-gray-500">Error Code: 404</div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-xl font-bold text-navy mb-4">
              Popular Destinations
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="text-teal hover:underline">
                Home
              </Link>
              <Link to="/about" className="text-teal hover:underline">
                About Us
              </Link>
              <Link to="/contact" className="text-teal hover:underline">
                Contact Us
              </Link>
              <Link to="/privacy" className="text-teal hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-teal hover:underline">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
