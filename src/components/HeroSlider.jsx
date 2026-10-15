import { useEffect, useId, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const DEFAULT_AUTOPLAY = {
  delay: 2500,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
};

const HeroSlider = ({ id, slides = [], options = {} }) => {
  const fallbackId = useId();
  const wrapperRef = useRef(null);
  const swiperRef = useRef(null);
  const { autoplay, ...swiperOptions } = options;
  const autoplayOptions = autoplay === false ? false : { ...DEFAULT_AUTOPLAY, ...autoplay };
  const hasSlides = slides.length > 0;

  useEffect(() => {
    if (!wrapperRef.current) return;
    // INP risk: low — callback reads one boolean and starts/stops autoplay; no layout reads.
    const observer = new IntersectionObserver(([entry]) => {
      const swiper = swiperRef.current;
      if (!swiper?.params.autoplay?.enabled) return;
      if (entry.isIntersecting) swiper.autoplay.start();
      else swiper.autoplay.stop();
    });
    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [hasSlides]);

  if (!hasSlides) return null;

  return (
    <div id={id ?? fallbackId} ref={wrapperRef}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Autoplay]}
        navigation
        {...swiperOptions}
        autoplay={autoplayOptions}
      >
        {slides.map(({ desktop, mobile, alt = "" }, index) => (
          <SwiperSlide key={index}>
            <picture>
              <source srcSet={desktop} media="(min-width: 769px)" width="1400" height="694" />
              <source srcSet={mobile} media="(max-width: 768px)" width="475" height="780" />
              <img
                src={desktop}
                alt={alt}
                width="1400"
                height="694"
                className="h-auto w-full"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding={index === 0 ? "sync" : "async"}
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
