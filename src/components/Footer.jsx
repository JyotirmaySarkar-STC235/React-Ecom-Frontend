import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronUpIcon, FacebookIcon, InstagramIcon, LinkedinIcon, XIcon, YoutubeIcon } from '../utils/icons'
import { Logo } from './Header'

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com', Icon: FacebookIcon },
  { label: 'Instagram', href: 'https://www.instagram.com', Icon: InstagramIcon },
  { label: 'YouTube', href: 'https://www.youtube.com', Icon: YoutubeIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', Icon: LinkedinIcon },
  { label: 'X', href: 'https://x.com', Icon: XIcon },
]

const LINK_COLUMNS = [
  {
    title: 'About us',
    links: [
      { label: 'Who we are', to: '/about' },
      { label: 'Why ClassyShop', to: '/why-classyshop' },
      { label: 'FAQs', to: '/faqs' },
      { label: 'Careers', to: '/careers' },
      { label: 'Become a distributor', to: '/distributor' },
      { label: 'Export', to: '/export' },
    ],
  },
  {
    title: 'Useful links',
    links: [
      { label: 'Blog', to: '/blog' },
      { label: 'Disclaimer', to: '/disclaimer' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms & Conditions', to: '/terms' },
      { label: 'Shipping & Returns', to: '/shipping-returns' },
      { label: 'Contact us', to: '/help' },
    ],
  },
  {
    title: 'Also available on',
    links: [
      { label: 'Nykaa', href: 'https://www.nykaa.com' },
      { label: 'Amazon', href: 'https://www.amazon.in' },
      { label: 'Flipkart', href: 'https://www.flipkart.com' },
      { label: 'Myntra', href: 'https://www.myntra.com' },
      { label: 'Blinkit', href: 'https://blinkit.com' },
    ],
  },
]

const PAYMENT_METHODS = ['Visa', 'Mastercard', 'Amex', 'PayPal', 'Diners', 'Discover']

const linkClass = 'text-sm text-white/90 hover:text-white hover:underline'
const headingClass = 'text-sm font-semibold uppercase'

const FooterLink = ({ label, to, href }) =>
  href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {label}
    </a>
  ) : (
    <Link to={to} className={linkClass}>
      {label}
    </Link>
  )

const scrollToTop = () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
}

const Footer = ({ id }) => {
  const fallbackId = useId()
  const footerId = id ?? fallbackId
  const emailId = `${footerId}-email`
  const [isSubscribed, setIsSubscribed] = useState(false)

  // ponytail: no newsletter API yet — swap this for a real request when the backend exists.
  const handleSubscribe = (event) => {
    event.preventDefault()
    event.currentTarget.reset()
    setIsSubscribed(true)
  }

  return (
    <footer id={footerId} className="bg-[#300f02] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 lg:flex-row lg:gap-12">
        <div className="flex flex-col gap-8 lg:w-1/5">
          <Logo id='logo-footer' />
          <ul className="flex flex-wrap gap-3" aria-label="Follow us">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`ClassyShop on ${label}`}
                  className="flex size-9 items-center justify-center rounded-md bg-white text-gray-900 transition-colors hover:bg-orange-100"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <h2 className={headingClass}>Download the app</h2>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="w-fit">
              <img
                src="https://placehold.co/180x54/?text=Google+Play"
                alt="Get it on Google Play"
                width="180"
                height="54"
                loading="lazy"
                decoding="async"
                className="rounded-md"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold uppercase md:text-xl">Subscribe to our newsletter</h2>
              <p className="mt-1 text-sm text-white/90">Get on the list for all things ClassyShop. Also, 10% off your first order.</p>
            </div>
            <div className="flex flex-col gap-2 md:w-auto">
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <label htmlFor={emailId} className="sr-only">Email address</label>
                <input
                  id={emailId}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-full bg-white px-5 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-orange-200 md:w-64 md:flex-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-orange-100 px-5 py-2.5 text-sm font-semibold text-orange-800 uppercase transition-colors hover:bg-white"
                >
                  Subscribe
                </button>
              </form>
              <p role="status" className="text-sm">
                {isSubscribed && 'Thanks for subscribing!'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-y-8">
            {LINK_COLUMNS.map(({ title, links }) => (
              <nav key={title} aria-label={title} className="flex w-1/2 flex-col gap-3 pr-4 md:w-1/4">
                <h2 className={headingClass}>{title}</h2>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <FooterLink {...link} />
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <div className="flex w-full flex-col gap-3 text-sm md:w-1/4">
              <h2 className={headingClass}>For customer queries</h2>
              <address className="flex flex-col gap-1 not-italic">
                <span className="font-semibold uppercase">Grievance officer:</span>
                <span>John Doe - COO</span>
                <span><b>Email:</b> <a href="mailto:support@classyshop.com" className="break-all hover:underline">support@classyshop.com</a></span>
                <span><b>Mobile No.:</b> <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a></span>
                <span>9:30 - 6:30 (Mon - Friday)</span>
              </address>
              <h2 className={`${headingClass} mt-2`}>For bulk orders/queries</h2>
              <address className="flex flex-col gap-1 not-italic">
                <span><b>Email:</b> <a href="mailto:business@classyshop.com" className="break-all hover:underline">business@classyshop.com</a></span>
                <span><b>Phone:</b> <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a></span>
              </address>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-5 sm:flex-row sm:justify-between">
          <p className="text-sm">© {new Date().getFullYear()} - ClassyShop - Big Mega Store</p>
          <div className="flex items-center gap-4">
            <ul className="flex flex-wrap justify-center gap-2" aria-label="Accepted payment methods">
              {PAYMENT_METHODS.map((method) => (
                <li key={method}>
                  <img
                    src={`https://placehold.co/38x24?text=${method}`}
                    alt={method}
                    width="38"
                    height="24"
                    loading="lazy"
                    decoding="async"
                    className="rounded-sm"
                  />
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-gray-900 shadow-md transition-colors hover:bg-orange-100"
            >
              <ChevronUpIcon className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
