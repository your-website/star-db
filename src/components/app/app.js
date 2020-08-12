import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button'
import './app.css';
import ErrorIndicator from '../error-indicator';
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from "../sw-components";

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    hasError: false
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

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <div className="app">
        <Header />
        { planet }

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <ErrorButton />

        <Row
          left={<PersonList/>}
          right={<PersonDetails itemId={4}/>} />

        <Row
          left={<StarshipList/>}
          right={<StarshipDetails itemId={5}/>} />

        <Row
          left={<PlanetList/>}
          right={<PlanetDetails itemId={4}/>} />
      </div>
    );
  }
}
