import { getBusinessConfig } from '@/utils/businessHelpers'
import Button from './Button'
import Section from './Section'

interface CTASectionProps {
  title?: string
  description?: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  showPhoneButton?: boolean
}

const CTASection = ({
  title = 'READY TO START YOUR PROJECT?',
  description = '',
  primaryButtonText = 'Get Free Estimate',
  primaryButtonLink = '/contact',
  secondaryButtonText = 'Call 385-326-8426',
  showPhoneButton = true,
}: CTASectionProps) => {
  const config = getBusinessConfig()

  if (!description) {
    description = `Get a free estimate today and discover why ${config.business.generalServiceArea} homeowners and contractors throughout ${config.business.countiesServed.join(', ')} choose ${config.business.name} for their most important ${config.business.mainService} projects.`
  }
  return (
    <Section background="accent" paddingY="xl">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">{title}</h2>
        <p className="text-xl text-brand-dark mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center">
          <Button href={primaryButtonLink} variant="primary" size="lg">
            {primaryButtonText}
          </Button>
          {showPhoneButton && (
            <Button href="tel:3853268426" variant="secondary" size="lg">
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </Section>
  )
}

export default CTASection
