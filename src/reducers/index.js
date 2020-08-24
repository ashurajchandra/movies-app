import { ADD_MOVIES, ADD_FAVOURITE, UN_FAVOURITE, SET_SHOW_FAVOURITES } from '../actions';

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false

}
export default function movies(state = initialMoviesState, action) {
    // console.log('adding movies')
    // if (action.type === ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }


        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case UN_FAVOURITE:
            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favourites: filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites: action.value
            }

        default:
            return state;

    }
}
