import React, {lazy, Suspense} from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import {Preloader} from "./ui/preloader/Preloader";
import Home from "./features/home/Home";
import Block from "./features/block/Block";
import Search from "./features/search/Search";


const TopRated = lazy(() => import("./features/topRated/TopRated"));

const Popular = lazy(() => import("./features/popular/Popular"));




export const Routes = () => {

    return <Suspense fallback={<Preloader/>}>
        <Switch>
            <Route path = "/movieblock/:movieId" >
                <Block />
            </Route>
            <div className="container">
                <Route path = "/movie" >
                    <Home />
                </Route>
                <Route path = "/popular" >
                    <Popular />
                </Route>
                <Route path = "/toprated" >
                    <TopRated />
                </Route>
                <Route path = "/search">
                    <Search />
                </Route>
                <Redirect exact from="/" to="/movie/"/>
                <Route render={() => (
                    <div>404 NOT FOUND</div>
                )}/>
            </div>
        </Switch>
    </Suspense>
};