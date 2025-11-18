import CTASection from './CTASection'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
  showCTA?: boolean
  ctaProps?: {
    title?: string
    description?: string
    primaryButtonText?: string
    primaryButtonLink?: string
    secondaryButtonText?: string
    showPhoneButton?: boolean
  }
}

const Layout = ({ children, showCTA = true, ctaProps }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      {showCTA && <CTASection {...ctaProps} />}
      <Footer />
    </div>
  )
}

export default Layout
