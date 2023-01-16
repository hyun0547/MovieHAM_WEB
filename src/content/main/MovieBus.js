import $ from 'jquery';
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/style.css"
import "./css/reset.css"
import axios from "axios";
import React, {useEffect, useReducer} from "react";

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

function MovieBus() {

    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const getMovies = async (searchType, keywords) => {
        //시작할 때 로딩중인 상태를 만들어줍니다.
        dispatch({ type: 'LOADING' });
        try {
            const result = await axios.get(
                "http://localhost:8080/movieHam/api/movie/search/" + "repRlsDate" + "?keywords=" + "2023"
            );
            dispatch({ type: 'SUCCESS', data: result.data.resultList });
        } catch (e) {
            dispatch({ type: 'ERROR', error: e });
        }
    };

    useEffect(() => {
        getMovies("test","test");
    }, []);

    const { loading, data: movies, error } = state;

    const searchMovies = (e) => {
        getMovies("title",e.target.value);
    }

    if(movies != null) {
        return (
            <>
                <section className="visual">
                    <div className="vis-img">
                        <img src="./img/visual09.jpg"/>
                    </div>
                    <div className="layer"></div>
                    <div className="layer-toB"></div>

                    <div className="inner">
                        <div className="incon-box">


                            <div className="search">
                                <input type="text" name="keywords" id="keywords" placeholder="검색어를 입력하세요." onKeyDown={(e)=>{if(e.key == "Enter")searchMovies(e) }} />
                                <img src="./img/searchIcon.png" id="test" onClick={() => {$("#keywords").dispatchEvent(new KeyboardEvent("keydown"), {key:"Enter"})}} />
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
                                <a href="#none">
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

                                    breakpoints={{
                                        768: {
                                            slidesPerView: 5,
                                        },
                                    }}
                                >
                                    {
                                        movies.map((movie) =>
                                            movie.posters.toString().length > 0 ?
                                                <SwiperSlide key={movie.docid}><img src={movie.posters.split('|')[0]}/></SwiperSlide>
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
                </section>
            </>
        );
    }
}

export default MovieBus;
