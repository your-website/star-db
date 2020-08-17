import React from "react";

import ItemDetails, { Record } from "../item-details/item-details";
import {
  withDetails,
  withSwapiService,
  withChildFunctionProps,
  compose} from "../hoc-helper";

const starshipDetails = (
    <React.Fragment>
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
    </React.Fragment>
);

const mapStarshipethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};

const planetDetails = (
    <React.Fragment>
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="Rotation Period" />
        <Record field="diameter" label="Diameter" />
    </React.Fragment>
);

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
};

const personDetails = (
    <React.Fragment>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
    </React.Fragment>
);

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
};

const PersonDetails = compose(
                        withSwapiService(mapPersonMethodsToProps),
                        withDetails,
                        withChildFunctionProps(personDetails),
                        )(ItemDetails);

const PlanetDetails = compose(
                        withSwapiService(mapPlanetMethodsToProps),
                        withDetails,
                        withChildFunctionProps(planetDetails),
                        )(ItemDetails);

const StarshipDetails = compose(
                          withSwapiService(mapStarshipethodsToProps),
                          withDetails,
                          withChildFunctionProps(starshipDetails),
                          )(ItemDetails);

export  {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
