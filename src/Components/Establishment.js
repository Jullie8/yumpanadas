import React from 'react';

const Establishment = (props) => {
    return (
        <div className="establishment-card"> 
            <div className="data-info">
                <p onClick={() => props.handleRestaurantClick(props.establishment)}> {props.establishment.name} </p>
            </div>
        </div>
    )
}

export default Establishment;