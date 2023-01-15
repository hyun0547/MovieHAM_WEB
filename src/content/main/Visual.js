
function Visual() {
    return (
        <>
            <div className="vis-img">
                <img src="./img/visual09.jpg" />
            </div>
            <div className="layer"></div>
            <div className="layer-toB"></div>
            
            <div className="inner">
                <div className="incon-box">


                    <div className="search">
                        <input type="text" name="" placeholder="검색어를 입력하세요." />
                        <img src="./img/searchIcon.png" />
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
        </>
    );
}

export default Visual;
