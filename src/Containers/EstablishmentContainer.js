import React from 'react';
import { Paper } from '@material-ui/core/';
import Header from '../Components/Header';

const EstablishmentContainer = (props) => {
    return (
        <Paper style={props.styles.Paper} >
            <Header handleFindClick={props.handleFindClick} />
            {props.restaurants}
        </Paper>
    )
} 

export default EstablishmentContainer;