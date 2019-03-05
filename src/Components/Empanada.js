import React from 'react';

const Empanada = (props) => {
    return (
        <div>
            <h3>{props.location.name} </h3>
            <p> {props.location.location.display_address} </p>
            <p> {props.location.display_phone} </p>
            <p> {props.location.rating} </p>
            <p> {props.location.hours.is_open_now === true ? "Open" : null} </p>
            <hr />
        </div>
    )
}

export default Empanada;