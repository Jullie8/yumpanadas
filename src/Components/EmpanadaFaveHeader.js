import React from 'react';

const EmpanadaFaveHeader = ({ venueClickHandler, location }) => (
  <div className="fave-h3">
    <h3 onClick={() => { venueClickHandler(location); }}>
      {location.name !== undefined ? `${location.name}` : null}
      {' '}
    </h3>
    {' '}
    {' '}
  </div>
);

export default EmpanadaFaveHeader;
