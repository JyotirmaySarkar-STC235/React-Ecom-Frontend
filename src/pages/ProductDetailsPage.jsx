import { useParams } from 'react-router-dom'
import { product1 } from '../utils/products'
import ProductImageGallery from '../components/ProductImageGallery'
import ProductDetails from '../components/ProductDetails'
import PDPFrequentlyBroughtTogether from '../components/PDPFrequentlyBroughtTogether'

const ProductDetailsPage = () => {
  const { id } = useParams()
  const product = product1
  const productDetails = {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    compareAtPrice: product.compareAtPrice,
    rating: product.rating,
    color: product.color,
    quantity: product.quantity,
  }

  return (
    <section className="product" data-product-id={id}>
      <title>{product.name} | ClassyShop</title>
      <div className="main-details flex flex-col lg:flex-row">
        <ProductImageGallery classes="w-full lg:w-[unset] grow-1" images={product.images} />
        <ProductDetails classes="w-full shrink-0 lg:w-[600px]" productDetails={productDetails} />
      </div>
      <PDPFrequentlyBroughtTogether products={[]} />
      <div className="qna" />
      <div className="related-products" />
    </section>
  )
}

export default ProductDetailsPage
