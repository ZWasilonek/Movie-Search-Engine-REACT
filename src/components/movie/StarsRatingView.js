import React, { Component } from 'react'
import StarRatings from 'react-star-ratings';

export default class StarsRatingView extends Component {
  render() {
    return (
      <StarRatings
        rating={this.props.rating}
        starRatedColor="rgb(255, 221, 26)"
        starEmptyColor="rgb(250, 242, 224)"
        numberOfStars={5}
        name="rating"
        starDimension="30px"
        starSpacing="-5px"
        changeRating={this.props.changeRating && this.props.changeRating}
        starHoverColor="rgb(255, 193, 7)"
      />
    )
  }
}
