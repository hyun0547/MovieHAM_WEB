import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Outlet } from "react-router-dom";


const visual = ReactDOM.createRoot(document.getElementById('visual'));
visual.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const movieBus = ReactDOM.createRoot(document.getElementById('movie-bus'));
// movieBus.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
