import React, {lazy, Suspense} from 'react'
import { Route, Switch } from "react-router-dom";
import {Preloader} from "./ui/preloader/Preloader";
import Home from "./features/home/Home";
import Block from "./features/block/Block";


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
            </div>
        </Switch>
    </Suspense>
};