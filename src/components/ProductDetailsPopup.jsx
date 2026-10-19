import { useEffect, useState, useTransition } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectProductPopupOpen, setProductPopupOpen, selectProduct } from '../store/slices/productPopup'
import { setOverlay } from '../store/slices/overlay'
import { addToCart } from '../store/slices/cartSlice'
import { CloseIcon, HeartIcon } from '../utils/icons'

const formatPrice = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)

const ProductDetailsPopup = () => {
  const isOpen = useSelector(selectProductPopupOpen)
  const product = useSelector(selectProduct)
  const dispatch = useDispatch()
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isPending, startTransition] = useTransition()

  const {
    id,
    name = '',
    description = '',
    price = 0,
    compareAtPrice = 0,
    image,
    images = [],
    rating = 0,
  } = product ?? {}

  const gallery = images.length > 0 ? images : image ? [image] : []
  const hasDiscount = compareAtPrice > price
  const discount = hasDiscount ? Math.round((1 - price / compareAtPrice) * 100) : 0
  const filledStars = Math.min(5, Math.max(0, Math.round(rating)))

  useEffect(() => {
    setActiveImage(0)
    setQuantity(1)
  }, [id])

  const onClose = () => {
    dispatch(setProductPopupOpen(false))
    dispatch(setOverlay(false))
  }

  const decrease = () => setQuantity((value) => Math.max(1, value - 1))
  const increase = () => setQuantity((value) => value + 1)

  const handleAddToCart = () => {
    if (!id) return
    startTransition(async () => {
      await dispatch(addToCart({ ...product, quantity })).unwrap()
    })
  }

  const handleBuyNow = () => {
    if (!id) return
    startTransition(async () => {
      await dispatch(addToCart({ ...product, quantity })).unwrap()
      onClose()
    })
  }

  return (
    <section
      id="product-details-popup"
      role="dialog"
      aria-modal="true"
      aria-label={name || 'Product details'}
      aria-hidden={!isOpen}
      data-open={isOpen || undefined}
      className={`fixed inset-0 z-[2] flex items-center justify-center p-3 transition-opacity duration-300 md:p-6 ${
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <div className="relative grid max-h-[90vh] w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-xl md:grid-cols-2">
        <button
          type="button"
          className="absolute top-3 right-3 z-10 rounded-full p-1.5 text-gray-700 transition-colors hover:bg-gray-100 hover:text-red-500"
          aria-label="Close product details"
          onClick={onClose}
        >
          <CloseIcon className="size-5" />
        </button>

        {!product ? (
          <p className="col-span-full p-10 text-center text-sm text-gray-500">No product selected.</p>
        ) : (
          <>
            <div className="flex flex-col gap-3 overflow-y-auto p-4 md:p-5">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
                {gallery[activeImage] && (
                  <img
                    src={gallery[activeImage]}
                    alt={name}
                    className="size-full object-cover"
                    width="600"
                    height="600"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                )}
                <button
                  type="button"
                  className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition-colors hover:text-red-500"
                  aria-label={`Add ${name} to wishlist`}
                >
                  <HeartIcon className="size-5" />
                </button>
              </div>

              {gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto" role="list">
                  {gallery.map((src, index) => {
                    const isActive = index === activeImage
                    return (
                      <button
                        key={`${src}-${index}`}
                        type="button"
                        role="listitem"
                        aria-label={`View image ${index + 1}`}
                        aria-current={isActive ? 'true' : undefined}
                        data-active={isActive || undefined}
                        onClick={() => setActiveImage(index)}
                        className={`size-16 shrink-0 overflow-hidden rounded-lg border-2 bg-gray-100 transition-colors ${
                          isActive ? 'border-gray-900' : 'border-transparent'
                        }`}
                      >
                        <img
                          src={src}
                          alt=""
                          className="size-full object-cover"
                          width="64"
                          height="64"
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4 overflow-y-auto border-t border-gray-100 p-4 md:border-t-0 md:border-l md:p-6">
              <div className="flex flex-col gap-2 pr-8">
                <h2 className="text-xl font-bold text-gray-900 md:text-2xl">{name}</h2>
                <p className="inline-flex items-center gap-1 text-sm" role="img" aria-label={`Rated ${rating} out of 5`}>
                  <span className="text-amber-400">{'★'.repeat(filledStars)}</span>
                  <span className="text-gray-300">{'★'.repeat(5 - filledStars)}</span>
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xl font-bold text-gray-900">{formatPrice(price)}</span>
                  {hasDiscount && (
                    <>
                      <s className="text-sm text-gray-400">
                        <span className="sr-only">Original price </span>
                        MRP {formatPrice(compareAtPrice)}
                      </s>
                      <span className="text-sm font-medium text-red-500">({discount}% Off)</span>
                    </>
                  )}
                </div>
                <p className="text-xs font-medium text-emerald-600">inclusive of all taxes</p>
              </div>

              {description && (
                <p className="line-clamp-3 text-sm text-gray-600">{description}</p>
              )}

              <div className="mt-auto flex flex-col gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 items-center rounded-full bg-gray-100 px-3">
                    <button
                      type="button"
                      className="flex size-8 items-center justify-center text-lg text-gray-800 disabled:opacity-40"
                      onClick={decrease}
                      disabled={isPending || quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="min-w-6 text-center text-base font-medium text-gray-900" aria-live="polite">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      className="flex size-8 items-center justify-center text-lg text-gray-800 disabled:opacity-40"
                      onClick={increase}
                      disabled={isPending}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={handleBuyNow}
                    disabled={isPending}
                    aria-busy={isPending}
                    className="flex h-12 items-center justify-center rounded-xl bg-[#1e3a5f] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#162d4a] disabled:cursor-wait disabled:opacity-80"
                  >
                    {isPending ? 'Loading...' : 'Buy Now'}
                  </button>
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={isPending}
                    aria-busy={isPending}
                    className="flex h-12 items-center justify-center rounded-xl border-2 border-[#1e3a5f] bg-white px-4 text-sm font-semibold text-[#1e3a5f] transition-colors hover:bg-gray-50 disabled:cursor-wait disabled:opacity-80"
                  >
                    {isPending ? 'Loading...' : 'Add To Cart'}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default ProductDetailsPopup
