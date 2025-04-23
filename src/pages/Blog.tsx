
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "How AI is Transforming Content Creation in 2025",
    excerpt: "Discover the latest AI tools and strategies that are revolutionizing how businesses create and distribute content.",
    imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "April 15, 2025",
    readTime: "5 min read",
    categories: ["AI Tools", "Content Strategy"],
    slug: "ai-transforming-content-creation"
  },
  {
    id: 2,
    title: "Implementing AI in Small Businesses: A Practical Guide",
    excerpt: "Step-by-step approaches to integrating AI solutions in small businesses without breaking the bank.",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "April 8, 2025",
    readTime: "8 min read",
    categories: ["Small Business", "Implementation"],
    slug: "ai-small-business-guide"
  },
  {
    id: 3,
    title: "The Future of Customer Experience with AI",
    excerpt: "How artificial intelligence is reshaping customer interactions and creating more personalized experiences.",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "April 1, 2025",
    readTime: "6 min read",
    categories: ["Customer Experience", "Future Trends"],
    slug: "future-customer-experience-ai"
  },
  {
    id: 4,
    title: "AI Ethics: Balancing Innovation and Responsibility",
    excerpt: "Exploring the ethical considerations businesses must address when implementing AI solutions.",
    imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "March 25, 2025",
    readTime: "7 min read",
    categories: ["AI Ethics", "Business Responsibility"],
    slug: "ai-ethics-innovation-responsibility"
  },
  {
    id: 5,
    title: "5 AI Tools Every Content Creator Should Be Using",
    excerpt: "A curated list of the most effective AI tools that are transforming the content creation landscape.",
    imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "March 18, 2025",
    readTime: "5 min read",
    categories: ["AI Tools", "Content Creation"],
    slug: "ai-tools-content-creators"
  },
  {
    id: 6,
    title: "Building an AI Strategy for Long-Term Business Growth",
    excerpt: "Strategic approaches to implementing AI that support sustained business growth and innovation.",
    imageSrc: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    date: "March 10, 2025",
    readTime: "9 min read",
    categories: ["Business Strategy", "Long-term Growth"],
    slug: "ai-strategy-business-growth"
  }
];

// Extract all unique categories
const allCategories = Array.from(
  new Set(blogPosts.flatMap(post => post.categories))
);

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory ? post.categories.includes(selectedCategory) : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen w-full">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair leading-tight mb-6">
                AI Insights & Strategy
              </h1>
              <p className="text-lg text-gray-600">
                Thoughts, strategies, and practical advice on integrating AI into your business.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="w-full md:w-1/3">
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-ghost"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={!selectedCategory ? "default" : "outline"} 
                className={`cursor-pointer ${!selectedCategory ? 'bg-black' : ''}`}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Badge>
              {allCategories.map(category => (
                <Badge 
                  key={category} 
                  variant={selectedCategory === category ? "default" : "outline"} 
                  className={`cursor-pointer ${selectedCategory === category ? 'bg-black' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={100 * index}>
                  <BlogCard
                    title={post.title}
                    excerpt={post.excerpt}
                    imageSrc={post.imageSrc}
                    date={post.date}
                    readTime={post.readTime}
                    categories={post.categories}
                    slug={post.slug}
                  />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-playfair mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-blush-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-playfair mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-8">
                Subscribe to receive the latest insights and strategies on AI integration directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="input-ghost flex-grow"
                />
                <Button className="bg-black text-white hover:bg-gray-800">
                  Subscribe
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
