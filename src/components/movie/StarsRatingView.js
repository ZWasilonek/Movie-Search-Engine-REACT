import React from 'react'
import StarRatings from 'react-star-ratings';

export default function StarsRatingView({changeRating, rating}) {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="rgb(255, 221, 26)"
      starEmptyColor="rgb(250, 242, 224)"
      numberOfStars={5}
      name="rating"
      starDimension="30px"
      starSpacing="-5px"
      changeRating={changeRating}
      starHoverColor="rgb(255, 193, 7)"
    />
  )
}