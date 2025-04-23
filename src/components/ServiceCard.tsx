
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-md border border-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blush-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardHeader className="pb-3">
        <div className="text-gray-800 mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-beige-light">
          {icon}
        </div>
        <CardTitle className="text-xl font-playfair font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-gray-600 mb-6">{description}</CardDescription>
        <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-gray-900 group">
          <span>Learn more</span>
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
