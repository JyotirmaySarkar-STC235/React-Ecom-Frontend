import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ProductCard from './ProductCard'

const BREAKPOINTS = {
  0: { slidesPerView: 2.2 },
  640: { slidesPerView: 3.2 },
  768: { slidesPerView: 4.2 },
  1024: { slidesPerView: 6.2 },
}

const CollectionProducts = ({ collection }) => {
  const { label, id, products = [] } = collection
  if (!products.length) return null

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="py-8 px-4 [--swiper-navigation-size:32px] [--swiper-theme-color:var(--color-gray-800)] [&_.swiper-button-disabled]:invisible [&_:is(.swiper-button-prev,.swiper-button-next)]:rounded-full [&_:is(.swiper-button-prev,.swiper-button-next)]:bg-white [&_:is(.swiper-button-prev,.swiper-button-next)]:p-2 [&_:is(.swiper-button-prev,.swiper-button-next)]:shadow-md"
    >
      <h2 id={`${id}-heading`} className="mb-4 text-lg font-semibold text-gray-800 md:text-xl">
        {label}
      </h2>
      <Swiper modules={[Navigation]} navigation spaceBetween={12} breakpoints={BREAKPOINTS}>
        {products.map((product, index) => (
          <SwiperSlide key={`${product.id}-${index}`} className="h-auto!">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default CollectionProducts
