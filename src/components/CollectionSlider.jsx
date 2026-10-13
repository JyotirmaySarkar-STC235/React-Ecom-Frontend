import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import BannerCard from './BannerCard'

const BREAKPOINTS = {
  0: { slidesPerView: 1.2 },
  640: { slidesPerView: 2 },
  768: { slidesPerView: 3 },
  1024: { slidesPerView: 4 },
}

const CollectionSlider = ({ id = 'collection-slider', collections = [], options = {} }) => {
  if (!collections.length) return null

  return (
    <section
      id={id}
      aria-label="Shop collections"
      className="py-8 px-4 [--swiper-navigation-size:32px] [--swiper-theme-color:var(--color-gray-800)] [&_.swiper-button-disabled]:invisible [&_:is(.swiper-button-prev,.swiper-button-next)]:rounded-full [&_:is(.swiper-button-prev,.swiper-button-next)]:bg-white [&_:is(.swiper-button-prev,.swiper-button-next)]:p-2 [&_:is(.swiper-button-prev,.swiper-button-next)]:shadow-md"
    >
      <Swiper modules={[Navigation]} navigation spaceBetween={10} breakpoints={BREAKPOINTS} {...options}>
        {collections.map((collection) => (
          <SwiperSlide key={collection.title}>
            <BannerCard banner={collection} className="aspect-3/2" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default CollectionSlider
