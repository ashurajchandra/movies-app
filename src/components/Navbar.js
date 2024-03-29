import React from 'react';
import { connect } from 'react-redux';
import { addMovieToList, handleMovieSearch } from '../actions'





class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            showSearchResult: false,
            searchText: ''
        }
    }


    handleAddToMovies = (movie) => {
        console.log('adding result to movie', movie);
        this.props.dispatch(addMovieToList(movie));
        this.setState({ showSearchResult: false });
    }

    handleChange = (e) => {
        console.log('in  nav onchange', this.state.searchText);
        this.setState({ searchText: [e.target.value] });
    }
    handleSearch = () => {

        const { searchText } = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
        this.setState({ showSearchResult: true })

    }

    render() {
        const { showSearchResult } = this.state;
        console.log('in nav props', this.props);
        const { result } = this.props.search;


        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                    {
                        showSearchResult &&
                        <div className='search-results'>
                            <div className='search-result'>
                                <img src={result.Poster} alt='search-pic' />
                                <div className='movie-info'>
                                    <span>{result.Title}</span>
                                    <button onClick={() => this.handleAddToMovies(result)}>add To Movies</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>

            </div>
        );
    }

}

function mapStateToProps({ search }) {
    return {

        search
    };
}



export default connect(mapStateToProps)(Navbar);
