import { Link } from 'react-router-dom'

const BannerCard = ({ banner, isMain, className = '' }) => {
  const { desktop, mobile, alt = '', subtitle, title, priceLabel, price, to } = banner

  return (
    <article className={`relative overflow-hidden rounded-md bg-gray-100 ${className}`}>
      <picture>
        <source srcSet={desktop} media="(min-width: 768px)" />
        <img
          src={mobile}
          alt={alt}
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </picture>
      <div
        className={`content absolute inset-y-0 flex flex-col justify-center gap-2 p-4 md:gap-3 md:p-6 ${isMain ? 'right-0 w-1/2' : 'left-0 w-3/5'}`}
      >
        {subtitle && <p className="text-sm text-gray-700 md:text-base">{subtitle}</p>}
        <h2 className={`font-semibold text-gray-800 ${isMain ? 'line-clamp-2 text-lg md:line-clamp-3 md:text-2xl lg:text-3xl' : 'line-clamp-2 text-base'}`}>
          {title}
        </h2>
        <p className="flex flex-wrap items-center gap-x-2 text-sm text-gray-700">
          {priceLabel}
          <span className={`font-semibold text-red-500 ${isMain ? 'text-xl md:text-2xl' : 'text-lg'}`}>{price}</span>
        </p>
        <Link
          to={to}
          aria-label={`Shop now: ${title}`}
          className={
            isMain
              ? 'w-fit rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white uppercase transition-colors hover:bg-red-600'
              : 'w-fit text-sm font-medium text-gray-800 uppercase underline underline-offset-4 hover:text-red-500'
          }
        >
          Shop now
        </Link>
      </div>
    </article>
  )
}

const StoryBanner = ({ id = 'story-banner-main-wrapper', main, side = [] }) => {
  if (!main) return null

  return (
    <section id={id} aria-label="Featured offers" className="w-full flex-col lg:flex-row gap-4 flex p-4">
      <BannerCard
        banner={main}
        isMain
        className="main-story-banner aspect-3/2 w-full md:aspect-[1020/502] lg:w-[70%]"
      />
      {side.length > 0 && (
        <div className="side-story-banners flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] lg:flex-1 lg:flex-col lg:overflow-visible">
          {side.map((banner) => (
            <BannerCard
              key={banner.title}
              banner={banner}
              className="aspect-2/1 w-4/5 shrink-0 snap-start sm:w-auto sm:flex-1 sm:shrink lg:aspect-auto"
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default StoryBanner
