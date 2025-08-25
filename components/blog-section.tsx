'use client';

import { useScrollAnimation } from './use-scroll-animation';

export default function BlogSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  const blogPosts = [
    {
      title: "10 Quick Cleaning Tips for Busy Homeowners",
      excerpt: "Learn how to keep your home spotless even with a packed schedule. These time-saving techniques will transform your cleaning routine.",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "June 15, 2024",
      category: "Cleaning Tips"
    },
    {
      title: "The Ultimate Guide to Natural Cleaning Products",
      excerpt: "Discover eco-friendly alternatives to harsh chemical cleaners that are safe for your family and the environment.",
      image: "https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      date: "May 28, 2024",
      category: "Eco-Friendly"
    },
    {
      title: "How to Properly Clean and Disinfect Your Kitchen",
      excerpt: "Kitchen hygiene is crucial for your family's health. Follow our professional guide to maintain a spotless cooking space.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
      date: "April 10, 2024",
      category: "Kitchen Cleaning"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Cleaning Tips & Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover professional cleaning advice, tips, and tricks from our experts
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="h-48 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 bg-[#179BAE] text-white text-xs font-bold px-3 py-1">
                  {post.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-[#179BAE] transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href="#" 
                  className="text-[#179BAE] font-medium hover:text-[#138A9B] inline-flex items-center"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div 
          className={`bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto transition-all duration-1000 transform ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600">
              Get the latest cleaning tips, exclusive offers, and home maintenance advice delivered to your inbox
            </p>
          </div>
          
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#179BAE] focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="bg-[#179BAE] text-white px-6 py-3 rounded-lg hover:bg-[#138A9B] transition-all duration-300 font-medium hover:scale-105"
              >
                Subscribe
              </button>
            </div>
            <div className="mt-3 text-sm text-gray-500 text-center">
              We respect your privacy. Unsubscribe at any time.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
