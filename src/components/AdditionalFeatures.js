import React from 'react';
import { connect } from 'react-redux';

import AdditionalFeature from './AdditionalFeature';
import { additionalFeaturesOnClick } from './actions/carActions.js'

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} additionalFeaturesOnClick={props.additionalFeaturesOnClick} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

//data from reducer
const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
mapStateToProps,
{additionalFeaturesOnClick}
)(AdditionalFeatures)

