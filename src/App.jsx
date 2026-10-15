import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ProductDetailsPage from './pages/ProductDetailsPage'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Help from './pages/Help'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
