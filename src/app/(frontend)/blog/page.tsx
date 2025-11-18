import Button from '@/components/Button'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import { getBlogMetadata } from '@/utils/metadataHelpers'
import { getBusinessConfig } from '@/utils/businessHelpers'

export const metadata = getBlogMetadata()

export default function Blog() {
  const config = getBusinessConfig()

  const blogPosts = [
    {
      title: 'Kitchen Demolition: What to Expect During Your Renovation',
      excerpt:
        'Planning a kitchen renovation? Learn what to expect during the demolition phase and how to prepare your home for a smooth project.',
      author: 'Mike Rodriguez',
      date: 'October 15, 2024',
      readTime: '5 min read',
      category: 'Kitchen Renovation',
      image:
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Load-Bearing vs. Non-Load-Bearing Walls: A Complete Guide',
      excerpt:
        "Understanding the difference between load-bearing and non-load-bearing walls is crucial for any renovation project. Here's everything you need to know.",
      author: 'Sarah Chen',
      date: 'October 12, 2024',
      readTime: '7 min read',
      category: 'Structural',
      image:
        'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: "5 Signs It's Time for a Bathroom Remodel",
      excerpt:
        "Is your bathroom showing its age? Discover the key indicators that it's time to invest in a bathroom renovation.",
      author: 'David Martinez',
      date: 'October 10, 2024',
      readTime: '4 min read',
      category: 'Bathroom Renovation',
      image:
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Sustainable Demolition: Recycling and Waste Reduction',
      excerpt:
        'Learn how modern demolition practices focus on sustainability, material recycling, and reducing environmental impact.',
      author: 'Mike Rodriguez',
      date: 'October 8, 2024',
      readTime: '6 min read',
      category: 'Sustainability',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'The Cost of Kitchen Remodeling: What to Budget For',
      excerpt:
        "Planning your kitchen remodel budget? Here's a comprehensive breakdown of costs from demolition to final installation.",
      author: 'Sarah Chen',
      date: 'October 5, 2024',
      readTime: '8 min read',
      category: 'Budgeting',
      image:
        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Safety First: OSHA Standards in Demolition Work',
      excerpt:
        'Understanding safety protocols and OSHA standards that professional demolition contractors follow to protect workers and property.',
      author: 'David Martinez',
      date: 'October 3, 2024',
      readTime: '5 min read',
      category: 'Safety',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ]

  const categories = [
    'All',
    'Kitchen Renovation',
    'Bathroom Renovation',
    'Structural',
    'Safety',
    'Sustainability',
    'Budgeting',
  ]

  return (
    <Layout
      ctaProps={{
        title: 'HAVE A PROJECT QUESTION?',
        description:
          "Can't find the answer you're looking for in our blog? Our expert team is here to help with your specific project needs.",
        primaryButtonText: 'Ask Our Experts',
      }}
    >
      <Hero
        title={`${config.business.name.toUpperCase()} BLOG`}
        subtitle="Expert Tips & Industry Insights"
        description={`Stay informed with the latest professional tips and advice from our team of experienced contractors serving ${config.contact.address.serviceArea}.`}
        buttonText="Subscribe to Updates"
        buttonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <Section paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">LATEST ARTICLES</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get expert insights on demolition, remodeling, and home renovation from our team of
            licensed professionals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === 'All'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div
                className="h-64 lg:h-auto bg-cover bg-center"
                style={{ backgroundImage: `url('${blogPosts[0].image}')` }}
              ></div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    FEATURED
                  </span>
                  <span className="ml-3 text-gray-500 text-sm">{blogPosts[0].category}</span>
                </div>
                <h3 className="text-3xl font-heading font-bold text-brand-dark mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>By {blogPosts[0].author}</span>
                    <span>•</span>
                    <span>{blogPosts[0].date}</span>
                    <span>•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Button href="#" variant="primary" size="md">
                  Read Full Article
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${post.image}')` }}
              ></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-accent text-brand-dark px-2 py-1 rounded text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-brand-dark mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>By {post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <Button href="#" variant="primary" size="sm">
                    Read More
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button href="#" variant="secondary" size="lg">
            Load More Articles
          </Button>
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section background="gray" paddingY="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">STAY UPDATED</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest demolition and remodeling tips, project
            showcases, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
            <Button variant="primary" size="md">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </Section>

      {/* Popular Topics */}
      <Section paddingY="xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-brand-dark mb-6">POPULAR TOPICS</h2>
          <p className="text-xl text-gray-600">Explore our most-read articles and guides</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-primary-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">KITCHEN GUIDES</h3>
            <p className="text-gray-600 text-sm mb-4">
              Complete guides for kitchen renovation and demolition projects
            </p>
            <Button href="#" variant="primary" size="sm">
              Explore
            </Button>
          </div>

          <div className="bg-primary-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">SAFETY TIPS</h3>
            <p className="text-gray-600 text-sm mb-4">
              Essential safety information for demolition and construction projects
            </p>
            <Button href="#" variant="primary" size="sm">
              Explore
            </Button>
          </div>

          <div className="bg-primary-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">COST GUIDES</h3>
            <p className="text-gray-600 text-sm mb-4">
              Budgeting advice and cost breakdowns for renovation projects
            </p>
            <Button href="#" variant="primary" size="sm">
              Explore
            </Button>
          </div>

          <div className="bg-primary-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                />
              </svg>
            </div>
            <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">ECO-FRIENDLY</h3>
            <p className="text-gray-600 text-sm mb-4">
              Sustainable demolition and environmentally responsible practices
            </p>
            <Button href="#" variant="primary" size="sm">
              Explore
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  )
}
