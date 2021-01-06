import React from 'react';
import { Provider } from "react-redux";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
import Navigation from '../containers/Navbar';
import store from '../redux/store';
import "bootstrap/dist/css/bootstrap.min.css";
import MoviesToWatch from '../containers/MoviesToWatch';
import Home from '../containers/Home';
import WatchedMovies from '../containers/WatchedMovies';
import MovieDetails from '../containers/MovieDetails';
import NotFound from './error/NotFound';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Navigation fixed="top" />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path={"/home"} component={Home} />
          <Route exact path={"/toWatch"} component={MoviesToWatch} />
          <Route exact path={"/watched"} component={WatchedMovies} />
          <Route exact path={"/details/:movieID"} component={MovieDetails} />
          <Route path={"*"} component={NotFound} />
        </Switch>
      </Provider>
    </HashRouter>
  );
};

export default App;