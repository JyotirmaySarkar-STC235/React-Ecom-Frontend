import { useTransition } from 'react'
import { useDispatch } from 'react-redux'
import { ChevronDownIcon, HeartIcon, TrashIcon } from '../utils/icons'
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice'

const formatPrice = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)

const pillClass =
  'inline-flex items-center gap-1.5 rounded-full border border-gray-300 px-3 py-1 text-xs font-medium uppercase text-gray-800'

const CartDrawerProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const [isPending, startTransition] = useTransition()
  const {
    id,
    name = '',
    description = '',
    image = '',
    price = 0,
    size,
    color,
    brand,
    quantity = 1,
  } = product ?? {}

  const showSize = Boolean(size)
  const showColor = Boolean(color)
  const showBrand = Boolean(brand) && !showSize && !showColor

  const handleDecrease = () => {
    if (!id) return
    if (quantity <= 1) {
      startTransition(async () => {
        await dispatch(removeFromCart(id)).unwrap()
      })
      return
    }
    startTransition(async () => {
      await dispatch(updateQuantity({ id, quantity: quantity - 1 })).unwrap()
    })
  }

  const handleIncrease = () => {
    if (!id) return
    startTransition(async () => {
      await dispatch(updateQuantity({ id, quantity: quantity + 1 })).unwrap()
    })
  }

  const handleRemove = () => {
    if (!id) return
    startTransition(async () => {
      await dispatch(removeFromCart(id)).unwrap()
    })
  }

  return (
    <article className="flex gap-3 border-b border-gray-200 py-5" aria-busy={isPending}>
      <div className="relative size-28 shrink-0 overflow-hidden rounded-md bg-gray-100 sm:size-32">
        <img
          src={image}
          alt={name}
          className="size-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <button
          type="button"
          className="absolute top-1.5 right-1.5 flex size-7 items-center justify-center rounded-full bg-white/90 text-gray-800"
          aria-label={`Add ${name} to wishlist`}
        >
          <HeartIcon className="size-4" />
        </button>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="line-clamp-2 text-sm font-bold text-gray-900">{name}</h3>
            {description && (
              <p className="mt-1 line-clamp-2 text-xs text-gray-500">{description}</p>
            )}
          </div>
          <p className="shrink-0 text-sm font-bold text-gray-900">{formatPrice(price)}</p>
        </div>

        {(showSize || showColor || showBrand) && (
          <div className="flex flex-wrap gap-2">
            {showSize && (
              <button type="button" className={pillClass} aria-label={`Size ${size}`}>
                Size : {size}
                <ChevronDownIcon className="size-3.5" />
              </button>
            )}
            {showColor && (
              <button type="button" className={pillClass} aria-label={`Color ${color}`}>
                Color :
                <span className="size-3.5 shrink-0 rounded-full border border-gray-300 bg-neutral-800" aria-hidden="true" />
                <ChevronDownIcon className="size-3.5" />
              </button>
            )}
            {showBrand && (
              <span className={pillClass}>{brand}</span>
            )}
          </div>
        )}

        <div className="mt-auto flex items-end justify-between gap-3 pt-1">
          <div className="flex h-9 items-center border border-gray-800">
            <button
              type="button"
              className="flex size-9 items-center justify-center text-lg text-gray-800 disabled:opacity-40"
              aria-label={`Decrease quantity of ${name}`}
              onClick={handleDecrease}
              disabled={isPending}
            >
              −
            </button>
            <span className="min-w-6 text-center text-sm font-medium" aria-live="polite">
              {quantity}
            </span>
            <button
              type="button"
              className="flex size-9 items-center justify-center text-lg text-gray-800 disabled:opacity-40"
              aria-label={`Increase quantity of ${name}`}
              onClick={handleIncrease}
              disabled={isPending}
            >
              +
            </button>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-red-600 uppercase disabled:opacity-40"
            aria-label={`Remove ${name} from cart`}
            onClick={handleRemove}
            disabled={isPending}
          >
            {isPending ? (
              <span
                className="size-4 animate-spin rounded-full border-2 border-red-600 border-t-transparent"
                aria-hidden="true"
              />
            ) : (
              <TrashIcon className="size-4" />
            )}
            Remove
          </button>
        </div>
      </div>
    </article>
  )
}

export default CartDrawerProductCard
