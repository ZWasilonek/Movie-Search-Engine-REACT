import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import MoviesList from '../../containers/MoviesList';

class MoviesToWatchView extends Component {
  componentWillMount() {
    this.props.loadSelectedPage();
  }

  render() {
    return (
      <>
        <MoviesList 
          movies={this.props.moviesToWatch}
          totalPages={this.props.totalPages}
          pageIndex={this.props.pageIndex}
          loadSelectedPage={this.props.loadSelectedPage}
        />
      </>
    );
  };
};

export default withRouter(MoviesToWatchView);