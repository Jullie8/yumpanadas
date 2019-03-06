import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteButton from './DeleteButton';

const Empanada = (props) => {
    return (
        <div>
            <h3 className="fave-h3" >{props.location.name !== undefined ? `${props.location.name}` : null} </h3> {' '}
            <p className="p-fave-content">
             {props.location.location !== undefined ? props.location.location.display_address.join(' ') : null} {' '}
             {props.location.display_phone !== undefined ? `Tel: ${props.location.display_phone}` : null} </p> 
            
            <DeleteButton user_business={props.user_business} delete={props.delete} />

            <hr />
    </div>
    )
}

export default Empanada;
