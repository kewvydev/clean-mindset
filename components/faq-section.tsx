'use client';

import { useState } from 'react';
import { useScrollAnimation } from './use-scroll-animation';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Can I ask for special requests or request focus on certain areas?',
    answer:
      'Absolutely. Tell us what matters most before your appointment and our team will prioritize those areas while completing a full, professional clean.',
  },
  {
    question: 'How often should I schedule a Deep Cleaning Service?',
    answer:
      'We recommend a deep clean every 3–6 months depending on traffic, pets, and lifestyle. Recurring standard cleanings in between will keep the home spotless.',
  },
  {
    question: 'Are your cleaners insured and bonded?',
    answer:
      'Yes. All team members are background‑checked, trained, and fully insured/bonded for your peace of mind.',
  },
  {
    question: 'Are your cleaning products safe for pets and children?',
    answer:
      'Yes. We use professional, eco‑friendly products that are safe when used as directed. Let us know of any sensitivities.',
  },
  {
    question:
      'What is the difference between Move‑In/Move‑Out cleaning and other cleaning companies?',
    answer:
      'Our Move‑In/Move‑Out service targets inside appliances, cabinets, baseboards and more for a truly ready‑to‑live space. We follow a detailed checklist and quality inspection.',
  },
];

export default function FaqSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-[#0f1a20] text-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 py-20 transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left: Accordion */}
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Here to <span className="italic font-serif">help</span>
            </h2>

            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="">
                    <button
                      onClick={() => toggle(index)}
                      className="w-full text-left py-5 flex items-center justify-between gap-6"
                    >
                      <span className="text-lg md:text-xl font-medium text-white/90">
                        {faq.question}
                      </span>
                      <span
                        className={`shrink-0 w-6 h-6 grid place-items-center rounded-full border border-white/20 transition-transform ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                        >
                          <path strokeWidth="2" strokeLinecap="round" d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-[max-height] duration-300 ${
                        isOpen ? 'max-h-40' : 'max-h-0'
                      }`}
                    >
                      <p className="pb-6 text-white/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-8">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#179BAE] text-[#179BAE] hover:bg-[#179BAE]/10 transition-colors"
              >
                ALL FAQs
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10">
              <img
                src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=1400&auto=format&fit=crop"
                alt="Cleaner organizing a cozy living room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


