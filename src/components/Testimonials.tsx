import Button from './Button'
import { businessConfig } from '../config/business.config'
import { TestimonialData } from '../config/types'

interface TestimonialsProps {
  title?: string
  subtitle?: string
  showViewAllButton?: boolean
  layout?: 'compact' | 'detailed'
}

const Testimonials = ({
  title = 'WHAT OUR CLIENTS SAY',
  subtitle = "Don't just take our word for it - hear from satisfied customers",
  showViewAllButton = true,
  layout = 'compact',
}: TestimonialsProps) => {
  const { testimonials } = businessConfig

  return (
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-4 md:mb-6">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 px-4">{subtitle}</p>

      <div
        className={`grid grid-cols-1 ${layout === 'detailed' ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-3'} gap-8`}
      >
        {testimonials.data.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div
                className={`${layout === 'detailed' ? 'w-16 h-16' : 'w-12 h-12'} bg-primary rounded-full flex items-center justify-center mr-3`}
              >
                <span
                  className={`text-white font-bold ${layout === 'detailed' ? 'text-xl' : 'text-lg'}`}
                >
                  {testimonial.initial}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-brand-dark">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.projectType}</p>
              </div>
            </div>

            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-600 mb-4 italic">
              "
              {layout === 'compact'
                ? testimonial.review.length > 150
                  ? testimonial.review.substring(0, 150) + '...'
                  : testimonial.review
                : testimonial.review}
              "
            </p>
          </div>
        ))}
      </div>

      {showViewAllButton && (
        <div className="mt-12">
          <Button href={testimonials.reviewsLink} variant="primary" size="lg">
            See All Reviews on Google
          </Button>
        </div>
      )}
    </div>
  )
}

export default Testimonials
