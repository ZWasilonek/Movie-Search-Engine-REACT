import React, { Component } from 'react'

export default class FetchingError extends Component {
  render() {
    const { error } = this.props;
    return (
      <div className="movies-list-error">
        <h1>{error.toUpperCase()}</h1>
      </div>
    )
  }
};