import HeroSlider from "../components/HeroSlider";
import CategorySlider from "../components/CategorySlider";
import FreeShippingBanner from "../components/FreeShippingBanner";
import StoryBanner from "../components/StoryBanner";
import { CATEGORY_LINKS } from "../utils/categories";

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

const Home = () => (
  <>
    <div id="home-page-main-wrapper">
      <title>ClassyShop | Big Mega Store</title>
      <HeroSlider slides={HOME_SLIDES} options={HOME_SLIDER_OPTIONS} />
      <CategorySlider categories={CATEGORY_LINKS} />
      <FreeShippingBanner />
      <StoryBanner {...STORY_BANNERS} />
    </div>
  </>
);

export default Home;
