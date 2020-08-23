export default function movies(state = [], action) {
    console.log('adding movies')
    if (action.type === 'ADD_MOVIES') {
        return action.movies;
    }
    return state;
}