'use client'

import Image from 'next/image'
import Button from './Button'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  backgroundImage?: string
  isMainPage?: boolean
}

const Hero = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
  isMainPage = false,
}: HeroProps) => {
  if (isMainPage) {
    return (
      <section className="relative min-h-screen flex items-center justify-center text-white">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt="services in northern Utah"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-brand-dark opacity-70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-lg sm:text-xl md:text-2xl text-accent font-semibold mb-6">
              {subtitle}
            </h2>
          )}
          {description && (
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
          {buttonText && buttonLink && (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center items-center">
              <Button href={buttonLink} variant="primary" size="lg">
                {buttonText}
              </Button>
              <Button href="https://calendar.app.google/S8TaQaP9DRGngVtV7" variant="accent" size="lg">
                Schedule Your Removal
              </Button>
            </div>
          )}
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-24 md:py-32 flex items-center justify-center text-white">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="services in northern Utah"
          fill
          className="object-cover"
          quality={80}
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-base sm:text-lg md:text-xl text-accent font-semibold mb-4">
            {subtitle}
          </h2>
        )}
        {description && (
          <p className="text-base sm:text-lg text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        {buttonText && buttonLink && (
          <Button href={buttonLink} variant="primary" size="lg">
            {buttonText}
          </Button>
        )}
      </div>
    </section>
  )
}

export default Hero
