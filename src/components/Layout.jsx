import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Overlay from './Overlay'
import CartDrawer from './CartDrawer'
import ProductDetailsPopup from './ProductDetailsPopup'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer id="footer" />
      <Overlay />
      <ProductDetailsPopup />
      <CartDrawer />
    </>
  )
}

export default Layout
