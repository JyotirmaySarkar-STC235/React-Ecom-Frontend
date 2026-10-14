import React from 'react'

const ProductDetailsPage = () => {
    const { id } = useParams();
  return (
    <div>Product Details Page : {id}</div>
  )
}

export default ProductDetailsPage