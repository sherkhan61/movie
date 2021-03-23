import React, {useState} from "react";
import {NavLink, Redirect} from "react-router-dom";
import s from "../popular/Popular.module.scss";
import style from "./Search.module.scss";
import axios from "axios";



const Search = () => {

    const [query, setQuery] = useState ("");
    const [results, setResults] = useState ([]);

    const onChange = (e) => {
        setQuery (e.target.value);
        return <Redirect to = {"/search"} />
    }

    const getData = (e) => {
        if (e.key === "Enter") {
            axios.get (`https://api.themoviedb.org/3/search/movie?api_key=59b515f14ca7817fa52949d84c435157&query=${query}`)
                .then (response => {
                    setResults (response.data.results);
                })
        }
    }

    return (
        <div>
            <div>
                <input autoFocus = {true} placeholder = "Search for a movie..." className = {style.input} onKeyPress = {getData} onChange = {onChange} type = "text" value = {query} />
            </div>
            <div className = {s.main__row} >
                {results ? results.map (r => {
                    return (
                        <div className = {s.movie__block} key = {r.id} >
                            <div className = {s.row} >
                                <div>
                                    <NavLink to = {"/movieblock/" + r.id} >
                                        <img alt = "poster" src = {`https://image.tmdb.org/t/p/w200${r.poster_path}`} />
                                    </NavLink>
                                </div>
                                <div className = {s.text__block} >
                                    <div className = {s.title} >
                                        {r.title}
                                    </div>
                                    <div className = {s.date} >
                                        {r.release_date}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) : null }
            </div>
        </div>
    )
}

export default Search;