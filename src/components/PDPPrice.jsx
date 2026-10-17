const formatPrice = (value) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value)

const PDPPrice = ({ price = 0, compareAtPrice = 0 }) => {
  const hasDiscount = compareAtPrice > price
  const discountPercentage = hasDiscount ? Math.round((1 - price / compareAtPrice) * 100) : 0

  return (
    <div className="pdp-price flex flex-wrap items-center gap-2">
      <span className="price text-2xl font-bold text-gray-900 md:text-3xl">{formatPrice(price)}</span>
      {hasDiscount && (
        <span className="compare-at-price text-sm text-gray-400 line-through md:text-base">{formatPrice(compareAtPrice)}</span>
      )}
      {discountPercentage > 0 && (
        <span className="discount-percentage rounded-md bg-emerald-600 px-2 py-0.5 text-xs font-semibold tracking-wide text-white uppercase">
          {discountPercentage}% off
        </span>
      )}
    </div>
  )
}

export default PDPPrice
