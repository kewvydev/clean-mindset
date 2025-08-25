'use client';

import { useScrollAnimation } from './use-scroll-animation';

interface TestimonialCardProps {
  name: string;
  quote: string;
  rating?: number;
  location?: string;
}

export default function TestimonialCard({ name, quote, rating = 5, location }: TestimonialCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-700 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
    >
      {/* Stars */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-700 mb-4 italic leading-relaxed">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-[#179BAE]/15 rounded-full flex items-center justify-center mr-3">
          <span className="text-[#179BAE] font-semibold text-sm">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <div className="font-semibold text-gray-800">{name}</div>
          {location && (
            <div className="text-sm text-gray-500">{location}</div>
          )}
        </div>
      </div>
    </div>
  );
}
