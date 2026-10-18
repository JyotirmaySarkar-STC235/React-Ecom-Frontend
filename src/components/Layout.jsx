import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Overlay from './Overlay'
import CartDrawer from './CartDrawer'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer id="footer" />
      <Overlay />
      <CartDrawer />
    </>
  )
}

export default Layout
