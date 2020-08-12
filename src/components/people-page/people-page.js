import React, { Component } from 'react';

import './people-page.css';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import Row from '../row';
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import {Record} from "../item-details/item-details";

class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const itemList = (
        <ItemList
            getData={ this.swapiService.getAllPeople }
            onItemSelected={ this.onPersonSelected }>
          {(i) => (
              `${i.name}, ${i.birthYear})`
          )}
        </ItemList>
    );

    const personDetails = (
        <ErrorBoundry>
          <ItemDetails
              getData={ this.swapiService.getPerson }
              itemId={ this.state.selectedPerson }
            getImageUrl={ this.swapiService.getPersonImage }>
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
          </ItemDetails>
        </ErrorBoundry>
    );

    return(
          <Row left={itemList} right={personDetails}/>
    );
  };
}

export default PeoplePage;
