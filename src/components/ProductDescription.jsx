const ProductDescription = ({ description = '' }) => {
  if (!description) return null

  return (
    <div className="product-description-content">
      <p className="text-sm leading-relaxed text-gray-700 md:text-base">{description}</p>
    </div>
  )
}

export default ProductDescription
