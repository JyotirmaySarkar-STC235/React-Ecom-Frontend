import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MyCollection } from '../utils/collections'
import { FILTER_PRODUCT_KEYS, filters as filtersData } from '../utils/filters'
import CollectionFilters from '../components/CollectionFilters'
import SortPanel from '../components/SortPanel'
import ProductCard from '../components/ProductCard'

const sortProducts = (products, sortValue) => {
  const next = [...products]
  switch (sortValue) {
    case 'price-asc':
      return next.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return next.sort((a, b) => b.price - a.price)
    case 'name-asc':
      return next.sort((a, b) => a.name.localeCompare(b.name))
    case 'name-desc':
      return next.sort((a, b) => b.name.localeCompare(a.name))
    default:
      return next
  }
}

const filterProducts = (products, selectedFilters) => {
  const activeGroups = Object.entries(selectedFilters).filter(([, values]) => values?.length)
  if (!activeGroups.length) return products

  return products.filter((product) =>
    activeGroups.every(([label, values]) => {
      const productKey = FILTER_PRODUCT_KEYS[label]
      if (!productKey) return true
      const productValue = product[productKey]
      if (productValue == null) return true
      return values.some((value) => String(productValue).toLowerCase() === String(value).toLowerCase())
    }),
  )
}

const CollectionsPage = () => {
  const { handle } = useParams()
  const collection = MyCollection
  const filterGroups = filtersData.filters
  const [selectedFilters, setSelectedFilters] = useState({})
  const [sortValue, setSortValue] = useState('featured')

  const products = useMemo(() => {
    const filtered = filterProducts(collection.products ?? [], selectedFilters)
    return sortProducts(filtered, sortValue)
  }, [collection.products, selectedFilters, sortValue])

  const resultCount = products.length
  const pageTitle = collection.label || handle || 'Collection'

  return (
    <section className="collection-main-wrapper mx-auto max-w-7xl px-4 py-6">
      <div className="collection-banner mb-6 overflow-hidden rounded-xl bg-[#f8f4e8]">
        <div className="flex min-h-28 flex-col justify-center px-6 py-8 md:min-h-36 md:px-10">
          <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">Collection</p>
          <h1 className="mt-1 text-2xl font-bold text-gray-900 md:text-3xl">{pageTitle}</h1>
        </div>
      </div>

      <div className="collection-body flex flex-col gap-6 lg:flex-row lg:items-start">
        <CollectionFilters
          filterGroups={filterGroups}
          selected={selectedFilters}
          onChange={setSelectedFilters}
        />

        <div className="collection-content min-w-0 flex-1">
          <div className="collection-header mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-gray-500">
              {resultCount} {resultCount === 1 ? 'Result' : 'Results'} found
            </p>
            <SortPanel value={sortValue} onChange={setSortValue} />
          </div>

          {resultCount === 0 ? (
            <p className="py-16 text-center text-sm text-gray-500">No products match your filters.</p>
          ) : (
            <ul className="collection-products grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
              {products.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} addToCartQuantity={1} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export default CollectionsPage
