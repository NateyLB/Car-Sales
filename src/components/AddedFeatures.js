import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';
import { addedFeaturesOnClick } from "./actions/carActions.js"

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} addedFeaturesOnClick={props.addedFeaturesOnClick} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

//data from reducer
const mapStateToProps = state => {
  return {
    car: state.car
  };
};

export default connect(
mapStateToProps,
{addedFeaturesOnClick}
)(AddedFeatures)

