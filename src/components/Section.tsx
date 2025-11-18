interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'gray' | 'dark' | 'primary' | 'accent' | 'light'
  paddingY?: 'sm' | 'md' | 'lg' | 'xl'
}

const Section = ({
  children,
  className = '',
  background = 'white',
  paddingY = 'lg',
}: SectionProps) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    light: 'bg-ph-light',
    dark: 'bg-brand-dark text-white',
    primary: 'bg-primary text-white',
    accent: 'bg-accent text-white',
  }

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  }

  return (
    <section
      className={`${backgroundClasses[background]} ${paddingClasses[paddingY]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export default Section
