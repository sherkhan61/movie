import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getResults, popularActions} from "./modules/actions";
import s from "./Popular.module.scss"
import {NavLink} from "react-router-dom";
import {Preloader} from "../../ui/preloader/Preloader";

const Popular = () => {


    const dispatch = useDispatch();

    const results = useSelector((state) => state.popular.results);
    const currentPage = useSelector((state) => state.popular.currentPage);
    const pageSize = useSelector((state) => state.popular.pageSize);
    const totalPagesCount = useSelector((state) => state.popular.totalPagesCount);


    useEffect(() => {
        dispatch(getResults(currentPage));
    }, [currentPage])

    const onPageChanged = (pageNumber) => {
        dispatch(popularActions.setCurrentPage(pageNumber));
        getResults(currentPage);
    }


    let pages = [];
    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i);
    }

    return (
        <>
            {!results ?
                <Preloader/> : (
                    <div>
                        <div className={s.pages__row}>
                            <div className="btn-group mr-2" role="group" aria-label="First group">
                                {pages.map(p => {
                                    return (
                                        <button onClick={() => (onPageChanged(p))} type="button" key={p.number}
                                                className="btn btn-secondary">{p}</button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={s.main__row}>
                            {results ? results.map(r => {
                                return (
                                    <div className={s.movie__block} key={r.id}>
                                        <div className={s.row}>
                                            <div>
                                                <NavLink to={"/movieblock/" + r.id}>
                                                    <img alt="poster"
                                                         src={`https://image.tmdb.org/t/p/w200${r.poster_path}`}/>
                                                </NavLink>
                                            </div>
                                            <div className={s.text__block}>
                                                <div className={s.title}>
                                                    {r.title}
                                                </div>
                                                <div className={s.date}>
                                                    {r.release_date}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : null}
                        </div>
                        <div className={s.pages__row}>
                            <div className="btn-group mr-2" role="group" aria-label="First group">
                                {pages.map(p => {
                                    return (
                                        <button onClick={() => (onPageChanged(p))} type="button" key={p.number}
                                                className="btn btn-secondary">{p}</button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}

export default Popular