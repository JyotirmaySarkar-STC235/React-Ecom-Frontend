const OutlineIcon = ({ d, className = 'size-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
)

export const SearchIcon = (props) => (
  <OutlineIcon {...props} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
)

export const HeartIcon = (props) => (
  <OutlineIcon {...props} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
)

export const CartIcon = (props) => (
  <OutlineIcon {...props} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
)

export const MenuIcon = (props) => (
  <OutlineIcon {...props} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
)

export const CloseIcon = (props) => (
  <OutlineIcon {...props} d="M6 18 18 6M6 6l12 12" />
)

export const ChevronDownIcon = (props) => (
  <OutlineIcon {...props} d="m19.5 8.25-7.5 7.5-7.5-7.5" />
)

export const RocketIcon = (props) => (
  <OutlineIcon {...props} d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
)

export const TruckIcon = (props) => (
  <OutlineIcon {...props} d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
)

export const LogoIcon = ({ className = 'h-9 w-11 text-red-500' }) => (
  <svg className={className} viewBox="0 0 48 40" fill="currentColor" aria-hidden="true">
    <rect y="16" width="10" height="3" rx="1.5" />
    <rect x="3" y="23" width="9" height="3" rx="1.5" />
    <rect x="6" y="30" width="7" height="3" rx="1.5" />
    <path d="M16 14h28l-2.5 22.4a3 3 0 0 1-3 2.6H21.5a3 3 0 0 1-3-2.6Z" />
    <path d="M24 14v-3a6 6 0 0 1 12 0v3" fill="none" stroke="currentColor" strokeWidth="3" />
  </svg>
)
