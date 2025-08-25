import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import AboutSection from "@/components/about-section";
import PricingSection from "@/components/pricing-section";
import ContactForm from "@/components/contact-form";
import HowItWorks from "@/components/how-it-works";
import BlogSection from "@/components/blog-section";
import PromoSection from "@/components/promo-section";
import FaqSection from "@/components/faq-section";

export default function Home() {
  const services = [
    { 
      title: "Deep Cleaning", 
      description: "Thorough cleaning of all spaces, including hard-to-reach areas and details that make a difference.",
      icon: "🧹"
    },
    { 
      title: "Move-In / Move-Out", 
      description: "Complete service before or after moving, ensuring your new home is spotless.",
      icon: "📦"
    },
    { 
      title: "Airbnb Cleaning", 
      description: "Fast and reliable service for hosts, maintaining high cleaning standards between guests.",
      icon: "🏠"
    },
    { 
      title: "Post-Construction", 
      description: "Professional removal of dust and construction debris, leaving your space ready to live in.",
      icon: "🏗️"
    },
    { 
      title: "Commercial Cleaning", 
      description: "Specialized services for offices, stores, and commercial spaces, maintaining a professional environment.",
      icon: "🏢"
    },
    { 
      title: "Carpet Cleaning", 
      description: "Professional treatment for carpets and upholstery, removing stubborn stains and odors.",
      icon: "🪑"
    }
  ];

  const testimonials = [
    { 
      name: "Mary Johnson", 
      quote: "Excellent service, my house has never been so clean! The team was very professional and respectful.",
      rating: 5,
      location: "Virginia Beach"
    },
    { 
      name: "John Smith", 
      quote: "They arrived exactly at the agreed time and exceeded my expectations. Highly recommended for any type of cleaning.",
      rating: 5,
      location: "Richmond"
    },
    { 
      name: "Laura Williams", 
      quote: "I hired their post-construction cleaning service and was impressed. Everything was spotless and ready for me to move in.",
      rating: 5,
      location: "Arlington"
    },
    { 
      name: "Carlos Martinez", 
      quote: "As an Airbnb host, I need reliable service. Clean Mindset has never failed me, my guests are always satisfied.",
      rating: 5,
      location: "Alexandria"
    },
    { 
      name: "Anna Miller", 
      quote: "The premium service was worth every penny. They didn't just clean, they organized my spaces in an amazing way.",
      rating: 5,
      location: "Fairfax"
    },
    { 
      name: "Robert Taylor", 
      quote: "Very professional and punctual team. The move-in cleaning was perfect, my new house looked like new.",
      rating: 5,
      location: "Norfolk"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")' }}>
          {/* Gradient + dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl text-white">
              <p className="inline-block text-xs md:text-sm tracking-wider uppercase bg-white/10 backdrop-blur rounded-full px-3 py-1 mb-5 border border-white/20">
                Trusted home & office cleaning in Virginia
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                From Messy to Mindful
                <span className="block text-[#179BAE]">In just a few clicks</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-white/90 max-w-2xl">
                Virginia’s fastest‑growing cleaning company. Professional teams, eco‑friendly products, and flexible scheduling that brings peace of mind to your day.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#179BAE] hover:bg-[#138A9B] text-white font-semibold shadow-lg shadow-[#179BAE]/20">
                  Get a Free Quote
                </a>
                <a href="tel:+15713500099" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/15 hover:bg-white/25 text-white font-semibold border border-white/30">
                  Call (571) 350‑0099
                </a>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#179BAE]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  Licensed & Insured
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#179BAE]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"/></svg>
                  On‑time Guarantee
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#179BAE]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
                  Flexible Scheduling
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#179BAE]" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z"/></svg>
                  Eco‑friendly Products
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of professional cleaning services to meet all your needs, 
              from basic cleaning to specialized services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title} 
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <PromoSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* FAQ Section */}
      <FaqSection />
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Customer satisfaction is our greatest reward. 
              Read what they say about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                name={testimonial.name} 
                quote={testimonial.quote}
                rating={testimonial.rating}
                location={testimonial.location}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ContactForm />
        </div>
      </section>
      
      {/* Blog Section */}
      <BlogSection />

      <Footer />
    </div>
  );
}
