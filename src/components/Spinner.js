import React, { Component } from 'react'
import { Spinner, Button, Row, Container } from "react-bootstrap";

export default class Loading extends Component {
  render() {
    return (
      <Container className="spinner">
        <Row className="justify-content-md-center">
          <Button variant="info" disabled>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <span className="sr-only">Loading...</span>
          </Button>{' '}
        </Row>
      </Container>
    )
  }
}