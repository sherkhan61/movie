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
                    <NavLink to = {"/movieapp"}>
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
                            <NavLink className = {s.link} to = {"/toprated"} >Top Rated</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className = {s.link} to = {"/popular"} >Popular</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        /*<div className = {s.row} >
            <div className = {s.title} >
                <NavLink to = {"/movieapp"} className = {s.title} >
                    <img src = {logo} />
                </NavLink>
            </div>
            <div>
                <NavLink to = "/search" >
                    <img src = {searchIcon} />
                </NavLink>
            </div>
            <div className = {s.link__row} >
                <div>
                    <NavLink className = {s.link} to = {"/toprated"} >Top Rated</NavLink>
                </div>
                <div>
                    <NavLink className = {s.link} to = {"/popular"} >Popular</NavLink>
                </div>
            </div>
            <div className = {s.drop__down} >
                <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Menu
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                        <NavLink to = {"/toprated"} className="dropdown-item">Top Rated</NavLink>
                        <NavLink to = {"/popular"} className="dropdown-item">Popular</NavLink>
                    </div>
                </div>
            </div>
        </div>*/


    )
}

export default Header;