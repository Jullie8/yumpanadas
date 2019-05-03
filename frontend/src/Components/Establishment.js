import React from 'react';

const Establishment = ({ handleRestaurantClick, establishment }) => (
  <div>
    <div className="data-info">
      <p onClick={() => handleRestaurantClick(establishment)}>
        {' '}
        {establishment.name}
        {' '}
      </p>
    </div>
  </div>
);

export default Establishment;
