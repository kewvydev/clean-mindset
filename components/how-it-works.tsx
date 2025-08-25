'use client';

import { useScrollAnimation } from './use-scroll-animation';

export default function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();
  
  const steps = [
    {
      title: "Request a Quote",
      description: "Fill out our simple form with your cleaning needs and preferences to get a personalized quote.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      icon: "📝"
    },
    {
      title: "Schedule Your Service",
      description: "Choose a convenient date and time for your cleaning service. We offer flexible scheduling options.",
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1168&q=80",
      icon: "📅"
    },
    {
      title: "Enjoy a Clean Home",
      description: "Relax while our professional team transforms your space into a clean, fresh environment.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
      icon: "✨"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting your home or office professionally cleaned is easy with our simple 3-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`transition-all duration-1000 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="h-48 relative">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-[#179BAE] text-white flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">{step.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 flex-grow">{step.description}</p>
                  
                  {index === 0 && (
                    <a 
                      href="#contact" 
                      className="mt-4 inline-flex items-center text-[#179BAE] font-medium hover:text-[#138A9B]"
                    >
                      Get your quote now
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`mt-16 text-center transition-all duration-1000 transform ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a 
            href="#contact" 
            className="bg-[#179BAE] text-white px-8 py-3 rounded-lg hover:bg-[#138A9B] transition-all duration-300 font-semibold inline-block hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
