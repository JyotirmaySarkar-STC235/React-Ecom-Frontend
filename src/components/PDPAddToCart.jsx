import { useState } from 'react'

const PDPAddToCart = ({ maxQuantity = 10 }) => {
  const [quantity, setQuantity] = useState(1)

  const decrease = () => setQuantity((value) => Math.max(1, value - 1))
  const increase = () => setQuantity((value) => Math.min(maxQuantity, value + 1))

  return (
    <div className="pdp-add-to-cart flex items-center gap-3">
      <div className="quantity-selector flex h-11 shrink-0 items-center rounded-full border border-gray-800 px-3">
        <button
          type="button"
          className="quantity-selector-button flex size-8 items-center justify-center text-lg text-gray-800 disabled:opacity-40"
          onClick={decrease}
          disabled={quantity <= 1}
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
          disabled={quantity >= maxQuantity}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <button
        type="button"
        className="add-to-cart-button h-11 flex-1 rounded-full bg-orange-500 px-6 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-orange-600"
      >
        Add to cart
      </button>
    </div>
  )
}

export default PDPAddToCart
