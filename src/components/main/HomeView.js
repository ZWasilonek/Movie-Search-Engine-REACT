import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import MoviesList from '../../containers/MoviesList';
import bgMusic from '../../resources/music/cinematic-music-sketches-11-cinematic-percussion-sketch-116186.mp3'; //https://pixabay.com

class HomeView extends Component {
  componentDidMount = () => {
    this.props.movies.length === 0 && this.props.loadMovies();
  }

  render() {
    return (
      <>
        <audio controls autoPlay>
          <source src={bgMusic} type="audio/mpeg" />
        </audio>
        <MoviesList
          movies={this.props.movies}
          totalPages={this.props.totalPages}
          pageIndex={this.props.pageIndex}
          loadSelectedPage={this.props.loadMovies}
        />
      </>
    )
  }
}

export default withRouter(HomeView);