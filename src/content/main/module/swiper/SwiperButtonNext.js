import { useSwiper } from "swiper/react";

const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <div className="swiper-button-next" onClick={() => swiper.slideNext()}>{children}</div>;
};

export default SwiperButtonNext;