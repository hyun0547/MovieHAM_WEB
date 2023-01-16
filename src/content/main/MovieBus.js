import $ from 'jquery';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/style.css"
import "./css/reset.css"
import axios from "axios";
import React from "react";


function MovieBus() {

    const [movies, setMovies] = React.useState([]);

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

    axios.get("http://localhost:8080/movieHam/api/movie/search/actorNm?keywords=%EA%B9%80")
        .then((result) => {
            setMovies(result.data.resultList);
        })
        .catch(() => {
            console.log("error")
        })

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
                            {
                                movies.map((movie) =>
                                    movie.posters.toString().length > 0?
                                    <SwiperSlide key={movie.docid}><img onMouseOver={mouseOver} onMouseOut={mouseOut}
                                                      src={movie.posters.split('|')[0]}/><p>영화이름1</p></SwiperSlide>
                                        : ""
                                )
                            }
                        </Swiper>
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
