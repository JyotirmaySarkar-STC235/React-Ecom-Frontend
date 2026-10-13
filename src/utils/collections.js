const Product1 = {
    id: "product-1",
    name: "Product from util",
    description: "This is a product from utils collection",
    price: 1000,
    compareAtPrice: 1500,
    image: "/product-image-1.jpg",
    images: ["/product-image-1.jpg", "/product-image-2.jpg", "/product-image-3.jpg"],
    rating: 4,
}

const Product2 = {
    id: "product-2",
    name: "Product2 from utils collection",
    description: "This is a product from utils collection",
    price: 2000,
    compareAtPrice: 2500,
    image: "/product-image-2.jpg",
    images: ["/product-image-1.jpg", "/product-image-2.jpg", "/product-image-.3jpg"],
    rating: 5,
}
const FashionCollection = {
    label: "Fashion",
    id: "fashion-collection",
    products: [Product1, Product2, Product1]
}
const BagsCollection = {
    label: "Bags",
    id: "bags-collection",
    products: [Product1, Product2, Product1]
}
const FootwearCollection = {
    label: "Footwear",
    id: "footwear-collection",
    products: [Product1, Product2, Product1]
}
export  {
    FashionCollection,
    BagsCollection,
    FootwearCollection,
}