import $ from 'jquery';
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"; // basic
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/style.css"
import "./css/reset.css"
import axios from "axios";
import React, {useEffect, useReducer} from "react";
import SwiperButtonPrev from "./module/swiper/SwiperButtonPrev";
import SwiperButtonNext from "./module/swiper/SwiperButtonNext";
import LoadingSpinner from "./module/loading/LoadingSpinner";


function reducer(state, action) {
    switch (action.type) {
        // 발생할 수 있는 상황 LOADING, SUCCESS, ERROR에 대한 case를 만들어 줍니다.
        // 로딩중 상태 업데이트
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        // 불러오는데에 성공했을 때는 action.data를 저장해줍니다.
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null
            };
        // 에러가 발생하면 action.error를 전달해주겠습니다.
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function onMouseEnter(e){
    $(e.target).addClass("target");
    $(e.target).siblings("p").show();
}

function onMouseOut(e){
    $(e.target).removeClass("target");
    $(e.target).siblings("p").hide();
}

function setImageUrl(path){
    return "https://image.tmdb.org/t/p/original"+path;
}

function MovieBus() {

    const [backdropImg, setBackdropImg] = React.useState("");

    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const swiper = useSwiper();


    const getPopularMovies = async (pageIndex, countPerPage) => {
        //시작할 때 로딩중인 상태를 만들어줍니다.
        dispatch({type: 'LOADING'});
        try {
            const result = await axios.get(`https://api.themoviedb.org/3/discover/movie`,
            {
                params: {
                    "language":"ko-KR",
                    "api_key":"de0b88f9a20412d77f2029f0ce308f89",
                    "primary_release_date.gte": "2024-01-16",
                    "primary_release_date.lte": "2024-03-16",
                    "sort_by": "popularity.desc",
                }
            }
            );
            dispatch({type: 'SUCCESS', data: result.data.results});
            setBackdropImg(setImageUrl(result.data.results[0].backdrop_path));
        } catch (e) {
            dispatch({type: 'ERROR', error: e});
        }
    };


    const getSearchMovies = async (keyword) => {
        dispatch({type: 'LOADING'});
        try{
            const result = await axios.get(
                `https://api.themoviedb.org/3/search/movie`,
                {
                    params: {
                        "language":"ko-KR",
                        "api_key":"de0b88f9a20412d77f2029f0ce308f89",
                        "query": keyword,
                        "include_adult" : false
                    }
                }
            );

            dispatch({type: 'SUCCESS', data: result.data.results});
        } catch (e) {
            dispatch({type: 'ERROR', error: e});
        }
    }
    

    useEffect(() => {
        getPopularMovies(0, 30);
    }, []);

    const {loading, data: movies, error} = state;

    const searchMovies = () => {
        getSearchMovies($("#keywords").val());
    }

    const changeStillImage = (e) => {
        $("#backdropImg").css({'opacity':0})

        setTimeout(() => {
            $("#backdropImg").prop("src", $(e.target).data("backdrop"));
        }, 280)
        

        setTimeout(() => {
            $("#backdropImg").css({'opacity':1})
        }, 600)

    }

    return (
        <>
            <section className="visual">
                <div className="vis-img">
                    <img src={backdropImg} id="backdropImg"/>
                </div>
                <div className="layer"></div>
                <div className="layer-toB"></div>

                <div className="inner">
                    <div className="incon-box">


                        <div className="search">
                            <input type="text" name="keywords" id="keywords" placeholder="검색어를 입력하세요."
                                   onKeyDown={(e) => {
                                       if (e.key == "Enter") searchMovies(e)
                                   }}/>
                            <img src="./img/searchIcon.png" id="searchIcon" onClick={() => {
                                searchMovies()
                            }}/>
                        </div>


                        <div className="vis-intro">
                            <p>나만의 영화박스</p>
                            <p>
                                영화 속에서 찾는 감동과 재미 <br/>
                                당장 볼 수 없어 잊은 영화들 이곳에 모아두세요 <br/>
                                지금 바로 무비함에서 나만의 위시리스트를 만들어보세요!
                            </p>
                        </div>


                        <div className="vis-down">
                            <a href="#none" onClick={()=>{alert('준비중입니다.')}}>
                                어플 다운로드
                            </a>
                        </div>

                    </div>
                </div>
            </section>
            <section className="movie-bus">
                <div className="inner">
                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={3}
                                scrollbar={{draggable: true}}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                pagination
                                centeredSlides={false}
                                centerInsufficientSlides={true}
                                breakpoints={{
                                    768:{
                                        slidesPerView:4
                                    },
                                    1024:{
                                        slidesPerView:7
                                    }
                                }}
                            >
                                {
                                    movies != null ? movies.map((movie) =>
                                        movie.poster_path.toString().length > 0 ?
                                            <SwiperSlide key={movie.id} onMouseOver={onMouseEnter} onMouseOut={onMouseOut}>
                                                    <img src={setImageUrl(movie.poster_path)} data-backdrop={setImageUrl(movie.backdrop_path)} onClick={changeStillImage}/>
                                                    <p>{movie.title}</p>
                                            </SwiperSlide>
                                            : ""
                                    ) : <LoadingSpinner/>
                                }
                                <SwiperButtonNext></SwiperButtonNext>
                                <SwiperButtonPrev></SwiperButtonPrev>
                                <div className="swiper-pagination"></div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MovieBus;
