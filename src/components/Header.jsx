import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import HeaderNav from './HeaderNav'
import { CartIcon, ChevronDownIcon, CloseIcon, HeartIcon, LogoIcon, MenuIcon, RocketIcon, SearchIcon } from '../utils/icons'
import { CATEGORY_LINKS } from '../utils/categories'

const NAV_LINKS = [{ to: '/', label: 'Home' }, ...CATEGORY_LINKS]

const navLinkClass = ({ isActive }) =>
  `block whitespace-nowrap py-3 text-sm font-medium transition-colors hover:text-red-500 ${
    isActive ? 'text-red-500' : 'text-gray-800'
  }`

export const Logo = ({ id, onClick }) => (
  <Link id={id} to="/" className="flex shrink-0 items-center gap-1" aria-label="ClassyShop home" onClick={onClick}>
    <LogoIcon />
    <span className="leading-none">
      <span className="block text-xl font-extrabold tracking-tight">CLASSYSHOP</span>
      <span className="block text-[10px] font-medium tracking-[0.3em] text-gray-600">BIG MEGA STORE</span>
    </span>
  </Link>
)

const SearchForm = ({ id, onSearch, className }) => (
  <form id={`${id}-form`} role="search" onSubmit={onSearch} className={`relative ${className}`}>
    <label htmlFor={id} className="sr-only">Search for products</label>
    <input
      id={id}
      name="q"
      type="search"
      placeholder="Search for products..."
      className="w-full rounded-md bg-gray-100 py-2.5 pr-11 pl-4 text-sm outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-red-500"
    />
    <button type="submit" className="absolute inset-y-0 right-0 px-3 text-gray-700 hover:text-red-500" aria-label="Search">
      <SearchIcon className="size-5" />
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
    <header id='header' className="border-b border-gray-200 bg-white text-gray-900">
      <div id='header-topbar' className="border-b border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs">
          <p className="truncate">Get up to 50% off new season styles, limited time only</p>
          <ul className="hidden shrink-0 gap-6 sm:flex">
            <li><Link to="/help" className="hover:text-red-500">Help Center</Link></li>
            <li><Link to="/orders" className="hover:text-red-500">Order Tracking</Link></li>
          </ul>
        </div>
      </div>

      <div id='header-content' className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-x-6 px-4 py-3 lg:flex lg:py-4">
        <button
          id='menu-button'
          type="button"
          className="justify-self-start p-1 hover:text-red-500 lg:hidden"
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={isDrawerOpen}
          aria-controls="mobile-drawer"
          ref={menuButtonRef}
          onClick={openDrawer}
        >
          <MenuIcon />
        </button>

        <Logo id='logo' />

        <SearchForm id="header-search" onSearch={handleSearch} className="hidden lg:mx-auto lg:block lg:max-w-md lg:flex-1" />

        <div id='header-actions' className="flex items-center gap-4 justify-self-end">
          <p className="hidden text-sm lg:block">
            <Link to="/login" className="hover:text-red-500">Login</Link>
            <span className="mx-1" aria-hidden="true">|</span>
            <Link to="/register" className="hover:text-red-500">Register</Link>
          </p>
          <Link to="/wishlist" className="hidden p-1 hover:text-red-500 sm:block" aria-label="Wishlist">
            <HeartIcon />
          </Link>
          <Link
            to="/cart"
            className="relative p-1 hover:text-red-500"
            aria-label={`Cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
          >
            <CartIcon />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-red-500 text-[10px] text-white" aria-hidden="true">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      <div id='header-categories' className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-4">
          <div
            id='categories-dropdown'
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
              <MenuIcon className="size-5" />
              Shop by categories
              <ChevronDownIcon className={`size-4 transition-transform ${isCategoriesOpen ? 'rotate-180' : ''}`} />
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

          <HeaderNav links={NAV_LINKS} />

          <p id='header-delivery' className="ml-auto hidden items-center gap-2 text-sm whitespace-nowrap xl:flex">
            <RocketIcon className="size-5" />
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
          id='mobile-drawer-overlay'
          className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-data-open:opacity-100 motion-reduce:transition-none"
          aria-hidden="true"
          onClick={closeDrawer}
        />
        <div
          id='mobile-drawer-panel'
          ref={drawerPanelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          onKeyDown={handleDrawerKeyDown}
          className="absolute inset-y-0 left-0 flex w-4/5 max-w-xs -translate-x-full flex-col gap-5 overflow-y-auto bg-white p-4 transition-transform duration-300 group-data-open:translate-x-0 motion-reduce:transition-none"
        >
          <Logo id='drawer-logo' onClick={closeDrawer} />

          <SearchForm id="drawer-search" onSearch={handleSearch} />

          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Shop By Categories</h2>
            <button type="button" ref={drawerCloseRef} className="p-1 hover:text-red-500" aria-label="Close menu" onClick={closeDrawer}>
              <CloseIcon />
            </button>
          </div>

          <nav id='drawer-nav' aria-label="Categories">
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
