import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToForm = () => {
    const form = document.getElementById("contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact#contact-form";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-playfair font-medium">
          Flowmise & Jenny Park
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            Services
          </Link>
          {/* <Link to="/blog" className="text-gray-800 hover:text-gray-600 transition-colors">
            Insights
          </Link> */}
          <Link
            to="/contact"
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            Contact
          </Link>
          <Button
            variant="outline"
            className="border border-gray-300"
            onClick={scrollToForm}
          >
            Interested in working with us?
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            <Link
              to="/"
              className="text-gray-800 py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-800 py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-gray-800 py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Insights
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              variant="outline"
              className="border w-full border-gray-300"
              onClick={() => {
                scrollToForm();
                setIsMobileMenuOpen(false);
              }}
            >
              Interested in working with us?
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
