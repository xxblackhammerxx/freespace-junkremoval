'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { getBusinessConfig, type NavItem } from '@/utils/businessHelpers'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const config = getBusinessConfig()

  const renderNavItem = (item: NavItem, isMobile: boolean = false) => {
    if (item.type === 'dropdown') {
      return (
        <div key={item.label} className="relative group">
          {item.href ? (
            <Link
              href={item.href}
              className={`${
                isMobile
                  ? 'block px-3 py-2 text-base font-medium'
                  : 'px-3 py-2 text-sm font-medium flex items-center'
              } text-gray-900 hover:text-primary transition-colors`}
            >
              {item.label}
              {!isMobile && (
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </Link>
          ) : (
            <button
              name={`${item.label} dropdown button`}
              className={`${
                isMobile
                  ? 'block px-3 py-2 text-base font-medium'
                  : 'px-3 py-2 text-sm font-medium flex items-center'
              } text-gray-900 hover:text-primary transition-colors`}
            >
              {item.label}
              {!isMobile && (
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </button>
          )}
          {item.children && !isMobile && (
            <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                {item.children.map((child: NavItem, index: number) => (
                  <Link
                    key={child.href || child.label}
                    href={child.href || '#'}
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                      index === 0 ? 'font-medium border-b border-gray-200' : ''
                    }`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )
    }

    return (
      <Link
        key={item.href || item.label}
        href={item.href || '#'}
        className={`${
          isMobile ? 'block px-3 py-2 text-base font-medium' : 'px-3 py-2 text-sm font-medium'
        } text-gray-900 hover:text-primary transition-colors`}
      >
        {item.label}
      </Link>
    )
  }

  const renderMobileDropdownChildren = (children: NavItem[]) => {
    return children.map((child) => (
      <Link
        key={child.href || child.label}
        href={child.href || '#'}
        className={`block px-6 py-2 text-sm text-gray-700 hover:text-primary ${
          child.label.toLowerCase().includes('all') ? 'font-medium' : ''
        }`}
      >
        {child.label}
      </Link>
    ))
  }

  return (
    <header className="bg-white shadow-lg py-8 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-heading font-bold text-primary">
              <Image
                src={config.branding.logo.main}
                alt={config.business.name}
                width={250}
                height={50}
                className="h-8 sm:h-10 md:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {config.navigation.main.map((item) => renderNavItem(item))}

              {/* Phone Number with better spacing */}
              <div className="border-l border-gray-300 pl-6 ml-4">
                <a
                  href={config.contact.phone.link}
                  className="text-primary hover:text-primary-700 px-3 py-2 text-sm font-bold transition-colors whitespace-nowrap"
                >
                  {config.contact.phone.display}
                </a>
              </div>

              {/* CTA Button */}
              {config.navigation.cta.type === 'button' ? (
                <Link
                  href={config.navigation.cta.href}
                  className="bg-primary text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  {config.navigation.cta.text}
                </Link>
              ) : (
                <a
                  href={config.navigation.cta.href}
                  className="bg-primary text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  {config.navigation.cta.text}
                </a>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-primary"
              name="Toggle mobile menu button"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {config.navigation.main
                .filter((item) => item.showInMobile !== false)
                .map((item) => (
                  <div key={item.label}>
                    {renderNavItem(item, true)}
                    {item.children && (
                      <div className="ml-3">
                        <div className="px-3 py-2 text-base font-medium text-gray-900">
                          {item.label === 'Services' ? 'Individual Services:' : 'Areas:'}
                        </div>
                        {renderMobileDropdownChildren(item.children)}
                      </div>
                    )}
                  </div>
                ))}
              <Link
                href={config.navigation.cta.href}
                className="block px-3 py-2 text-base font-medium bg-primary text-white rounded-md mx-3 text-center"
              >
                {config.navigation.cta.text}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
