import axios from "axios";

let instance = axios.create ( {
    baseURL: "https://api.themoviedb.org/3/"
} )

const apiKey = "a337355c1e4685187084c79971e5c126"


export const MovieDBApi = {
    getPopular (currentPage) {
        return instance.get (`movie/popular?api_key=${apiKey}&page=${currentPage}`);
    },
    getTopRated (currentPage) {
        return instance.get (`movie/top_rated?api_key=${apiKey}&page=${currentPage}`)
    },
    getMovieBlock (movieId) {
        return instance.get (`movie/${movieId}?api_key=${apiKey}`);
    },
    getNowPlaying () {
        return instance.get (`movie/now_playing?api_key=${apiKey}`);
    },
    getImages (movieId) {
        return instance.get (`movie/${movieId}/images?api_key=${apiKey}`)
    },
    getVideos (movieId) {
        return instance.get (`movie/${movieId}/videos?api_key=${apiKey}`)
    },
    getSearch (query) {
        return instance.get (`search/movie?api_key=${apiKey}&query=${query}`);
    },
    getLatest () {
        return instance.get (`/movie/upcoming?api_key=${apiKey}`);
    },
}