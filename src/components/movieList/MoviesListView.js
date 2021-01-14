import React, { Component } from 'react'
import MovieView from "../../containers/Movie";
import { Col, Row, Container } from "react-bootstrap";
import Loading from '../Spinner';
import EmptyMoviesList from '../error/EmptyMoviesList';
import FetchingError from '../error/FetchingError';
import ReactPaginate from 'react-paginate';
import { withRouter } from 'react-router-dom';

class MoviesListView extends Component {
  componentDidMount() {
    const rootPath = this.props.history.location.pathname;
    this.props.setRootPath(rootPath);
  }

  loadMoviesByPageNumber = selectedPageIndex => {
    this.props.changePageNumber(selectedPageIndex)
    this.props.loadSelectedPage()
  }

  render() {
    const { error, movies, totalPages, loading } = this.props;
    return (
      <>
        {loading && <Loading />}
        {error && <FetchingError error={error} />}
        {movies.length === 0 && !error && !loading && <EmptyMoviesList />}
        {movies !== undefined && movies.length !== 0 && error === null &&
          <Container className="movie-list-container">
            <Row>
              {movies.map((movie) => (
                <Col md={6} lg={4} key={movie.imdbID}>
                  <MovieView movie={movie} />
                </Col>
              ))}
              <Col className="pages-content">
                <div className="pages-box">
                  <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={totalPages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={e => this.loadMoviesByPageNumber(e.selected)}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active-page'}
                    forcePage={this.props.pageIndex}
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

export default withRouter(MoviesListView);