import React, { Component } from 'react';

import './item-details.scss';
import ErrorButton from '../error-button';
import ErrorBoundry from "../error-boundry";

const Record = ({ item, field, label}) => {
  return (
      <li className="list-group-item">
        <span className="term">{ label }</span>
        <span>{ item[field] }</span>
      </li>
  )
};

export {
  Record
};

export default class ItemDetails extends Component {

  render() {
    const { image, item } = this.props;

    const { name } = item;

    const hasData =
        <ErrorBoundry>
          <img className="item-image"
               src={ image } alt={ name } />

          <div className="card-body">
            <h4>{ name }</h4>
            <ul className="list-group list-group-flush">
              {
                React.Children.map(this.props.children, (child) => {
                  return React.cloneElement(child, { item });
                })
              }
            </ul>
            <ErrorButton />
          </div>
        </ErrorBoundry>

    return (
      <div className="item-details card">
        { hasData }
      </div>
    );
  };
};
