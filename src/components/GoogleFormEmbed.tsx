
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ScrollReveal from '@/components/ScrollReveal';

interface GoogleFormEmbedProps {
  className?: string;
}

const GoogleFormEmbed: React.FC<GoogleFormEmbedProps> = ({ className }) => {
  return (
    <ScrollReveal animation="fade" className={className}>
      <Card className="bg-beige-light/50 backdrop-blur-sm border-taupe/20 overflow-hidden">
        <CardContent className="p-6 md:p-8">
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-charcoal/80 font-cormorant text-xl leading-relaxed">
              We're currently at project capacity, but we'd love to hear from you. Please fill out the form below and we'll be in touch soon.
            </p>
          </div>
          
          <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden bg-white/50">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSe93GNXiHqzD95VsdZko7MznwRux1M8S3M8pI0XfQ1B3RF5dQ/viewform?embedded=true"
              className="absolute inset-0 w-full h-full border-0"
              title="Interested in working with us?"
            />
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
};

export default GoogleFormEmbed;
