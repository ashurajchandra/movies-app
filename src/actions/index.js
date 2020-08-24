// {
//     type:'ADD_MOVIES',
//     movies: [m1,m2,m3]
// }
// {
//     type: 'DECREASE_COUNT'
// }

//ACTION TYPES
export const ADD_MOVIES = 'ADD_MOVIES';
//ACTION TYPES
export const ADD_FAVOURITE = 'ADD_FAVOURITE';

export const UN_FAVOURITE = 'UN_FAVOURITE';

export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';


//action creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite(movie) {
    return {
        type: ADD_FAVOURITE,
        movie
    }
}

export function removeFromFavourite(movie) {


    return {
        type: UN_FAVOURITE,
        movie
    }
}


export function setShowFavourites(value) {
    return {
        type: SET_SHOW_FAVOURITES,
        value
    }
}


