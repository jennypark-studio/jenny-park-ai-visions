
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import ScrollReveal from '@/components/ScrollReveal';
import BlogCard from '@/components/BlogCard';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "You've been subscribed to the newsletter.",
    });
  };

  return (
    <div className="min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <ScrollReveal delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair leading-tight mb-6">
                  Bringing AI to Life for Entrepreneurs and Creators
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-xl">
                  Helping visionary entrepreneurs and creators integrate AI to transform their businesses and reach new heights.
                </p>
                <Button className="px-8 py-6 bg-black text-white text-lg hover:bg-gray-800">
                  Book a Discovery Call
                </Button>
              </ScrollReveal>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 border-4 border-white shadow-lg animate-fade-in">
                <img
                  src="/lovable-uploads/38963983-9707-456f-b6c8-f8d2d4f95272.png"
                  alt="Jenny Park - AI Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-beige-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-playfair mb-4">How I Can Help Your Business</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Strategic AI integration services tailored to enhance your business operations and growth.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ScrollReveal delay={100}>
              <ServiceCard
                title="AI Consulting for Business Strategy"
                description="Strategic implementation of AI solutions tailored to your specific business needs, enhancing operations and driving growth."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb">
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
                    <path d="M9 18h6"/>
                    <path d="M10 22h4"/>
                  </svg>
                }
              />
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <ServiceCard
                title="Keynote Speaking & Thought Leadership"
                description="Engaging presentations on AI trends, implementation strategies, and future outlooks tailored for events, conferences, and corporate workshops."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                }
              />
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <ServiceCard
                title="Content Strategy for AI-Driven Brands"
                description="Development of content strategies that leverage AI tools to create engaging, personalized, and scalable content that resonates with your audience."
                icon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                }
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-playfair mb-4">Client Success Stories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear directly from businesses that have transformed their operations and growth with our AI integration strategies.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ScrollReveal delay={100}>
              <TestimonialCard 
                quote="Jenny's strategic approach to AI integration completely transformed our content creation process. Our productivity increased by 200% while maintaining the quality our audience expects."
                name="Sarah Johnson"
                title="Marketing Director, TechVision"
                avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <TestimonialCard 
                quote="Working with Jenny was an eye-opener. She helped us implement AI tools that streamlined our customer service operations and increased satisfaction rates by 40%."
                name="Michael Chen"
                title="CEO, InnovateX"
                avatarSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <TestimonialCard 
                quote="Jenny's keynote at our annual conference was the highlight of the event. Her insights on the future of AI in creative industries were both inspiring and practical."
                name="Lisa Rodriguez"
                title="Event Director, CreativeTech Summit"
                avatarSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-blush-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-playfair mb-4">Unlock AI for Your Business</h2>
              <p className="text-gray-600 mb-8">
                Subscribe to receive weekly tips, insights, and strategies on integrating AI into your business operations.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  className="input-ghost flex-grow"
                />
                <Button type="submit" className="bg-black text-white hover:bg-gray-800">
                  Subscribe
                </Button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Blog/Insights Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair mb-2">Latest Insights</h2>
                <p className="text-gray-600">
                  Thoughts and strategies on AI integration for modern businesses.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Button variant="outline" className="mt-4 md:mt-0">
                View all articles
              </Button>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ScrollReveal delay={100}>
              <BlogCard
                title="How AI is Transforming Content Creation in 2025"
                excerpt="Discover the latest AI tools and strategies that are revolutionizing how businesses create and distribute content."
                imageSrc="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                date="April 15, 2025"
                readTime="5 min read"
                categories={["AI Tools", "Content Strategy"]}
                slug="ai-transforming-content-creation"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <BlogCard
                title="Implementing AI in Small Businesses: A Practical Guide"
                excerpt="Step-by-step approaches to integrating AI solutions in small businesses without breaking the bank."
                imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                date="April 8, 2025"
                readTime="8 min read"
                categories={["Small Business", "Implementation"]}
                slug="ai-small-business-guide"
              />
            </ScrollReveal>
            
            <ScrollReveal delay={300}>
              <BlogCard
                title="The Future of Customer Experience with AI"
                excerpt="How artificial intelligence is reshaping customer interactions and creating more personalized experiences."
                imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                date="April 1, 2025"
                readTime="6 min read"
                categories={["Customer Experience", "Future Trends"]}
                slug="future-customer-experience-ai"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
