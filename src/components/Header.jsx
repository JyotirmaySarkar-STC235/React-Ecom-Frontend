import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const CATEGORIES = ['Fashion', 'Bags', 'Footwear', 'Groceries', 'Wellness', 'Jewellery', 'Beauty', 'Electronics']
const CATEGORY_LINKS = CATEGORIES.map((label) => ({ to: `/category/${label.toLowerCase()}`, label }))
const NAV_LINKS = [{ to: '/', label: 'Home' }, ...CATEGORY_LINKS]

const ICONS = {
  search: 'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z',
  heart: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z',
  cart: 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z',
  menu: 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12',
  close: 'M6 18 18 6M6 6l12 12',
  chevronDown: 'm19.5 8.25-7.5 7.5-7.5-7.5',
  rocket: 'M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z',
}

const Icon = ({ name, className = 'size-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={ICONS[name]} />
  </svg>
)

const navLinkClass = ({ isActive }) =>
  `block whitespace-nowrap py-3 text-sm font-medium transition-colors hover:text-red-500 ${
    isActive ? 'text-red-500' : 'text-gray-800'
  }`

const Logo = ({ onClick }) => (
  <Link to="/" className="flex shrink-0 items-center gap-1" aria-label="ClassyShop home" onClick={onClick}>
    <svg className="h-9 w-11 text-red-500" viewBox="0 0 48 40" fill="currentColor" aria-hidden="true">
      <rect y="16" width="10" height="3" rx="1.5" />
      <rect x="3" y="23" width="9" height="3" rx="1.5" />
      <rect x="6" y="30" width="7" height="3" rx="1.5" />
      <path d="M16 14h28l-2.5 22.4a3 3 0 0 1-3 2.6H21.5a3 3 0 0 1-3-2.6Z" />
      <path d="M24 14v-3a6 6 0 0 1 12 0v3" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
    <span className="leading-none">
      <span className="block text-xl font-extrabold tracking-tight">CLASSYSHOP</span>
      <span className="block text-[10px] font-medium tracking-[0.3em] text-gray-600">BIG MEGA STORE</span>
    </span>
  </Link>
)

const SearchForm = ({ id, onSearch, className }) => (
  <form role="search" onSubmit={onSearch} className={`relative ${className}`}>
    <label htmlFor={id} className="sr-only">Search for products</label>
    <input
      id={id}
      name="q"
      type="search"
      placeholder="Search for products..."
      className="w-full rounded-md bg-gray-100 py-2.5 pr-11 pl-4 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-red-500"
    />
    <button type="submit" className="absolute inset-y-0 right-0 px-3 text-gray-700 hover:text-red-500" aria-label="Search">
      <Icon name="search" className="size-5" />
    </button>
  </form>
)

const Header = ({ cartCount = 0 }) => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const drawerPanelRef = useRef(null)
  const drawerCloseRef = useRef(null)
  const navigate = useNavigate()
  const closeCategories = () => setIsCategoriesOpen(false)
  const openDrawer = () => setIsDrawerOpen(true)
  const closeDrawer = () => {
    setIsDrawerOpen(false)
    menuButtonRef.current.focus()
  }

  useEffect(() => {
    if (isDrawerOpen) drawerCloseRef.current.focus()
  }, [isDrawerOpen])

  const handleSearch = (event) => {
    event.preventDefault()
    const query = new FormData(event.currentTarget).get('q').trim()
    if (!query) return
    closeDrawer()
    navigate(`/search?q=${encodeURIComponent(query)}`)
  }

  const handleCategoriesBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) closeCategories()
  }

  const handleDrawerKeyDown = (event) => {
    if (event.key === 'Escape') return closeDrawer()
    if (event.key !== 'Tab') return

    const focusable = drawerPanelRef.current.querySelectorAll('a[href], button, input')
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <header className="border-b border-gray-200 bg-white text-gray-900">
      <div className="border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs">
          <p className="truncate">Get up to 50% off new season styles, limited time only</p>
          <ul className="hidden shrink-0 gap-6 sm:flex">
            <li><Link to="/help" className="hover:text-red-500">Help Center</Link></li>
            <li><Link to="/order-tracking" className="hover:text-red-500">Order Tracking</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-x-6 px-4 py-3 lg:flex lg:py-4">
        <button
          type="button"
          className="justify-self-start p-1 hover:text-red-500 lg:hidden"
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={isDrawerOpen}
          aria-controls="mobile-drawer"
          ref={menuButtonRef}
          onClick={openDrawer}
        >
          <Icon name="menu" />
        </button>

        <Logo />

        <SearchForm id="header-search" onSearch={handleSearch} className="hidden lg:mx-auto lg:block lg:max-w-md lg:flex-1" />

        <div className="flex items-center gap-4 justify-self-end">
          <p className="hidden text-sm lg:block">
            <Link to="/login" className="hover:text-red-500">Login</Link>
            <span className="mx-1" aria-hidden="true">|</span>
            <Link to="/register" className="hover:text-red-500">Register</Link>
          </p>
          <Link to="/wishlist" className="hidden p-1 hover:text-red-500 sm:block" aria-label="Wishlist">
            <Icon name="heart" />
          </Link>
          <Link
            to="/cart"
            className="relative p-1 hover:text-red-500"
            aria-label={`Cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
          >
            <Icon name="cart" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white" aria-hidden="true">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-4">
          <div
            className="relative hidden lg:block"
            onBlur={handleCategoriesBlur}
            onKeyDown={(event) => event.key === 'Escape' && closeCategories()}
          >
            <button
              type="button"
              className="flex items-center gap-3 py-3 text-sm font-semibold whitespace-nowrap uppercase hover:text-red-500"
              aria-expanded={isCategoriesOpen}
              aria-controls="categories-menu"
              onClick={() => setIsCategoriesOpen((open) => !open)}
            >
              <Icon name="menu" className="size-5" />
              Shop by categories
              <Icon name="chevronDown" className={`size-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
            </button>
            <ul
              id="categories-menu"
              hidden={!isCategoriesOpen}
              className="absolute top-full left-0 z-50 min-w-56 rounded-md border border-gray-200 bg-white py-2 shadow-lg"
            >
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-red-500" onClick={closeCategories}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Main" className="min-w-0 flex-1">
            <ul className="flex gap-6 overflow-x-auto [scrollbar-width:none] lg:justify-center lg:overflow-visible">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} end className={navLinkClass}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <p className="ml-auto hidden items-center gap-2 text-sm whitespace-nowrap xl:flex">
            <Icon name="rocket" className="size-5" />
            Free International Delivery
          </p>
        </div>
      </div>

      <div
        id="mobile-drawer"
        data-open={isDrawerOpen || undefined}
        className="group invisible fixed inset-0 z-50 transition-[visibility] duration-300 data-open:visible data-open:transition-none motion-reduce:transition-none lg:hidden"
      >
        <div
          className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-data-open:opacity-100 motion-reduce:transition-none"
          aria-hidden="true"
          onClick={closeDrawer}
        />
        <div
          ref={drawerPanelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          onKeyDown={handleDrawerKeyDown}
          className="absolute inset-y-0 left-0 flex w-4/5 max-w-xs -translate-x-full flex-col gap-5 overflow-y-auto bg-white p-4 transition-transform duration-300 group-data-open:translate-x-0 motion-reduce:transition-none"
        >
          <Logo onClick={closeDrawer} />

          <SearchForm id="drawer-search" onSearch={handleSearch} />

          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Shop By Categories</h2>
            <button type="button" ref={drawerCloseRef} className="p-1 hover:text-red-500" aria-label="Close menu" onClick={closeDrawer}>
              <Icon name="close" />
            </button>
          </div>

          <nav aria-label="Categories">
            <ul>
              {CATEGORY_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <NavLink to={to} className={navLinkClass} onClick={closeDrawer}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            to="/login"
            className="rounded-md bg-red-500 py-2.5 text-center text-sm font-semibold text-white hover:bg-red-600"
            onClick={closeDrawer}
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
