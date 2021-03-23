import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {NavLink} from "react-router-dom";
import {Preloader} from "../../ui/preloader/Preloader";
import s from "./Home.module.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getResults} from "./modules/actions";


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getResults());
    }, [])

    const results = useSelector((state) => state.home.results);


    return (
        <>
            {!results ?
                <Preloader /> :
                (
                    <div>
                        <Carousel className = {s.main} >
                            {results.map ( r => {
                                return (
                                    <Carousel.Item className = {s.item} key = {r.id} >
                                        <img alt = "slider img" className = {s.poster} src = {`https://image.tmdb.org/t/p/original${r.backdrop_path}`} />
                                        <Carousel.Caption>
                                            <div className = {s.carousel__row}>
                                                <div className = {s.title} >
                                                    {r.title}
                                                </div>
                                                <div className = {s.overview} >
                                                    {r.overview}
                                                </div>
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            } )}
                        </Carousel>
                        <div>
                            <div className = {s.home__main__title} >
                                Upcoming Movies
                            </div>
                        </div>
                        <div className = {s.card__row} >
                            {results.slice (0, 3).map ( r => {
                                return (
                                    <div key = {r.id} className = {s.card} >
                                        <div>
                                            <NavLink to = {"/movieblock/" + r.id} >
                                                <img alt = "poster" src = {`https://image.tmdb.org/t/p/w300${r.poster_path}`} />
                                            </NavLink>
                                        </div>
                                        <div className = {s.card__title} >
                                            {r.title}
                                        </div>
                                    </div>
                                )
                            } )}
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default Home;