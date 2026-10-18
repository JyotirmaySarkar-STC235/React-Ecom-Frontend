import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Overlay from './Overlay'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer id="footer" />
      <Overlay />
    </>
  )
}

export default Layout
