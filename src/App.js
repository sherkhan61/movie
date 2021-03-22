import React from "react";
import './App.scss';

import {Header} from "./ui";
import {BrowserRouter} from "react-router-dom";



function App() {
    return (
        <>
            <BrowserRouter>
                <Header/>
            </BrowserRouter>

        </>
    );
}

export default App;
