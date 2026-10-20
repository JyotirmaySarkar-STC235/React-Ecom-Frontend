import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ProductCard from './ProductCard'
import { PRODUCT_SLIDER_BREAKPOINTS } from '../utils/sliders'
import { useId } from 'react'

const CollectionProducts = ({ id, collection, showLabel = true }) => {
  const fallbackId = useId()
  const { label, products = [] } = collection
  if (!products.length) return null
  const sectionId = id ?? fallbackId
  const headingId = `${sectionId}-heading`

  return (
    <section
      id={sectionId}
      aria-labelledby={showLabel ? headingId : undefined}
      className="py-8 px-4 [--swiper-navigation-size:32px] [--swiper-theme-color:var(--color-gray-800)] [&_.swiper-button-disabled]:invisible [&_:is(.swiper-button-prev,.swiper-button-next)]:rounded-full [&_:is(.swiper-button-prev,.swiper-button-next)]:bg-white [&_:is(.swiper-button-prev,.swiper-button-next)]:p-2 [&_:is(.swiper-button-prev,.swiper-button-next)]:shadow-md"
    >
      {showLabel && (
        <h2 id={headingId} className="mb-4 text-lg font-semibold text-gray-800 md:text-xl">
          {label}
        </h2>
      )}
      <Swiper modules={[Navigation]} navigation spaceBetween={12} breakpoints={PRODUCT_SLIDER_BREAKPOINTS}>
        {products.map((product, index) => (
          <SwiperSlide key={`${product.id}-${index}`} className="h-auto!">
            <ProductCard product={product} addToCartQuantity={1}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default CollectionProducts
