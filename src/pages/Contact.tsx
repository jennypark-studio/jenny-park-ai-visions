
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import GoogleFormEmbed from '@/components/GoogleFormEmbed';

const Contact = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair leading-tight mb-6">
                Let's Work Together
              </h1>
              <p className="text-lg text-gray-600">
                Transform your space with our expert design and remodeling services.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Google Form Section */}
      <section className="py-12 md:py-20 bg-ivory">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <GoogleFormEmbed />
          </div>
        </div>
      </section>

      {/* Optional Contact Information */}
      <section className="py-16 md:py-24 bg-blush-light/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-playfair mb-4">Other Ways to Connect</h2>
              <p className="text-lg text-gray-600 mb-8">
                For press inquiries or urgent matters, please reach out directly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                <div className="space-y-2">
                  <h3 className="font-cormorant text-xl">Email</h3>
                  <p className="text-gray-600">hello@studio.com</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-cormorant text-xl">Location</h3>
                  <p className="text-gray-600">San Francisco, California</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
