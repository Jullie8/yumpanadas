import React from 'react';
// import DeleteIcon from '@material-ui/icons/Delete';
import DeleteButton from './DeleteButton';
import EmpanadaFaveHeader from './EmpanadaFaveHeader';


const Empanada = props => (
  <div className="empanada-fave" style={{ height: '15vh' }}>
    <EmpanadaFaveHeader venueClickHandler={props.venueClickHandler} location={props.location} />
    <p className="p-fave-content">
      {props.location.location !== undefined ? props.location.location.display_address.join(' ') : null}
      {' '}
      {' '}
      {props.location.display_phone !== undefined ? `Tel: ${props.location.display_phone}` : null}
      {' '}
      {' '}
      {props.location !== undefined ? <a target="_blank" href="https://www.google.com/maps/@40.7015551,-73.9888682,15">Directions</a> : null}

    </p>

    <DeleteButton user_business={props.user_business} delete={props.delete} />
  </div>
);

export default Empanada;
