import { product1 as product1, product2, product3, product4, product5 } from './products'
// const Product1 = {
//     id: "product-1",
//     name: "Product from util",
//     description: "This is a product from utils collection",
//     price: 1000,
//     compareAtPrice: 1500,
//     image: "/product-image-1.jpg",
//     images: ["/product-image-1.jpg", "/product-image-2.jpg", "/product-image-3.jpg"],
//     rating: 4,
// }

// const Product2 = {
//     id: "product-2",
//     name: "Product2 from utils collection",
//     description: "This is a product from utils collection",
//     price: 2000,
//     compareAtPrice: 2500,
//     image: "/product-image-2.jpg",
//     images: ["/product-image-1.jpg", "/product-image-2.jpg", "/product-image-.3jpg"],
//     rating: 5,
// }
const FashionCollection = {
    label: "Fashion",
    id: "fashion-collection",
    products: [product1, product2, product3, product4, product5]
}
const BagsCollection = {
    label: "Bags",
    id: "bags-collection",
    products: [product1, product2, product3, product4, product5]
}
const FootwearCollection = {
    label: "Footwear",
    id: "footwear-collection",
    products: [product1, product2, product3, product4, product5]
}
const MyCollection = {
    label: "My Collection",
    id: "my-collection",
    products: [product1, product2, product3, product4, product5]
}
export  {
    FashionCollection,
    BagsCollection,
    FootwearCollection,
    MyCollection
}