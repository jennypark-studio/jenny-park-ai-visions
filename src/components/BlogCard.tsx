
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageSrc: string;
  date: string;
  readTime: string;
  categories: string[];
  slug: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  imageSrc,
  date,
  readTime,
  categories,
  slug,
}) => {
  return (
    <Card className="border border-gray-100 overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md">
      <Link to={`/blog/${slug}`} className="block aspect-[16/9] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </Link>
      <CardHeader className="pt-5 pb-2">
        <div className="flex flex-wrap gap-2 mb-2">
          {categories.map((category, index) => (
            <Badge key={index} variant="outline" className="bg-beige-light hover:bg-beige text-gray-700">
              {category}
            </Badge>
          ))}
        </div>
        <Link to={`/blog/${slug}`}>
          <CardTitle className="text-xl font-playfair hover:text-gray-700 transition-colors">
            {title}
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="pb-2 flex-1">
        <CardDescription className="text-gray-600">
          {excerpt}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-2 text-sm text-gray-500">
        <span>{date}</span>
        <span className="mx-2">•</span>
        <span>{readTime}</span>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
