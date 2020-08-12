import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import withDetails from "../hoc-helper/with-details";

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                { fn.props.children }
            </Wrapped>
        )
    }
};

const starshipDetails = (
    <React.Fragment>
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
    </React.Fragment>
);

const planetDetails = (
    <React.Fragment>
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="Rotation Period" />
        <Record field="diameter" label="Diameter" />
    </React.Fragment>
);

const personDetails = (
    <React.Fragment>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
    </React.Fragment>
);

const PersonDetails = withDetails(withChildFunction(ItemDetails, personDetails), getPerson, getPersonImage);

const PlanetDetails = withDetails(withChildFunction(ItemDetails, planetDetails), getPlanet, getPlanetImage);

const StarshipDetails = withDetails(withChildFunction(ItemDetails, starshipDetails), getStarship, getStarshipImage);

export  {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
