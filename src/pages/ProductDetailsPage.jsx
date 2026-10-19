import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { product1 } from '../utils/products'
import ProductImageGallery from '../components/ProductImageGallery'
import ProductDetails from '../components/ProductDetails'
import PDPFrequentlyBroughtTogether from '../components/PDPFrequentlyBroughtTogether'

const ProductDetailsPage = () => {
  const { id } = useParams()
  const mainDetailsRef = useRef(null)
  const detailsPanelRef = useRef(null)
  const product = product1
  const productDetails = {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    compareAtPrice: product.compareAtPrice,
    rating: product.rating,
    color: product.color,
    quantity: product.quantity,
  }

  useEffect(() => {
    const root = mainDetailsRef.current
    const detailsPanel = detailsPanelRef.current
    if (!root || !detailsPanel) return

    const desktopQuery = window.matchMedia('(min-width: 1024px)')

    // INP risk: low — only adjusts scrollTop on the details panel; no layout reads beyond scroll metrics.
    const onWheel = (event) => {
      if (!desktopQuery.matches) return
      if (detailsPanel.contains(event.target)) return

      const { scrollTop, scrollHeight, clientHeight } = detailsPanel
      const canScrollDown = scrollTop + clientHeight < scrollHeight - 1
      const canScrollUp = scrollTop > 0
      const scrollingDown = event.deltaY > 0
      const scrollingUp = event.deltaY < 0

      if ((scrollingDown && canScrollDown) || (scrollingUp && canScrollUp)) {
        event.preventDefault()
        detailsPanel.scrollTop += event.deltaY
      }
    }

    root.addEventListener('wheel', onWheel, { passive: false })
    return () => root.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <section className="product" data-product-id={id}>
      <title>{product.name} | ClassyShop</title>
      <div ref={mainDetailsRef} className="main-details relative flex flex-col lg:block">
        <div className="main-details__gallery w-full lg:w-[calc(100%-600px)]">
          <ProductImageGallery classes="w-full" images={product.images} />
        </div>
        <div
          ref={detailsPanelRef}
          className="main-details__details w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-[600px] lg:overflow-y-auto lg:overscroll-y-contain"
        >
          <ProductDetails classes="w-full lg:min-h-full" productDetails={productDetails} />
        </div>
      </div>
      <PDPFrequentlyBroughtTogether products={[]} />
      <div className="qna" />
      <div className="related-products" />
    </section>
  )
}

export default ProductDetailsPage
