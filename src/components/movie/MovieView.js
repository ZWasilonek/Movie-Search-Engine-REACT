import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardImg } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { faEye, faEyeSlash, faClipboardCheck } from "@fortawesome/free-solid-svg-icons";
import StarsRatingView from "./StarsRatingView";

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
    const { movieObject } = this.state;
    this.setState({
      watched: !this.state.watched,
      rating: selectedRating
    }, () => {
      movieObject.watched = this.state.watched;
      movieObject.rating = this.state.rating;
      movieObject.watched ?
        this.props.addToWatched(movieObject) :
        this.props.removeFromWatchedMovies(movieObject)
    });
  };

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
              {watched &&
                <FontAwesomeIcon
                  className="watched-icon"
                  icon={faClipboardCheck}
                  size={"3x"}
                  color={"#cc0052"}
                  onClick={() => this.handleWatchedMovies(rating)}
                />
              }
            </Card.Body>
            <Card.Footer>
              <StarsRatingView
                rating={rating}
                changeRating={(selectedRating) => this.handleWatchedMovies(selectedRating)}
              />
              <FontAwesomeIcon
                className="wish-to-watch-icon"
                icon={!wantsToWatch ? faEye : faEyeSlash}
                size={'3x'}
                color={!wantsToWatch ? "#17a2b8" : "#ffdb4d"}
                onClick={this.handleMoviesToWatch}
              />
            </Card.Footer>
          </Card>
        }
      </>
    );
  };
};

export default withRouter(MovieView);