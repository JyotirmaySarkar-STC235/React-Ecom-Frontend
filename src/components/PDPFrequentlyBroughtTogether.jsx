const PDPFrequentlyBroughtTogether = ({ products = [] }) => {
  if (!products.length) return null

  return (
    <section className="pdp-frequently-bought mt-8 px-4 py-6 md:px-6" aria-labelledby="frequently-bought-heading">
      <h2 id="frequently-bought-heading" className="mb-4 text-lg font-semibold text-gray-900 md:text-xl">
        Frequently bought together
      </h2>
      <ul className="flex flex-wrap gap-4">
        {products.map((product) => (
          <li key={product.id} className="text-sm text-gray-700">
            {product.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PDPFrequentlyBroughtTogether
