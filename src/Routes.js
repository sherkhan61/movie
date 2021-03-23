import React, {lazy, Suspense} from 'react'
import { Route, Switch } from "react-router-dom";
import {Preloader} from "./ui/preloader/Preloader";
import Home from "./features/home/Home";
import Block from "./features/block/Block";


const TopRated = lazy(() => import("./features/topRated/TopRated").then(({TopRated}) => (
    {default: TopRated}
)));

const Popular = lazy(() => import("./features/popular/Popular").then(({Popular}) => (
    {default: Popular}
)));




export const Routes = () => {

    return <Suspense fallback={<Preloader/>}>
        <Switch>
            <Route path = "/movieblock/:movieId" render = { () => <Block /> } />
            <div className="container">
                <Route path = "/movieapp" render = { () => <Home /> } />
                <Route path = "/popular" render = { () => <Popular /> } />
                <Route path = "/toprated" render = { () => <TopRated /> } />
            </div>
        </Switch>
    </Suspense>
};