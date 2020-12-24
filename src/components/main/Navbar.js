import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

class Navigation extends Component {
  state = {
    searchWord: this.props.searchTitle
  };

  handleChange = (event) => {
    this.setState({ searchWord: event.target.value });
  };

  handleSubmit = (event, searchedWord) => {
    event.preventDefault();
    this.props.searchMovies(searchedWord);
  }

  render() {
    return (
      <>
        <Navbar fixed="top" className="navbar" variant="dark">
          <Navbar.Brand className="text-info" href="#/">Movie Search</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#watched">Watched</Nav.Link>
            <Nav.Link href="#toWatch">To watch</Nav.Link>
          </Nav>
          <Form inline onSubmit={(e) => this.handleSubmit(e, this.state.searchWord)}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={this.handleChange}
              value={this.state.searchWord}
            />
            <Button
              variant="outline-warning"
              type="submit">
              Search
            </Button>
          </Form>
        </Navbar>
      </>
    )
  };
};

export default Navigation;