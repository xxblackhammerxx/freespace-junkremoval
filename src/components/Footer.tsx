import Image from 'next/image'
import Link from 'next/link'
import { getBusinessConfig } from '@/utils/businessHelpers'
import { ServicesLinks } from './ServiceLinks'

const Footer = () => {
  const config = getBusinessConfig()

  return (
    <footer className="bg-brand-dark text-white">
      <Image
        src={config.branding.logo.white}
        alt={`${config.business.name} Logo`}
        width={150}
        height={50}
        className="mx-auto pt-8"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold text-accent mb-4">
              {config.business.name.toUpperCase()}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              At {config.business.name}, our mission is {config.business.missionStatement}.
            </p>
            <p className="text-accent text-lg font-semibold mb-4">
              "{config.business.tagline.toUpperCase()}"
            </p>
            <div className="flex space-x-4">
              {config.socialMedia.instagram && (
                <div className="bg-primary p-2 rounded-full">
                  <a
                    href={`https://www.instagram.com/${config.socialMedia.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold text-accent mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-bold text-accent mb-4">SERVICES</h4>
            <ServicesLinks />
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-700 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center md:text-left">
            <h5 className="font-heading font-bold text-accent mb-2">PHONE</h5>
            <p className="text-gray-300">
              <a href={config.contact.phone.link} className="hover:text-accent transition-colors">
                {config.contact.phone.display}
              </a>
            </p>
          </div>
          <div className="text-center md:text-left">
            <h5 className="font-heading font-bold text-accent mb-2">EMAIL</h5>
            <p className="text-gray-300">
              <a
                href={`mailto:${config.contact.email.main}`}
                className="hover:text-accent transition-colors"
              >
                {config.contact.email.main}
              </a>
            </p>
          </div>
          <div className="text-center md:text-left">
            <h5 className="font-heading font-bold text-accent mb-2">ADDRESS</h5>
            <p className="text-gray-300">
              {config.contact.address.street}<br />
              {config.contact.address.city}, {config.contact.address.state} {config.contact.address.zip}
            </p>
          </div>
          <div className="text-center md:text-left">
            <h5 className="font-heading font-bold text-accent mb-2">SERVICE AREAS</h5>
            <p className="text-gray-300"> {config.serviceAreas.map((a) => a.name).join(', ')} </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {config.business.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-accent text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-accent text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
