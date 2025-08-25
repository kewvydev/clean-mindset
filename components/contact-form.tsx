'use client';

import { useState } from 'react';
import { useScrollAnimation } from './use-scroll-animation';

export default function ContactForm() {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Thank you for your message! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div 
      ref={ref}
      className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-1000 transform ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Contact Us</h3>
        <p className="text-gray-600">
          Fill out the form and we'll get back to you within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#179BAE] focus:border-transparent transition-all duration-300 hover:border-[#179BAE]"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#179BAE] focus:border-transparent transition-all duration-300 hover:border-[#179BAE]"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#179BAE] focus:border-transparent transition-all duration-300 hover:border-[#179BAE]"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service of Interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#179BAE] focus:border-transparent transition-all duration-300 hover:border-[#179BAE]"
            >
              <option value="">Select a service</option>
              <option value="basic">Basic Cleaning</option>
              <option value="deep">Deep Cleaning</option>
              <option value="premium">Premium Cleaning</option>
              <option value="move-in">Move-In/Move-Out Cleaning</option>
              <option value="airbnb">Airbnb Cleaning</option>
              <option value="post-construction">Post-Construction Cleaning</option>
              <option value="custom">Custom Service</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#179BAE] focus:border-transparent transition-all duration-300 hover:border-[#179BAE] resize-none"
            placeholder="Tell us about your cleaning project, preferred schedules, or any questions you may have..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#179BAE] text-white px-8 py-4 rounded-lg hover:bg-[#138A9B] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 font-semibold text-lg min-w-[200px] hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? 'Sending...' : 'GET YOUR FREE QUOTE'}
          </button>
        </div>

        {/* Additional Info */}
        <div className="text-center text-sm text-gray-500">
          <p>* Required fields</p>
          <p className="mt-2">
            You can also contact us directly at{' '}
            <a href="tel:+17575502187" className="text-[#179BAE] hover:text-[#138A9B] font-medium">
              757-550-2187
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
