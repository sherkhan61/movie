import React, {useEffect} from "react";
import {Preloader} from "../../ui/preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {getImages, getResults} from "./modules/actions";
import useReactRouter from 'use-react-router';
import Trailer from "../trailer/Trailer";
import s from "./Block.module.scss";

const Block = () => {

    const dispatch = useDispatch();
    const {match} = useReactRouter();

    useEffect(() => {
        let movieId = match.params.movieId;
        dispatch(getResults(movieId));
        dispatch(getImages(movieId));
    }, [])

    const data = useSelector((state) => state.block.data);
    const block = useSelector((state) => state.block.block);
    const images = useSelector((state) => state.block.images);


    const backdropPath = "https://image.tmdb.org/t/p/original" + data.backdrop_path;

    for (let i = 0; i < 3; i++) {
    }

    return (
        <>
            {!data ?
                <Preloader/> :
                (
                    <div>
                        <div className={s.bg} style={{
                            backgroundImage: `url(${backdropPath})`,
                            width: "100%",
                            height: "780px",
                            backgroundRepeat: "no-repeat",
                            margin: "0 auto",
                            marginBottom: "100px",
                            backgroundPosition: "50% 50%",
                        }}>
                            <div className={s.title}>
                                {data.title}
                            </div>
                            <div className={s.text}>
                                {data.overview}
                            </div>
                        </div>
                        <div className={s.info}>
                            <div className={s.info__title}>
                                Info
                            </div>
                            <div className={s.genres}> Genres: &nbsp;
                                {data.genres ? data.genres.map(g => {
                                    return (
                                        <span key={g.id}>
                                {g.name},
                            </span>
                                    )
                                }) : null}
                            </div>
                            <div className={s.date}>
                                Release Date: {data.release_date},
                            </div>
                            <div className={s.runtime}>
                                Runtime: {data.runtime} minutes.
                            </div>
                            <div>

                            </div>
                        </div>
                        <div>
                            <div className={s.img__row}>
                                {images ? images.slice(0, 3).map(i => {
                                    return (
                                        <div key={i.file_path}>
                                            <img className={s.img_element} alt="imgElement"
                                                 src={`https://image.tmdb.org/t/p/w300/${i.file_path}`}/>
                                        </div>
                                    )
                                }) : null}
                            </div>
                        </div>
                        <div className={s.trailer}>
                            <Trailer/>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Block;