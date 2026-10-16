import { useParams } from 'react-router-dom'
import { product1 } from '../utils/products'
import ProductImageGallery from '../components/ProductImageGallery'
import ProductDetails from '../components/ProductDetails'

const ProductDetailsPage = () => {
    const { id } = useParams();
    const product = product1;
  return (
    <section className="product">
      <div className="main-details flex flex-col lg:flex-row">
        <ProductImageGallery classes="w-full lg:w-[unset] grow-1" images={product.images}/>
        <ProductDetails classes="w-full lg:w-[600px]"/>
      </div>
      <div className="qna"></div>
      <div className="related-products"></div>
    </section>

  )
}

export default ProductDetailsPage