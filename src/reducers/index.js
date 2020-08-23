import { ADD_MOVIES } from '../actions';

const initialMoviesState = {
    list: [],
    favourites: []
}
export default function movies(state = initialMoviesState, action) {
    console.log('adding movies')
    if (action.type === ADD_MOVIES) {
        return {
            ...state,
            list: action.movies
        }
    }
    return state;
}
// const ADD_MOVIES = 'ADD_MOVIES';