import { useId } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { PRODUCT_ADVERTISEMENT_SLIDER_BREAKPOINTS } from '../utils/sliders'

const ProductsAdvertisementSlider = () => {
    const defaultId = useId()
  return (
    <section id={defaultId} className="py-8 px-4">  </section>
  )
}

export default ProductsAdvertisementSlider