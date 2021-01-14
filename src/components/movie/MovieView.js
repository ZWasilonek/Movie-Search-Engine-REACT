import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardImg } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { faEye, faEyeSlash, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import StarsRatingView from "./StarsRatingView";
import ReactTooltip from 'react-tooltip';

class MovieView extends Component {
  state = {
    movieObject: this.props.movie,
    wantsToWatch: this.props.movie.wantsToWatch,
    watched: this.props.movie.watched,
    rating: this.props.movie.rating,
    path: this.props.history.location.pathname
  };

  handleMoviesToWatch = () => {
    const { movieObject } = this.state;
    this.setState({
      wantsToWatch: !this.state.wantsToWatch
    }, () => {
      movieObject.wantsToWatch = this.state.wantsToWatch
      movieObject.wantsToWatch ?
        this.props.addToWatch(movieObject) :
        this.props.removeFromMoviesToWatch(movieObject)
    });
  };

  handleWatchedMovies = (selectedRating) => {
    const { movieObject, watched } = this.state;
    this.setState({
      watched: true,
      rating: selectedRating
    }, () => {
      movieObject.watched = this.state.watched;
      movieObject.rating = this.state.rating;
      !watched ?
        this.props.addToWatched(movieObject) :
        this.props.changeRating(movieObject)
    });
  };

  handleClipboardCheckIconOnClick = (rating) => {
    const { movieObject } = this.state;
    this.setState({
      watched: !this.state.watched,
      rating: rating
    }, () => {
      movieObject.watched = this.state.watched;
      movieObject.rating = this.state.rating;
      this.props.removeFromWatchedMovies(movieObject)
    });
  }

  goToMovieDetails = (movieID) => {
    const PATH = `/details/${movieID}`;
    this.props.history.push(PATH);
  }

  render() {
    const { movie } = this.props;
    const { Title, Year, imdbID, Poster } = movie;
    const { wantsToWatch, watched, rating } = this.state;
    return (
      <>
        {movie !== undefined &&
          <Card className="movie-style">
            <CardImg
              variant="top"
              src={Poster} className="image"
              onClick={() => this.goToMovieDetails(imdbID)} />
            <Card.Body>
              <Card.Title>{Title} ({Year})</Card.Title>
              <span data-for="clipboardCheckIcon" data-tip='remove from "Watched"'>
                {watched &&
                  <FontAwesomeIcon
                    className="watched-icon"
                    icon={faClipboardCheck}
                    size={"3x"}
                    color={"#cc0052"}
                    onClick={() => this.handleClipboardCheckIconOnClick(rating)}
                  />
                }
                <ReactTooltip id="clipboardCheckIcon" />
              </span>
            </Card.Body>
            <Card.Footer>
              <span data-for="starRatingIcons" data-tip={!watched ? 'add to watched' : 'change rating'}>
                <StarsRatingView
                  rating={rating}
                  changeRating={(selectedRating) => this.handleWatchedMovies(selectedRating)}
                />
                <ReactTooltip id="starRatingIcons" />
              </span>
              <FontAwesomeIcon
                className="wish-to-watch-icon"
                icon={!wantsToWatch ? faEye : faEyeSlash}
                size={"3x"}
                color={!wantsToWatch ? "#17a2b8" : "#ffdb4d"}
                onClick={this.handleMoviesToWatch}
                data-for="eyeIcon"
                data-tip={!wantsToWatch ? 'add to watchlist' : 'remove from "To watch"'}
              />
              <ReactTooltip id="eyeIcon" />
            </Card.Footer>
          </Card>
        }
      </>
    );
  };
};

export default withRouter(MovieView);