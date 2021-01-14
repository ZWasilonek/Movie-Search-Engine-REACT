import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import MoviesList from '../../containers/MoviesList';

class HomeView extends Component {
  componentDidMount = () => {
    this.props.movies.length === 0 && this.props.loadMovies();
  }

  render() {
    return (
      <>
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