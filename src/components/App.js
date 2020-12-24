import React from 'react';
import { Provider } from "react-redux";
import { Route, Switch, HashRouter } from "react-router-dom";
import Navigation from '../containers/Navbar';
import store from '../redux/store';
import "bootstrap/dist/css/bootstrap.min.css";
import MoviesToWatch from '../containers/MoviesToWatch';
import Home from '../containers/Home';
import WatchedMovies from '../containers/WatchedMovies';
import MovieDetails from '../containers/MovieDetails';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Navigation fixed="top" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/toWatch" component={MoviesToWatch} />
          <Route path="/watched" component={WatchedMovies} />
          <Route path="/details/:movieID" component={MovieDetails} />
        </Switch>
      </Provider>
    </HashRouter>
  );
};

export default App;
