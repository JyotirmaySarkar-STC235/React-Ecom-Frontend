import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProductDetailsPage from './pages/ProductDetailsPage'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Orders from './pages/Orders'
import Help from './pages/Help'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products/:id', element: <ProductDetailsPage /> },
      { path: '/wishlist', element: <Wishlist /> },
      { path: '/cart', element: <Cart /> },
      { path: '/orders', element: <Orders /> },
      { path: '/help', element: <Help /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
