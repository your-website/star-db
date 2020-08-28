import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch} from "react-router-dom";

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import HeaderMenu from "../menu";
import ErrorIndicator from '../error-indicator';
import SwapiService from "../../services/swapi-service";
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from "../swapi-service-context";
import ErrorBoundry from "../error-boundry";
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage} from '../pages/index';

import { StarshipDetails } from "../sw-components";

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      return {
        swapiService: new Service()
      }
    })
  };

  render() {

    const { isLoggedIn } = this.state;

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
        <div id="outer-container">
          <ErrorBoundry>
            <SwapiServiceProvider value={this.state.swapiService}>
              <Router>
                <HeaderMenu />
                <div id="page-wrap" className="app">
                  <Header onServiceChange={ this.onServiceChange } />
                  <RandomPlanet />
                    <Switch>
                      <Route path="/"
                             render={() => <h2>Welcome to StarDB</h2>}
                             exact />
                      <Route path="/people/:id?" component={ PeoplePage } />
                      <Route path="/planets" component={ PlanetsPage } />
                      <Route path="/starships" exact component={ StarshipsPage } />
                      <Route path="/starships/:id"
                             render={({ match, location, history }) => {
                               const { id } = match.params;
                               return <StarshipDetails itemId={ id } />
                             }} />
                      <Route path="/login"
                             render={() => (
                                 <LoginPage
                                     isLoggedIn={ isLoggedIn }
                                     onLogin={ this.onLogin } />
                             )} />
                      <Route path="/secret"
                             render={() => (
                                 <SecretPage isLoggedIn={ isLoggedIn } />
                             )} />
                      <Route render={() => <h2>Page not found</h2>} />
                    </Switch>
                </div>
              </Router>
            </SwapiServiceProvider>
          </ErrorBoundry>
        </div>

    );
  }
}
