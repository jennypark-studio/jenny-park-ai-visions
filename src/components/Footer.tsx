
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Footer: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for your message. We'll get back to you shortly.",
    });
  };

  return (
    <footer className="bg-beige-light pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Contact Form and Calendly Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-3xl font-playfair">Get in touch</h3>
            <p className="text-gray-600 mb-6">
              Have a question or want to work together? Send me a message.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your name"
                  className="bg-transparent border-b border-gray-300 rounded-none focus:border-gray-600 px-0"
                />
              </div>
              <div>
                <Input
                  placeholder="Your email"
                  type="email"
                  className="bg-transparent border-b border-gray-300 rounded-none focus:border-gray-600 px-0"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message"
                  className="bg-transparent border-b border-gray-300 rounded-none focus:border-gray-600 px-0 min-h-[100px]"
                />
              </div>
              <Button type="submit" className="bg-black text-white hover:bg-gray-800">
                Send message
              </Button>
            </form>
          </div>

          {/* Calendly Integration */}
          <div className="space-y-6">
            <h3 className="text-3xl font-playfair">Book a discovery call</h3>
            <p className="text-gray-600 mb-6">
              Schedule a 30-minute discovery call to discuss how I can help you integrate AI into your business.
            </p>
            <div className="border border-gray-200 p-6 bg-white rounded-md shadow-sm">
              <p className="mb-4 text-gray-800">Select a convenient time for a 30-minute consultation:</p>
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                View available times
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-playfair">Jenny Park</p>
              <p className="text-sm text-gray-500">AI Specialist & Consultant</p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-8">
            © {new Date().getFullYear()} Jenny Park. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
