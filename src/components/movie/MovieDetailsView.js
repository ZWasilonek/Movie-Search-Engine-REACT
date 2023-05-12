import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Card, Container, Col, Row, Image } from "react-bootstrap";
import Loading from "../Spinner";
import EmptyMoviesList from "../error/EmptyMoviesList";
import classes from "./MovieDetails.module.css";
import StarsRatingView from "./StarsRatingView";
import FetchingError from "../error/FetchingError";
import bgMusic from '../../resources/music/cinema-rhythms-driver-05-120831.mp3'; //https://pixabay.com

export default class MovieDetailsView extends Component {
  componentDidMount = () => {
    this.props.loadMovieDetails();
  };

  render() {
    const { error, movie, loading } = this.props;
    const backgroundStyle =
      "body {" +
        "background: url(https://img.freepik.com/free-photo/rendering-abstract-futuristic-background-with-glowing-neon-blue-orange-lights_181624-19807.jpg?w=1060&t=st=1679602907~exp=1679603507~hmac=ff94a00f2cae2ef09b216d855b32c1f2a437adceff3312447b83c7437ca20f6c) no-repeat fixed center / cover; " +
      "}";
    return (
      <>
        <audio controls autoPlay>
          <source src={bgMusic} type="audio/mpeg" />
        </audio>
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