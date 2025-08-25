'use client';

import { useScrollAnimation } from './use-scroll-animation';
import PricingCard from './pricing-card';

export default function PricingSection() {
  const { ref, isVisible } = useScrollAnimation();

  const pricingPlans = [
    {
      title: "Basic Cleaning",
      price: "$89",
      description: "Ideal for regular maintenance",
      features: [
        "Surface cleaning",
        "Vacuuming and mopping",
        "Bathroom cleaning",
        "Basic kitchen cleaning",
        "Up to 2 hours of service"
      ],
      icon: "🧹"
    },
    {
      title: "Deep Cleaning",
      price: "$149",
      description: "Complete and detailed cleaning",
      features: [
        "All Basic Cleaning services",
        "Appliance cleaning",
        "Window cleaning",
        "Cabinet cleaning",
        "Up to 4 hours of service",
        "Premium products included"
      ],
      popular: true,
      icon: "✨"
    },
    {
      title: "Premium Cleaning",
      price: "$249",
      description: "Complete and customized service",
      features: [
        "All Deep Cleaning services",
        "Space organization",
        "Carpet cleaning",
        "Anti-dust mite treatment",
        "Up to 6 hours of service",
        "Satisfaction guarantee"
      ],
      icon: "👑"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Transparent Plans and Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer different options to adapt to your needs. 
            All our prices include professional cleaning products and specialized equipment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`transition-all duration-700 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <PricingCard
                title={plan.title}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
                icon={plan.icon}
              />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className={`bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto transition-all duration-1000 transform ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need a Customized Service?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to get a personalized quote according to your specific needs.
            </p>
            <a
              href="#contact"
              className="bg-[#179BAE] text-white px-8 py-3 rounded-lg hover:bg-[#138A9B] transition-all duration-300 font-semibold inline-block hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
