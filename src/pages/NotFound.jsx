import { Link } from 'react-router-dom'

const NotFound = () => (
  <section className="flex flex-col items-center gap-4 py-16 text-center">
    <title>Page not found | ClassyShop</title>
    <p className="text-6xl font-extrabold text-red-500">404</p>
    <h1 className="text-2xl font-semibold">Page not found</h1>
    <p className="text-gray-600">The page you are looking for doesn't exist or has been moved.</p>
    <Link to="/" className="rounded-md bg-red-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-red-600">
      Back to home
    </Link>
  </section>
)

export default NotFound
