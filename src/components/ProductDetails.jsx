import PDPHeader from './PDPHeader'
import PDPPrice from './PDPPrice'
import PDPAddToCart from './PDPAddToCart'
import ProductDescription from './ProductDescription'
import { StarIcon } from '../utils/icons'
import Accordion from './Accordion'

const ProductDetails = ({ classes = '', productDetails = {} }) => {
  let classList = 'product-details ' + classes
  const { name, id, price, compareAtPrice, color, rating = 0, description, quantity } = productDetails
  const cartProduct = { id, name, price, compareAtPrice, color }

  return (
    <div className={`${classList} flex flex-col gap-4 bg-[#fff5f1] p-4 md:gap-5 md:p-6`}>
      <PDPHeader name={name} id={id} />
      <div className="ratings flex flex-wrap items-center gap-2">
        <span className="star-rating inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-sm font-semibold text-gray-900">
          <StarIcon className="size-3.5 text-amber-400" />
          {rating}
        </span>
        <span className="rating-count text-sm text-gray-700 underline underline-offset-2">256 ratings</span>
      </div>
      <PDPPrice price={price} compareAtPrice={compareAtPrice} />
      {color && (
        <p className="product-color text-sm text-gray-900 md:text-base">
          Color: <span className="font-medium">{color}</span>
        </p>
      )}
      <PDPAddToCart maxQuantity={quantity || 10} product={cartProduct} />
      <Accordion heading="Product Details" body={description} />
    </div>
  )
}

export default ProductDetails
