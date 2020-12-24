import React, { Component } from 'react'
import MoviesList from '../../containers/MoviesList';

export default class MoviesToWatchView extends Component {
  componentDidMount() {
    this.props.loadSelectedPage(1);
  }
  render() {
    return (
      <>
        <MoviesList 
          movies={this.props.moviesToWatch}
          totalPages={this.props.totalPages}
          loadSelectedPage={this.props.loadSelectedPage}
        />
      </>
    );
  };
};
