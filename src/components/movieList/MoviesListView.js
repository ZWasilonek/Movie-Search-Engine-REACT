import React, { Component } from 'react'
import MovieView from "../../containers/Movie";
import { Col, Row, Container } from "react-bootstrap";
import Loading from '../Spinner';
import EmptyMoviesList from '../error/EmptyMoviesList';
import { FetchingError } from '../error/FetchingError';
import ReactPaginate from 'react-paginate';

class MoviesListView extends Component {
  render() {
    const { error, movies, totalPages, loadSelectedPage, loading } = this.props;
    return (
      <>
        {loading && <Loading />}
        {error && <FetchingError error={error} />}
        {movies.length === 0 && !error && !loading && <EmptyMoviesList />}
        {movies !== undefined && movies.length !== 0 && error === null &&
          <Container className="movie-list-container">
            <Row>
              {movies.map((movie) => (
                <Col xs={6} md={4} key={movie.imdbID}>
                  <MovieView movie={movie} />
                </Col>
              ))}
              <Col xs={6} md={8} className="pages-content">
                <div className="pages-box">
                  <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={(e) => loadSelectedPage(e.selected + 1)}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active-page'}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        }
      </>
    );
  }
}

export default MoviesListView;