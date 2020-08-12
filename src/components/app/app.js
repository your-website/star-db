import React, { Component } from 'react';
import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button'
import ErrorIndicator from '../error-indicator';
import SwapiService from "../../services/swapi-service";
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from "../swapi-service-context";
import ErrorBoundry from "../error-boundry";
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages/index';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false,
    swapiService: new SwapiService()
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
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

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
                      <RandomPlanet/> :
                      null;

    return (
        <ErrorBoundry>
          <SwapiServiceProvider value={this.state.swapiService}>
            <div className="app">
              <Header onServiceChange={ this.onServiceChange }/>
              { planet }

              <button className="toggle-planet btn btn-warning btn-lg"
                      onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
              </button>
              <ErrorButton />

              <PeoplePage />
              <PlanetsPage />
              <StarshipsPage />
            </div>
          </SwapiServiceProvider>
        </ErrorBoundry>
    );
  }
}
