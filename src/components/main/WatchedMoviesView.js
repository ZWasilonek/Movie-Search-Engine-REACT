import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MoviesList from '../../containers/MoviesList';

class WatchedMoviesView extends Component {
  componentWillMount() {
    this.props.loadSelectedPage();
  }
  render() {
    return (
      <>
        <MoviesList 
          movies={this.props.watchedMovies}
          totalPages={this.props.totalPages}
          pageIndex={this.props.pageIndex}
          loadSelectedPage={this.props.loadSelectedPage}
        />
      </>
    );
  };
}

export default withRouter(WatchedMoviesView);