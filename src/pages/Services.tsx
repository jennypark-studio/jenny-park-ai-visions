
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';

const Services = () => {
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
                Comprehensive AI integration services designed to transform your business operations and drive growth.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Service 1 */}
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="AI Consulting" 
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-3xl font-playfair mb-4">AI Consulting for Business Strategy</h2>
                <p className="text-gray-600 mb-6">
                  Strategic implementation of AI solutions tailored to your specific business needs, enhancing operations and driving growth. I work closely with your team to identify key areas where AI can make the most impact.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <p className="text-gray-600">Custom AI integration strategy tailored to your business goals</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <p className="text-gray-600">Process automation and workflow optimization</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <p className="text-gray-600">Data analysis and AI-driven decision making frameworks</p>
                  </div>
                </div>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Learn more
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Service 2 */}
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Keynote Speaking" 
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-playfair mb-4">Keynote Speaking & Thought Leadership</h2>
                <p className="text-gray-600 mb-6">
                  Engaging presentations on AI trends, implementation strategies, and future outlooks tailored for events, conferences, and corporate workshops. I bring complex AI concepts to life in accessible, actionable ways.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <p className="text-gray-600">Customized keynote presentations for your audience</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <p className="text-gray-600">Interactive workshops and training sessions</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <p className="text-gray-600">Future-focused insights on AI technology trends</p>
                  </div>
                </div>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Learn more
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Service 3 */}
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Content Strategy" 
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-3xl font-playfair mb-4">Content Strategy for AI-Driven Brands</h2>
                <p className="text-gray-600 mb-6">
                  Development of content strategies that leverage AI tools to create engaging, personalized, and scalable content that resonates with your audience. I help you build a content ecosystem that drives results.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <p className="text-gray-600">AI-powered content creation workflows</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <p className="text-gray-600">Personalization strategies for enhanced engagement</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 text-black mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    </div>
                    <p className="text-gray-600">Performance analytics and content optimization</p>
                  </div>
                </div>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Learn more
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-beige-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-playfair mb-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Schedule a discovery call to discuss your specific needs and how I can help you leverage AI for business growth.
              </p>
              <Button className="px-8 py-6 bg-black text-white text-lg hover:bg-gray-800">
                Book Your Discovery Call
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
