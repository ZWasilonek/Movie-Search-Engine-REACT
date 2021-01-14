import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Card, Container, Col, Row, Image } from "react-bootstrap";
import Loading from "../Spinner";
import EmptyMoviesList from "../error/EmptyMoviesList";
import classes from "./MovieDetails.module.css";
import StarsRatingView from "./StarsRatingView";
import FetchingError from "../error/FetchingError";

class MovieDetailsView extends Component {
  componentWillMount = () => {
    this.props.loadMovieDetails();
  };

  render() {
    const { error, movie, loading } = this.props;
    const backgroundStyle = 
    "body {" +
      "background: linear-gradient(" +
        "rgba(126, 125, 125, 0.514)," + 
        "rgba(0, 0, 0, 0.5))," +
        "url(https://webdesignerdepot.s3.amazonaws.com/default-images/16.jpg) no-repeat fixed center / cover; " + 
    "}";
    return (
      <>
        {loading && <Loading />}
        {error && <FetchingError error={error} />}
        {movie === undefined && movie !== null && !error && !loading
          && <EmptyMoviesList />}
        {movie !== undefined && movie !== null && !loading && !error &&
          <div className={classes.MainContainer}>
            <Helmet>
              <style>{backgroundStyle}</style>
            </Helmet>
            <Container>
              <Row>
                <Col xs={12} md={6} lg='auto'>
                  <Image src={movie.Poster} rounded />
                </Col>
                <Col xs={12} md={6} lg={7}>
                  <Card className={classes.MovieCard}>
                    <Card.Header className={classes.MovieTitleCard}>
                      {movie.Title.toUpperCase()} ({movie.Year})
                    </Card.Header>
                    <Card.Body>
                      <Card.Text><span className={classes.MovieFeatures}>
                        Direction:</span> {movie.Director}</Card.Text>
                      <Card.Text><span className={classes.MovieFeatures}>
                        Production:</span> {movie.Production}</Card.Text>
                      <Card.Text><span className={classes.MovieFeatures}>
                        Genre:</span> {movie.Genre}</Card.Text>
                      <Card.Text><span className={classes.MovieFeatures}>
                        Country:</span> {movie.Country}</Card.Text>
                      <Card.Text><span className={classes.MovieFeatures}>
                        Premiere:</span> {movie.Released}</Card.Text>
                      <Card.Text><span className={classes.MovieFeatures}>
                        Runtime:</span> {movie.Runtime}</Card.Text>
                      <Card.Text><span className={classes.MovieFeatures}>
                        Awards:</span> {movie.Awards}</Card.Text>
                      <Card.Text><span className={classes.MovieFeatures}>
                        Actors:</span> {movie.Actors}</Card.Text>
                      <Card.Text>{movie.Plot}</Card.Text>
                      <StarsRatingView rating={movie.rating} /> 
                      <span className={classes.MovieVotesCard}>{movie.imdbVotes} votes</span>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        }
      </>
    )
  }
}

export default MovieDetailsView;