import HeroSlider from "../components/HeroSlider";

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
      <div className="width-full h-[1000px] bg-green-500"></div>
      <HeroSlider id="slider-2" slides={HOME_SLIDES} options={HOME_SLIDER_OPTIONS} />
    </div>
  </>
);

export default Home;
