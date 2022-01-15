import { combineReducers } from 'redux';
import {
    ADD_MOVIES,
    ADD_FAVOURITE,
    UN_FAVOURITE,
    SET_SHOW_FAVOURITES,
    ADD_SEARCH_RESULT,
    ADD_MOVIE_TO_LIST
} from '../actions';

const initialMoviesState = {
    list: [],
    favourites: [],
    showFavourites: false

}
export function movies(state = initialMoviesState, action) {

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
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list]
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
const initialSearchState = {
    result: {}
};

export function search(state = initialSearchState, action) {
    switch (action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie
            }
        default:
            return state;
    }
}

export default combineReducers({
    movies,
    search
});