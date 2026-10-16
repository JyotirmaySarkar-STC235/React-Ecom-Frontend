import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const ProductImageGallery = ({ classes = '', images = [] }) => {
  let classList = 'product-image-gallery ' + classes
  const paginationRef = useRef(null)

  if (!images.length) return null

  return (
    <div className={classList}>
      <div ref={paginationRef} className="product-image-gallery__thumbs" />
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        observer
        observeParents
        onBeforeInit={(swiper) => {
          swiper.params.pagination.el = paginationRef.current
        }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
          renderBullet(index, className) {
            const src = images[index]
            return `<button type="button" class="${className}" aria-label="View image ${index + 1}">
              <img src="${src}" alt="" width="64" height="64" loading="lazy" decoding="async" />
            </button>`
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={`${src}-${index}`}>
            <div className="aspect-square overflow-hidden rounded-md bg-gray-100">
              <img
                src={src}
                alt={`Product image ${index + 1}`}
                className="size-full object-cover"
                width="900"
                height="900"
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                decoding={index === 0 ? 'sync' : 'async'}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductImageGallery
