import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './layout/main/Header';
import Main from './content/main/Main'
import Intro from './content/main/Intro'

function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Intro/>}></Route>
                    <Route path="/main" element={<Main/>}></Route>
                    <Route path="*" element={<span>notfound</span>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
