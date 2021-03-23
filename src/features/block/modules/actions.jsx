import {MovieDBApi} from "../../../api/movieDBApi";


export const blockActions = {
    setData: (data) => ( { type: "SET_DATA", data } ),
    setBlock: (block) => ( { type: "SET_BLOCK", block } ),
    setImages: (images) => ( { type: "SET_IMAGES", images } )
}


export const getResults = (movieId) => (dispatch) => {
    MovieDBApi.getMovieBlock (movieId)
        .then (response => {
            dispatch (blockActions.setData (response.data))
        })
}

export const getImages = (movieId) => (dispatch) => {
    MovieDBApi.getImages (movieId)
        .then (response => {
            dispatch (blockActions.setImages (response.data.backdrops))
        })
}