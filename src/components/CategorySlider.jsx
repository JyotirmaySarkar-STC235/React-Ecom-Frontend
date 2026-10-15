import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import CategoryCard from './CategoryCard'
import { useId } from 'react'

const BREAKPOINTS = {
  0: { slidesPerView: 3 },
  640: { slidesPerView: 4 },
  768: { slidesPerView: 6 },
  1024: { slidesPerView: 8 },
}

const CategorySlider = ({ id, categories = [], options = {} }) => {
  const fallbackId = useId()
  if (!categories.length) return null
  return (
    <section
      id={id ?? fallbackId}
      aria-label="Shop by category"
      className="bg-gray-100 p-4 [--swiper-navigation-size:20px] [--swiper-theme-color:var(--color-gray-800)] [&_.swiper-button-disabled]:invisible"
    >
      <Swiper modules={[Navigation]} navigation spaceBetween={10} breakpoints={BREAKPOINTS} {...options}>
        {categories.map(({ to, label, image }) => (
          <SwiperSlide key={to} className="h-auto">
            <CategoryCard to={to} label={label} image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default CategorySlider
