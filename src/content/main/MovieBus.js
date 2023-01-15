import $ from 'jquery';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";


function MovieBus() {

    var mouseOver = (e) => {
        var $target = $(e.target); // $(event.target);

        $target.width($target.width() * 1.3);  // 확대
        $target.height($target.height() * 1.3);
        $target.addClass("target");
        $target.next("p").show();
    }

    var mouseOut = (e) =>{
        var $target = $(e.target); // $(event.target);

        $target.width($target.width() / 1.3);  // 축소
        $target.height($target.height() / 1.3);
        $target.removeClass("target");
        $target.next("p").hide();
    }

    return (
        <>
            <div className="inner">
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={3}
                            scrollbar={{ draggable: true }}
                            navigation
                            pagination={{ clickable: true }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            <SwiperSlide className="swiper-slide"><img onMouseOver={mouseOver} onMouseOut={mouseOut} src="./img/visual02.png"/><p>영화이름1</p></SwiperSlide>
                            <SwiperSlide className="swiper-slide"><img src="./img/visual03.jpg"/><p>영화이름2</p></SwiperSlide>
                            <SwiperSlide className="swiper-slide"><img src="./img/visual04.jpg"/><p>영화이름3</p></SwiperSlide>
                            <SwiperSlide className="swiper-slide"><img src="./img/visual05.jpg"/><p>영화이름4</p></SwiperSlide>
                            <SwiperSlide className="swiper-slide"><img src="./img/visual06.jpg"/><p>영화이름5</p></SwiperSlide>
                            <SwiperSlide className="swiper-slide"><img src="./img/visual07.jpg"/><p>영화이름6</p></SwiperSlide>
                            <SwiperSlide className="swiper-slide"><img src="./img/visual08.jpg"/><p>영화이름7</p></SwiperSlide>
                            <SwiperSlide className="swiper-slide"><img src="./img/visual09.jpg"/><p>영화이름8</p></SwiperSlide>
                            <SwiperSlide className="swiper-slide"><img src="./img/visual10.jpg"/><p>영화이름9</p></SwiperSlide>
                        </Swiper>
                        {/*<div className="swiper-slide"><img onMouseOver={mouseOver} onMouseOut={mouseOut} src="./img/visual02.png"/><p>영화이름1</p></div>*/}
                        {/*<div className="swiper-slide"><img src="./img/visual03.jpg"/><p>영화이름2</p></div>*/}
                        {/*<div className="swiper-slide"><img src="./img/visual04.jpg"/><p>영화이름3</p></div>*/}
                        {/*<div className="swiper-slide"><img src="./img/visual05.jpg"/><p>영화이름4</p></div>*/}
                        {/*<div className="swiper-slide"><img src="./img/visual06.jpg"/><p>영화이름5</p></div>*/}
                        {/*<div className="swiper-slide"><img src="./img/visual07.jpg"/><p>영화이름6</p></div>*/}
                        {/*<div className="swiper-slide"><img src="./img/visual08.jpg"/><p>영화이름7</p></div>*/}
                        {/*<div className="swiper-slide"><img src="./img/visual09.jpg"/><p>영화이름8</p></div>*/}
                        {/*<div className="swiper-slide"><img src="./img/visual10.jpg"/><p>영화이름9</p></div>*/}
                    </div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </>
    );
}

export default MovieBus;
