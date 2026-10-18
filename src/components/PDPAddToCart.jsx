import { useState, useTransition } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice'

const PDPAddToCart = ({ maxQuantity = 10, product }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const [isPending, startTransition] = useTransition()

  const decrease = () => setQuantity((value) => Math.max(1, value - 1))
  const increase = () => setQuantity((value) => Math.min(maxQuantity, value + 1))

  const handleAddToCart = () => {
    if (!product?.id) return

    startTransition(async () => {
      await dispatch(addToCart({ ...product, quantity })).unwrap()
    })
  }

  return (
    <div className="pdp-add-to-cart flex items-center gap-3">
      <div className="quantity-selector flex h-11 shrink-0 items-center rounded-full border border-gray-800 px-3">
        <button
          type="button"
          className="quantity-selector-button flex size-8 items-center justify-center text-lg text-gray-800 disabled:opacity-40"
          onClick={decrease}
          disabled={isPending || quantity <= 1}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="quantity-selector-value min-w-6 text-center text-base font-medium text-gray-900" aria-live="polite">
          {quantity}
        </span>
        <button
          type="button"
          className="quantity-selector-button flex size-8 items-center justify-center text-lg text-gray-800 disabled:opacity-40"
          onClick={increase}
          disabled={isPending || quantity >= maxQuantity}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={isPending}
        aria-busy={isPending}
        className="add-to-cart-button flex h-11 flex-1 items-center justify-center rounded-full bg-orange-500 px-6 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-orange-600 disabled:cursor-wait disabled:opacity-80"
      >
        {isPending ? <span className="loading">Loading...</span> : <span>Add to cart</span>}
      </button>
    </div>
  )
}

export default PDPAddToCart
