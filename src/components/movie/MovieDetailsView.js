import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Card, Container, Col, Row, Image } from "react-bootstrap";
import Loading from "../Spinner";
import { FetchingError } from "../error/FetchingError";
import EmptyMoviesList from "../error/EmptyMoviesList";
import classes from "./MovieDetails.module.css";
import StarsRatingView from "./StarsRatingView";

class MovieDetailsView extends Component {
  componentDidMount = () => {
    this.props.loadMovieDetails();
  };

  shouldComponentRender() {
    return this.props.loading;
  };

  render() {
    const { error, movie } = this.props;
    const backgroundStyle = "body {background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://webdesignerdepot.s3.amazonaws.com/default-images/16.jpg) no-repeat fixed center / cover;}"
    return (
      <>
        {this.shouldComponentRender() && <Loading />}
        {error && <FetchingError error={error} />}
        {movie === undefined && movie !== null && !error && !this.shouldComponentRender()
          && <EmptyMoviesList />}
        {movie !== undefined && movie !== null &&
          <div className={classes.MainContainer}>
            <Helmet>
              <style>{backgroundStyle}</style>
            </Helmet>
            <Container className={classes.Container}>
              <Row className={classes.MainRow}>
                <Col className="test" xs md='auto' lg='auto'>
                  <Image src={movie.Poster} rounded className="" />
                </Col>
                <Col className="test2" xs md={7} lg={7}>
                  <Card className={classes.MovieCard}>
                    <Card.Header>{movie.Title} ({movie.Year})</Card.Header>
                    <Card.Body>
                      <Card.Text>Direction: {movie.Director}</Card.Text>
                      <Card.Text>Production: {movie.Production}</Card.Text>
                      <Card.Text>Genre: {movie.Genre}</Card.Text>
                      <Card.Text>Country: {movie.Country}</Card.Text>
                      <Card.Text>Premiere: {movie.Released}</Card.Text>
                      <Card.Text>Runtime: {movie.Runtime}</Card.Text>
                      <Card.Text>Awards: {movie.Awards}</Card.Text>
                      <Card.Text>Actors: {movie.Actors}</Card.Text>
                      <Card.Text>{movie.Plot}</Card.Text>
                      <Card.Text>
                        <StarsRatingView rating={movie.rating} /> {movie.imdbVotes}
                      </Card.Text>
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