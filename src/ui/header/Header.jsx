import React from "react";
import {NavLink} from "react-router-dom";
import searchIcon from "../assets/images/search.svg";
import logo from "../assets/images/logo.svg"
import s from "./Header.module.scss"


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className = {s.logo}>
                    <NavLink to = "/movie">
                        <img src = {logo} />
                    </NavLink>
                </div>
                <div className={s.search}>
                    <NavLink to = "/search" >
                        <img src={searchIcon}/>
                    </NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className = {s.link} to = "/toprated" >Top Rated</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className = {s.link} to = "/popular" >Popular</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;