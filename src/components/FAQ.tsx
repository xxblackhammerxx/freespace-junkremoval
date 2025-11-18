'use client'

import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import { getBusinessConfig } from '@/utils/businessHelpers'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
}

export default function FAQ({ title, subtitle, items }: FAQProps) {
  const [openItems, setOpenItems] = useState<number[]>([])
  const config = getBusinessConfig()

  if (!title) {
    title = `FREQUENTLY ASKED QUESTIONS ABOUT ${config.business.mainRole.toUpperCase()} SERVICES`
  }
  if (!subtitle) {
    subtitle = `Have questions about our ${config.business.mainRole.toLowerCase()} services? Here are some of the most common inquiries we receive from our valued customers in ${config.business.generalServiceArea}. If you don't see your question answered, feel free to contact us directly!`
  }

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  return (
    <div>
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {items.map((item, index) => (
            <AnimatedSection key={index} delay={100 * (index + 1)}>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={openItems.includes(index)}
                >
                  <h3 className="text-lg md:text-xl font-heading font-bold text-brand-dark pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-primary transform transition-transform duration-200 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-4 pt-0">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
