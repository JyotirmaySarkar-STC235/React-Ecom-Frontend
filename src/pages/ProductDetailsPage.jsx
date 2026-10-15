import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
    const { id } = useParams();
  return (
    <div>Product Details Page : {id}</div>
  )
}

export default ProductDetailsPage