'use client';

import { useScrollAnimation } from './use-scroll-animation';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  const values = [
    {
      icon: "🧹",
      title: "Professionalism",
      description: "Trained and certified team to provide quality services"
    },
    {
      icon: "⏰",
      title: "Punctuality",
      description: "We arrive on time and stick to agreed schedules"
    },
    {
      icon: "🌟",
      title: "Excellence",
      description: "Committed to total customer satisfaction"
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description: "We use eco-friendly products and responsible methods"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Clean Mindset?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're dedicated to providing exceptional cleaning services that transform your space and improve your wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div 
            ref={ref}
            className={`transition-all duration-1000 transform ${
              isVisible 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-10 opacity-0'
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Our Commitment to You
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We are a professional cleaning company committed to transforming disorganized spaces 
              into clean, organized, and healthy environments. With years of experience 
              in the industry, we have perfected our methods to offer exceptional services.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is simple: to make cleaning a positive and transformative experience, 
              not only for your space but also for your mental wellbeing.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-[#179BAE]">500+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-[#179BAE]">5+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Clean living room" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold">Professional Results</h3>
                <p className="text-sm opacity-90">Experience the difference with our expert cleaning team</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:scale-105 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3">{value.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info with Images */}
        <div className="mt-16 bg-gray-50 p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Cleaning Process</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#179BAE] font-bold mr-2">1.</span>
                  <span>Initial assessment of your space and cleaning needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#179BAE] font-bold mr-2">2.</span>
                  <span>Customized cleaning plan tailored to your requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#179BAE] font-bold mr-2">3.</span>
                  <span>Professional cleaning with high-quality products and equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#179BAE] font-bold mr-2">4.</span>
                  <span>Final inspection to ensure everything meets our high standards</span>
                </li>
              </ul>
              <a href="#contact" className="mt-4 text-[#179BAE] font-semibold hover:text-[#138A9B] inline-flex items-center">
                Contact us to learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" 
                alt="Professional cleaning equipment" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative h-64 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1068&q=80" 
                alt="Satisfaction guarantee" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Guarantee</h3>
              <p className="text-gray-600 mb-4">
                We stand behind our work with a 100% satisfaction guarantee. If you're not completely 
                satisfied with our service, we'll come back and re-clean any areas at no additional cost.
              </p>
              <p className="text-gray-600">
                Our team is trained to deliver exceptional results every time, using eco-friendly products
                and state-of-the-art equipment to ensure your home is not just clean, but healthy too.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
