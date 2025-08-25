'use client';

import { useScrollAnimation } from './use-scroll-animation';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon?: string;
}

export default function PricingCard({ title, price, description, features, popular = false, icon }: PricingCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`relative bg-white rounded-xl shadow-lg border-2 p-6 transition-all duration-700 transform hover:scale-105 ${
        popular ? 'border-[#179BAE] scale-105' : 'border-gray-200'
      } hover:shadow-xl ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#179BAE] text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        {icon && (
          <div className="w-16 h-16 bg-[#179BAE]\/15 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">{icon}</span>
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      {/* Price */}
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-[#179BAE]">{price}</div>
        <p className="text-gray-500 text-sm">per service</p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-[#179BAE] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-2.827 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
        popular
          ? 'bg-[#179BAE] text-white hover:bg-[#138A9B]'
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}>
        {popular ? 'Book Now' : 'Select Plan'}
      </button>
    </div>
  );
}
