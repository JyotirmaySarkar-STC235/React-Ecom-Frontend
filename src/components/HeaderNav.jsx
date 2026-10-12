import { NavLink } from 'react-router-dom'
import { ChevronDownIcon } from '../utils/icons'

const activeColor = (isActive) => (isActive ? 'text-red-500' : 'text-gray-800')

const linkClass = ({ isActive }) =>
  `flex items-center gap-1 whitespace-nowrap py-3 text-sm font-medium transition-colors hover:text-red-500 ${activeColor(isActive)}`

const subLinkClass = ({ isActive }) =>
  `block px-4 py-2 text-sm hover:bg-gray-100 hover:text-red-500 ${activeColor(isActive)}`

const HeaderNav = ({ links }) => (
  <nav id="header-nav" aria-label="Main" className="min-w-0 flex-1">
    <ul className="flex gap-6 overflow-x-auto [scrollbar-width:none] lg:justify-center lg:overflow-visible">
      {links.map(({ to, label, children = [] }) => (
        <li key={to} className="group relative">
          <NavLink to={to} end={to === '/'} className={linkClass}>
            {label}
            {children.length > 0 && (
              <ChevronDownIcon
                className="hidden size-3.5 transition-transform group-focus-within:rotate-180 group-hover:rotate-180 lg:block"
              />
            )}
          </NavLink>

          {children.length > 0 && (
            <ul className="invisible absolute top-full left-1/2 z-50 hidden min-w-44 -translate-x-1/2 rounded-md group-last:right-0 group-last:left-auto group-last:translate-x-0 border border-gray-200 bg-white py-2 opacity-0 shadow-lg transition-[opacity,visibility] duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 lg:block">
              {children.map((child) => (
                <li key={child.to}>
                  <NavLink to={child.to} className={subLinkClass}>{child.label}</NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </nav>
)

export default HeaderNav
