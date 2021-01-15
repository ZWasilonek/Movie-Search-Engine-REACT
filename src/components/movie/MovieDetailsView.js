import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Card, Container, Col, Row, Image } from "react-bootstrap";
import Loading from "../Spinner";
import EmptyMoviesList from "../error/EmptyMoviesList";
import classes from "./MovieDetails.module.css";
import StarsRatingView from "./StarsRatingView";
import FetchingError from "../error/FetchingError";

export default class MovieDetailsView extends Component {
  componentDidMount = () => {
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
                      <Card.Text>
                        <span className={classes.MovieFeaturesTitle}>Direction:</span>
                        <span>{movie.Director}</span>
                      </Card.Text>
                      <Card.Text>
                        <span className={classes.MovieFeaturesTitle}>Production:</span>
                        <span>{movie.Production}</span>
                      </Card.Text>
                      <Card.Text>
                        <span className={classes.MovieFeaturesTitle}>Genre:</span>
                        <span>{movie.Genre}</span>
                      </Card.Text>
                      <Card.Text>
                        <span className={classes.MovieFeaturesTitle}>Country:</span>
                        <span>{movie.Country}</span>
                      </Card.Text>
                      <Card.Text>
                        <span className={classes.MovieFeaturesTitle}>Premiere:</span>
                        <span>{movie.Released}</span>
                      </Card.Text>
                      <Card.Text>
                        <span className={classes.MovieFeaturesTitle}>Runtime:</span>
                        <span>{movie.Runtime}</span>
                      </Card.Text>
                      <Card.Text>
                        <span className={classes.MovieFeaturesTitle}>Awards:</span>
                        <span>{movie.Awards}</span>
                      </Card.Text>
                      <Card.Text>
                        <span className={classes.MovieFeaturesTitle}>Actors:</span>
                        <span>{movie.Actors}</span>
                      </Card.Text>

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
};