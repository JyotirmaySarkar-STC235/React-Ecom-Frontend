import React from 'react'

const ProductDetails = ({classes = ""}) => {
    let classList = "product-details " + classes;
  return (
    <div className={classList}>ProductDetails</div>
  )
}

export default ProductDetails