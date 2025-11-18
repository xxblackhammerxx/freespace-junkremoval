'use client'

import { triggerCRMWidget } from './CRMWidget'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  // Accessibility props
  'aria-label'?: string
  // CRM Integration props
  crmTrigger?: boolean
  serviceType?: string
  leadSource?: string
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  'aria-label': ariaLabel,
  crmTrigger = false,
  serviceType,
  leadSource,
}: ButtonProps) => {
  const baseClasses = 'inline-block font-bold rounded-lg transition-all duration-300 text-center'

  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-600 text-white',
    secondary: 'bg-white hover:bg-gray-100 text-primary border-2 border-primary',
    accent: 'bg-accent hover:bg-accent-600 text-white',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  // Handle CRM trigger click
  const handleCRMClick = (e: React.MouseEvent) => {
    e.preventDefault()
    triggerCRMWidget(serviceType, leadSource)
  }

  // If CRM trigger is enabled, use special handling
  if (crmTrigger) {
    return (
      <button
        type="button"
        onClick={handleCRMClick}
        className={classes}
        data-service-type={serviceType}
        data-lead-source={leadSource}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    )
  }

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//')
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {children}
    </button>
  )
}

export default Button
