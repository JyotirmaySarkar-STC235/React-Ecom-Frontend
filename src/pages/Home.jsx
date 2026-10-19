import { lazy, Suspense } from "react";
import HeroSlider from "../components/HeroSlider";
import CategorySlider from "../components/CategorySlider";
import FreeShippingBanner from "../components/FreeShippingBanner";
import { CATEGORY_LINKS } from "../utils/categories";
import { FashionCollection, FootwearCollection, BagsCollection } from "../utils/collections";

const StoryBanner = lazy(() => import("../components/StoryBanner"));
const TabSlider = lazy(() => import("../components/TabSlider"));
const CollectionProducts = lazy(() => import("../components/CollectionProducts"));

// ponytail: label-only tabs render skeletons until real collection data (with products) is passed in.
const POPULAR_TABS = CATEGORY_LINKS.slice(1).map(({ label }) => ({ id: `${label.toLowerCase()}-collection`, label }));

const SectionFallback = () => (
  <div className="px-4 py-8" aria-busy="true" aria-label="Loading section">
    <div className="h-40 animate-pulse rounded-md bg-gray-100" />
  </div>
);

const HOME_SLIDES = [
  { desktop: "/desktop-banner-1.webp", mobile: "/mobile-banner-1.webp", alt: "Hero Slider Image 1" },
  { desktop: "/desktop-banner-1.webp", mobile: "/mobile-banner-1.webp", alt: "Hero Slider Image 2" },
  { desktop: "/desktop-banner-1.webp", mobile: "/mobile-banner-1.webp", alt: "Hero Slider Image 3" },
];

const HOME_SLIDER_OPTIONS = {
  className: "mySwiper",
  autoplay: { delay: 2500 },
};

const STORY_BANNERS = {
  main: {
    desktop: "https://placehold.co/1020x502",
    mobile: "https://placehold.co/600x400",
    alt: "Woman wearing a yellow top",
    subtitle: "Big saving days sale",
    title: "Rnn Saree New Pakhi lata Cotton Silk Dhakai Jamdani Saree",
    priceLabel: "Starting At Only",
    price: "₹651.00",
    to: "/category/fashion/women",
  },
  side: [
    {
      desktop: "https://placehold.co/500x250",
      mobile: "https://placehold.co/600x300",
      alt: "Modern living room furniture",
      title: "Home banner",
      price: "₹1200",
      to: "/category/home",
    },
    {
      desktop: "https://placehold.co/500x250",
      mobile: "https://placehold.co/600x300",
      alt: "Smartphone",
      title: "Buy Mobiles with low price",
      price: "₹12000",
      to: "/category/electronics/mobiles",
    },
  ],
};

const Home = () => {
  return (
    <div id="home-page-main-wrapper">
      <title>ClassyShop | Big Mega Store</title>
      <HeroSlider id="home-hero-slider" slides={HOME_SLIDES} options={HOME_SLIDER_OPTIONS} />
      <CategorySlider id="home-category-slider" categories={CATEGORY_LINKS} />
      <FreeShippingBanner id="home-free-shipping-banner" />
      <Suspense fallback={<SectionFallback />}>
        <StoryBanner id="home-story-banner" {...STORY_BANNERS} />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TabSlider id="home-popular-products" firstTabColection={FashionCollection} reseCollectionHandles={POPULAR_TABS} />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CollectionProducts id={`home-${FashionCollection.id}`} collection={FashionCollection} />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CollectionProducts id={`home-${BagsCollection.id}`} collection={BagsCollection} />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CollectionProducts id={`home-${FootwearCollection.id}`} collection={FootwearCollection} />
      </Suspense>
    </div>
  )
}

export default Home;
