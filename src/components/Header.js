import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    // titleOnProps: state.title,
    // editingOnProps: state.editing
    car: state.car
  };
};

export default connect(
mapStateToProps,
{}
)(Header)


// export default connect(
//   mapStateToProps,
//   { toggleEditing, updateTitle } // { toggleEditing: toggleEditing }
// )(Title); // function currying in JS