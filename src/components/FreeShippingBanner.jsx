import { TruckIcon } from '../utils/icons'
import { useId } from 'react'

const FreeShippingBanner = ({
  id,
  title = 'Free Shipping',
  description = 'Free Delivery Now On Your First Order and over $200',
  highlight = '- Only $200*',
}) => {
  const fallbackId = useId()
  return <section id={id ?? fallbackId} aria-label={title} className="py-8 px-4">
  <div className="flex flex-col items-center gap-2 rounded-md border border-red-400 px-4 py-4 text-center md:flex-row md:justify-between md:gap-6 md:px-6 md:text-left">
    <p className="flex items-center gap-3 text-lg font-medium uppercase">
      <TruckIcon className="size-10 shrink-0" />
      {title}
    </p>
    <p className="text-sm text-gray-700">{description}</p>
    <p className="text-xl font-bold">{highlight}</p>
  </div>
</section>
}

export default FreeShippingBanner