import {Link} from "react-router-dom";

function Intro() {
    return (
        <div>
            <span>인트로</span>
            <div>
                <Link to={"/main"}>메인</Link>
            </div>
        </div>
    );
}

export default Intro;
