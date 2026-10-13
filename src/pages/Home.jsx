import HeroSlider from "../components/HeroSlider";
import CategorySlider from "../components/CategorySlider";
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

const Home = () => (
  <>
    <div id="home-page-main-wrapper">
      <title>ClassyShop | Big Mega Store</title>
      <HeroSlider slides={HOME_SLIDES} options={HOME_SLIDER_OPTIONS} />
      <CategorySlider categories={CATEGORY_LINKS} />
    </div>
  </>
);

export default Home;
