import React from "react";
import ReactPlayer from "react-player";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import useReactRouter from "use-react-router";
import {getVideos} from "./modules/actions";
import s from "./Trailer.module.scss";

const Trailer = () => {

    const dispatch = useDispatch();
    const {match} = useReactRouter();

    useEffect ( () => {
        let movieId = match.params.movieId;
        dispatch(getVideos (movieId)) ;
    }, [] )

    const results = useSelector((state) => state.trailer.results);

    return (
        <div>
            <div className = {s.row} >
                {results.map (r => {
                    return (
                        <div className = {s.video__item} >
                            <ReactPlayer className = {s.video} url = {`https://www.youtube.com/watch?v=${r.key}`} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Trailer;