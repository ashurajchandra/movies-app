

//ACTION TYPES
export const ADD_MOVIES = 'ADD_MOVIES';
//ACTION TYPES
export const ADD_FAVOURITE = 'ADD_FAVOURITE';

export const UN_FAVOURITE = 'UN_FAVOURITE';

export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';

export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';


//action creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addMovieToList(movie) {
    let obj = {
        type: ADD_MOVIE_TO_LIST,
        movie
    }

    return obj;
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

export function addSearchResult(movie) {
    let obj = {
        type: ADD_SEARCH_RESULT,
        movie
    }

    return obj;
}

export function handleMovieSearch(searchText) {
    // console.log('hiting api', movie);
    return function (dispatch) {
        fetch(`http://www.omdbapi.com/?apikey=891a9115&t=${searchText}`)
            .then(response => response.json())
            .then(movie => {
                console.log('movie', movie);
                dispatch(addSearchResult(movie));
            })
    }
}




