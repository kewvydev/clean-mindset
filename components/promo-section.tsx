'use client';

import { useScrollAnimation } from './use-scroll-animation';
import { useStaggerAnimation } from './use-scroll-animation';

export default function PromoSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { ref: mindsetRef, isVisible: mindsetVisible } = useScrollAnimation();
  const { ref: benefitsRef, getIsVisible } = useStaggerAnimation();

  return (
    <section className="bg-white">
      {/* First Promo Section */}
      <div 
        ref={ref}
        className={`min-h-screen flex items-center py-24 transition-all duration-1000 transform ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Text Content */}
            <div className="order-2 md:order-1 md:col-span-7">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-12 leading-tight tracking-tight">
                Peace of Mind & a Clean Space at a single click right from anywhere you&apos;re at.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center bg-white border-2 border-gray-800 text-gray-800 px-6 py-3 rounded hover:bg-gray-100 transition-colors duration-300 text-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Now
                </a>
                <a 
                  href="tel:+15713500099" 
                  className="inline-flex items-center justify-center bg-[#179BAE] text-white px-6 py-3 rounded hover:bg-[#138A9B] transition-colors duration-300 text-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (571) 350 0099
                </a>
              </div>
            </div>
            
            {/* Image */}
            <div className="order-1 md:order-2 md:col-span-5">
              <img 
                src="/heropromo.webp" 
                alt="Mobile app and service van" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mindset Section */}
      <div 
        ref={mindsetRef}
        className={`min-h-screen flex items-center py-24 bg-gray-50 transition-all duration-1000 transform ${
          mindsetVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Badge */}
          <div className="text-center mb-8">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium uppercase tracking-wide">
              FOR EVERY ACTION THERE IS A REACTION
            </span>
          </div>
          
          {/* Main Title */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 max-w-2xl mx-auto">
              What having a clean home and workspace does to the mind...
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Remember that our surroundings and spaces are a reflection of what we have inside our mind, now you know what having a clean space means.
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            {/* Left Side - Phone Image */}
            <div className="flex justify-center">
              <div className="relative w-64 h-auto">
                <img 
                  src="/donotdisturb.webp" 
                  alt="Do Not Disturb App Screen" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            
            {/* Right Side - Benefits */}
            <div className="flex flex-col justify-center">
              <div ref={benefitsRef}>
                {/* Benefit 1 */}
                <div 
                  className={`mb-8 transition-all duration-700 transform ${
                    getIsVisible(0) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Real Life "Do not Disturb"
                  </h3>
                  <p className="text-gray-600">
                    Puts your mind in its own meditative state.
                  </p>
                </div>
                
                {/* Benefit 2 */}
                <div 
                  className={`mb-8 transition-all duration-700 transform ${
                    getIsVisible(1) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: '150ms' }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Real-time concentration
                  </h3>
                  <p className="text-gray-600">
                    A clean environment helps you focus on what truly matters.
                  </p>
                </div>
                
                {/* Benefit 3 */}
                <div 
                  className={`transition-all duration-700 transform ${
                    getIsVisible(2) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: '300ms' }}
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    "Believe you can and you're halfway there."
                  </h3>
                  <p className="text-gray-600">
                    A clean space creates the foundation for positive thinking and productivity.
                  </p>
                </div>
                
                {/* Learn More Button */}
                <div 
                  className={`mt-8 transition-all duration-700 transform ${
                    getIsVisible(3) ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: '450ms' }}
                >
                  <a 
                    href="#" 
                    className="inline-flex items-center justify-center bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors duration-300"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
