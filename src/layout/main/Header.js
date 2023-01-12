import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Header() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact="/" path={"/"} element={<div></div>}/>
                <Route path="*" element={
                    <div className="App">
                        <span>header</span>
                    </div>
                }/>
            </Routes>
        </BrowserRouter>
    );
}

export default Header;
