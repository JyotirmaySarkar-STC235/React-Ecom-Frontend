# E-Com Frontend

ClassyShop storefront built with React, Vite, Tailwind CSS and React Router.

## Getting started

```bash
npm install
npm run dev
```

## Components

### HeroSlider

`src/components/HeroSlider.jsx` is a reusable banner slider built on [Swiper](https://swiperjs.com/react). It shows a different image on mobile and desktop, autoplays only while it is visible on screen, and can be used on any page.

#### Usage

1. Put the banner images in the `public` folder (for example `public/desktop-banner-1.webp` and `public/mobile-banner-1.webp`).
2. Define the slides (and optionally the options) **outside** the page component so they are not recreated on every render.
3. Render `<HeroSlider />` with those props.

```jsx
import HeroSlider from "../components/HeroSlider";

const HOME_SLIDES = [
  { desktop: "/desktop-banner-1.webp", mobile: "/mobile-banner-1.webp", alt: "New season sale" },
  { desktop: "/desktop-banner-2.webp", mobile: "/mobile-banner-2.webp", alt: "Free delivery" },
];

const HOME_SLIDER_OPTIONS = {
  className: "mySwiper",
  autoplay: { delay: 2500 },
};

const Home = () => <HeroSlider slides={HOME_SLIDES} options={HOME_SLIDER_OPTIONS} />;
```

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `slides` | `Array<{ desktop, mobile, alt? }>` | `[]` | One object per slide. If the array is empty, nothing is rendered. |
| `options` | `object` | `{}` | Any [Swiper option](https://swiperjs.com/swiper-api#parameters), spread onto `<Swiper>`. |
| `id` | `string` | `"hero-slider-main-wrapper"` | ID of the wrapper `div`. Give each slider a unique `id` when a page has more than one. |

Each slide object:

| Field | Required | Description |
|---|---|---|
| `desktop` | Yes | Image URL used above 768px. Also the fallback `src`. |
| `mobile` | Yes | Image URL used at 768px and below. |
| `alt` | No | Description of the banner for screen readers. Use `""` for purely decorative images. |

#### Options

- **Navigation arrows** are on by default. Pass `navigation: false` to hide them.
- **Autoplay** defaults to:

  ```js
  { delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }
  ```

  Values you pass in `options.autoplay` are merged with these defaults, so `{ autoplay: { delay: 5000 } }` only changes the delay. Pass `autoplay: false` to turn autoplay off.
- **Other Swiper settings** such as `loop`, `speed` or `className` can be added to `options` directly.

#### Examples

```jsx
// Autoplay off, no arrows
<HeroSlider id="category-banner" slides={CATEGORY_SLIDES} options={{ autoplay: false, navigation: false }} />

// Slower autoplay with looping
<HeroSlider id="offers-banner" slides={OFFER_SLIDES} options={{ autoplay: { delay: 5000 }, loop: true }} />
```

#### Behaviour

- **Autoplay pauses off-screen.** An `IntersectionObserver` stops autoplay when the slider scrolls out of view and resumes it when it comes back.
- **Image loading.** Only the first slide's image loads immediately with high priority; the rest load lazily.
- **Modules.** `Navigation` and `Autoplay` are registered inside the component, so pages don't need to import Swiper modules or CSS.
