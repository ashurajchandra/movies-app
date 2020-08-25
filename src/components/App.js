import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from '../actions';
import { data as moviesList } from '../data';


class App extends React.Component {
  componentDidMount() {
    // const { store } = this.props;

    // store.subscribe(() => {
    //   console.log('updated');
    //   this.forceUpdate();
    //})
    //make api call
    // dispatch actions
    this.props.dispatch(addMovies(moviesList));

    console.log('STATE', this.props.store);

  }



  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    const index = movies.favourites.indexOf(movie);
    // console.log('index', index);
    // console.log('favourite', favourites);

    if (index !== -1) {
      //found the movie
      return true;
    }
    return false;

  }

  onChangeTab = (value) => {
    this.props.dispatch(setShowFavourites(value));
  };

  render() {
    const { movies, search } = this.props; // { movies: {}, search: {}}
    console.log('movies', movies);
    const { list, favourites, showFavourites } = movies;
    console.log('render', this.props);
    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar search={search} />

        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? `` : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ``}`} onClick={() => this.onChangeTab(true)}>Favourite</div>
          </div>

          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">No movies to display! </div> : null}
        </div>
      </div >
    );
  }
}
// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer >
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.movies
  };
}

const connectedAppComponent = connect(mapStateToProps)(App)

export default connectedAppComponent;
