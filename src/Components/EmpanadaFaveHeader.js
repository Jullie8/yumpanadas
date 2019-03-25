import React from 'react';

const EmpanadaFaveHeader = (props) => {
    return (
    <div className="fave-h3" > 
        <h3 onClick={() => { props.venueClickHandler(props.location) }} >{props.location.name !== undefined ? `${props.location.name}` : null} </h3> {' '}
    </div>)
}

export default EmpanadaFaveHeader;