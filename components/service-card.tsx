'use client';

import { useScrollAnimation } from './use-scroll-animation';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-700 p-6 border border-gray-100 group transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-[#179BAE]/15 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#179BAE]/25 transition-all duration-300 group-hover:scale-110">
          {icon ? (
            <span className="text-2xl">{icon}</span>
          ) : (
            <svg className="w-8 h-8 text-[#179BAE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          )}
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#179BAE] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
        
        {/* Learn More Button */}
        <button className="mt-4 text-[#179BAE] hover:text-[#138A9B] font-medium text-sm transition-all duration-300 hover:scale-105">
          Learn More →
        </button>
      </div>
    </div>
  );
}
