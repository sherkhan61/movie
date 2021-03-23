import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Footer, Header} from "./ui";
import {Routes} from "./Routes";
import './App.scss';


function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes/>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
