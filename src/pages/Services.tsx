
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import GoogleFormEmbed from '@/components/GoogleFormEmbed';
import { FileText, Users, Workflow, MessageSquare } from 'lucide-react';

const Services = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair leading-tight mb-6">
                Services
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Comprehensive digital solutions designed to transform your business operations and drive growth.
              </p>
              <Button 
                onClick={scrollToForm} 
                className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg"
              >
                Interested in working with us?
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Website Design Service */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Website Design" 
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-3xl font-playfair mb-4">Free Website Design & Mockup</h2>
                <p className="text-gray-600 mb-6">
                  Get started with a complimentary website design and mockup. We'll create a vision for your digital presence that aligns perfectly with your brand and goals.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <FileText className="w-4 h-4" />
                    </div>
                    <p className="text-gray-600">Custom design tailored to your brand</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <FileText className="w-4 h-4" />
                    </div>
                    <p className="text-gray-600">Responsive layouts for all devices</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <FileText className="w-4 h-4" />
                    </div>
                    <p className="text-gray-600">Interactive mockups for visualization</p>
                  </div>
                </div>
                <Button onClick={scrollToForm} className="bg-black text-white hover:bg-gray-800">
                  Get your free design
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Lead Generation System */}
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Lead Generation" 
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-playfair mb-4">Lead Generation System</h2>
                <p className="text-gray-600 mb-6">
                  Turn visitors into valuable leads with our comprehensive lead generation system, designed to capture and nurture potential clients.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <Users className="w-4 h-4" />
                    </div>
                    <p className="text-gray-600">Advanced lead capture forms</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <Users className="w-4 h-4" />
                    </div>
                    <p className="text-gray-600">Automated lead scoring</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <Users className="w-4 h-4" />
                    </div>
                    <p className="text-gray-600">Lead nurturing campaigns</p>
                  </div>
                </div>
                <Button onClick={scrollToForm} className="bg-black text-white hover:bg-gray-800">
                  Learn more
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Customer Support System */}
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Customer Support" 
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-3xl font-playfair mb-4">Customer Support System</h2>
                <p className="text-gray-600 mb-6">
                  Enhance your customer experience with our integrated support system, designed to provide timely and effective assistance.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <p className="text-gray-600">24/7 chat support integration</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <p className="text-gray-600">Ticket management system</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <p className="text-gray-600">Customer feedback analytics</p>
                  </div>
                </div>
                <Button onClick={scrollToForm} className="bg-black text-white hover:bg-gray-800">
                  Learn more
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Workflow Automation */}
          <ScrollReveal delay={300}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Workflow Automation" 
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-playfair mb-4">Workflow Automation</h2>
                <p className="text-gray-600 mb-6">
                  Streamline your business processes with custom automation solutions that save time and reduce errors.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <p className="text-gray-600">Process automation</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <p className="text-gray-600">Task scheduling</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <p className="text-gray-600">Integration with existing tools</p>
                  </div>
                </div>
                <Button onClick={scrollToForm} className="bg-black text-white hover:bg-gray-800">
                  Learn more
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 md:py-24 bg-beige-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <GoogleFormEmbed />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
