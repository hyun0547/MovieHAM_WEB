import { useSwiper } from "swiper/react";

const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return <div className="swiper-button-prev" onClick={() => swiper.slidePrev()}>{children}</div>;
};

export default SwiperButtonPrev;