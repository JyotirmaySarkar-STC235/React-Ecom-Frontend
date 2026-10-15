import { useState, useId } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CollectionProducts from './CollectionProducts'
import { PRODUCT_SLIDER_BREAKPOINTS } from '../utils/sliders'


const SKELETON_COUNT = 7

const SkeletonProductsSlider = () => (
  <div className="px-4 py-8" aria-busy="true" aria-label="Loading products">
    <Swiper spaceBetween={12} breakpoints={PRODUCT_SLIDER_BREAKPOINTS} allowTouchMove={false}>
      {Array.from({ length: SKELETON_COUNT }, (_, index) => (
        <SwiperSlide key={index}>
          <div className="flex animate-pulse flex-col overflow-hidden rounded-md border border-gray-200 bg-white" aria-hidden="true">
            <div className="aspect-square bg-gray-200" />
            <div className="flex flex-col gap-2 p-3">
              <div className="h-3 w-1/3 rounded bg-gray-200" />
              <div className="h-4 w-full rounded bg-gray-200" />
              <div className="h-3 w-1/2 rounded bg-gray-200" />
              <div className="h-4 w-3/4 rounded bg-gray-200" />
              <div className="mt-1 h-8 w-full rounded-md bg-gray-200" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
)

const TabSlider = ({
  id,
  title = 'Popular Products',
  subtitle = 'Do not miss the current offers until the end of March.',
  firstTabColection = {},
  reseCollectionHandles = [],
}) => {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = [firstTabColection, ...reseCollectionHandles]
  const activeCollection = tabs[activeTab]
  const fallbackId = useId()
  const sectionId = id ?? fallbackId
  const panelId = `${sectionId}-panel`

  return (
    <section id={sectionId} className="pt-8">
      <div className="flex flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">{title}</h2>
          <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
        </div>
        <div role="tablist" aria-label={title} className="flex overflow-x-auto [scrollbar-width:none] md:max-w-3/5">
          {tabs.map((collection, index) => {
            const isActive = index === activeTab
            return (
              <button
                key={collection.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={panelId}
                onClick={() => setActiveTab(index)}
                className={`shrink-0 border-b-2 px-4 py-3 text-sm font-medium uppercase transition-colors ${
                  isActive ? 'border-red-500 text-red-500' : 'border-transparent text-gray-700 hover:text-red-500'
                }`}
              >
                {collection.label}
              </button>
            )
          })}
        </div>
      </div>
      <div id={panelId} role="tabpanel" aria-label={activeCollection.label}>
        {activeCollection.products?.length ? (
          <CollectionProducts key={activeCollection.id} collection={activeCollection} showLabel={false} />
        ) : (
          <SkeletonProductsSlider />
        )}
      </div>
    </section>
  )
}

export default TabSlider
