import { useState } from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ to, label, image }) => {
  const [hasImageError, setHasImageError] = useState(false)
  const showImage = image && !hasImageError

  return (
    <Link
      to={to}
      className="flex h-full flex-col items-center gap-3 rounded-md border border-gray-200 bg-white px-3 py-6 text-center transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:outline-none"
    >
      {showImage ? (
        <img
          src={image}
          alt=""
          width="56"
          height="56"
          loading="lazy"
          decoding="async"
          className="size-14 object-contain"
          onError={() => setHasImageError(true)}
        />
      ) : (
        <span className="size-14  bg-gray-100 skeleton" data-no-image aria-hidden="true" />
      )}
      <span className="text-sm text-gray-800">{label}</span>
    </Link>
  )
}

export default CategoryCard
