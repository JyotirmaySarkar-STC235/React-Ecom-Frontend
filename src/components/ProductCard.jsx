import { CartIcon, ExpandIcon, HeartIcon } from '../utils/icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectCartStatus, setProductIdBeingAdded, selectProductIdBeingAdded } from '../store/slices/cartSlice'
import { setProductPopupOpen, setProduct } from '../store/slices/productPopup'
import {setOverlay} from '../store/slices/overlay'

const ACTIONS = [
  { label: 'Quick view', Icon: ExpandIcon, uniqueKey: 'quick-view'},
  { label: 'Add to wishlist', Icon: HeartIcon, uniqueKey: 'add-to-wishlist'},
]



const formatPrice = (value) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value)


const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const { id, name,description, brand, price, compareAtPrice, image, rating = 0 } = product
  const discount = compareAtPrice > price ? Math.round((1 - price / compareAtPrice) * 100) : 0
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    dispatch(setProductIdBeingAdded(id))
  }
  const isLoading = useSelector(selectCartStatus)
  const productIdBeingAdded = useSelector(selectProductIdBeingAdded)

  const handleQuickView = () => {
    dispatch(setOverlay(true))
    dispatch(setProductPopupOpen(true))
    dispatch(setProduct(product))
  }

  const handleAddToWishlist = () => {
    console.log("Add to wishlist")
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white">
      <div className="relative aspect-square bg-gray-100">
        <Link to={`/products/${id}`}>
        <img src={image} alt={name} className="absolute inset-0 size-full object-cover" loading="lazy" decoding="async" />
        </Link>
        {discount > 0 && (
          <span className="absolute top-2 left-2 rounded-md bg-red-500 px-1.5 py-0.5 text-xs font-medium text-white">
            {discount}%
          </span>
        )}
        <div className="absolute top-2 right-2 flex translate-x-2 flex-col gap-2 opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100 pointer-coarse:translate-x-0 pointer-coarse:opacity-100">
          {ACTIONS.map(({ label, Icon, uniqueKey }) => (
            <button
              key={label}
              type="button"
              aria-label={`${label}: ${name}`}
              onClick={uniqueKey === 'quick-view' ? handleQuickView : handleAddToWishlist}
              className="flex size-8 items-center justify-center rounded-full bg-white text-gray-800 shadow-md transition-colors hover:bg-red-500 hover:text-white"
            >
              <Icon className="size-4" />
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        {brand && <p className="text-xs text-gray-500">{brand}</p>}
        <h3 className="line-clamp-2 text-sm font-medium text-gray-800">{name}</h3>
        <p className="text-[10px] lg:text-xs text-gray-500 line-clamp-2">{description}</p>
        <p className="text-sm text-amber-400" role="img" aria-label={`Rated ${rating} out of 5`}>
          {'★'.repeat(rating)}
          <span className="text-gray-300">{'★'.repeat(5 - rating)}</span>
        </p>
        <p className="flex flex-wrap items-center justify-between gap-x-2 text-sm">
          {compareAtPrice > price && (
            <s className="text-gray-400 text-[10px] lg:text-xs">
              <span className="sr-only">Original price </span>
              {formatPrice(compareAtPrice)}
            </s>
          )}
          <span className="font-semibold text-red-500 text-[10px] lg:text-xs">{formatPrice(price)}</span>
        </p>
        <button
          type="button"
          onClick={() => handleAddToCart(product)}
          className="mt-auto flex items-center justify-center gap-2 rounded-md border border-red-500 px-3 py-2 text-[10px] lg:text-xs font-medium text-red-500 uppercase transition-colors hover:bg-red-500 hover:text-white"
        >
          <CartIcon className="size-4" />
          {isLoading === 'loading' && productIdBeingAdded === id ? 'Adding...' : 'Add to cart'}
        </button>
      </div>
    </article>
  )
}

export default ProductCard
