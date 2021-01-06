import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    const ERROR = "Page not found :("
    return (
      <div className="movies-list-error">
        <h1>{ERROR.toUpperCase()}</h1>
      </div>
    )
  }
}
