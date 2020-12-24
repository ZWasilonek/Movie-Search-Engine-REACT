import React, { Component } from 'react'

export default class EmptyMoviesList extends Component {
  render() {
    const ERROR = "No result was matched";
    return (
      <div className="movies-list-error">
        <h1>{ERROR.toUpperCase()}</h1>
      </div>
    )
  }
}
