import { WishlistIcon } from '../utils/icons'

const PDPHeader = ({ name = '' }) => {
  return (
    <div className="pdp-header flex items-start justify-between gap-4">
      <h1 className="text-xl font-bold text-gray-900 md:text-2xl">{name}</h1>
      <button
        type="button"
        className="wishlist-button shrink-0 rounded-full p-1.5 text-gray-800 transition-colors hover:bg-gray-100 hover:text-red-500"
        aria-label="Add to wishlist"
      >
        <WishlistIcon className="size-6" />
      </button>
    </div>
  )
}

export default PDPHeader
