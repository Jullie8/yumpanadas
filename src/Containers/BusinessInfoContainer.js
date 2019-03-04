import React from 'react';
import { Paper, Typography} from '@material-ui/core/';
import SaveButton from '../Components/SaveButton/SaveButton';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import ShareIcon from '@material-ui/icons/Share';
// import Collapse from '@material-ui/core/Collapse';

const BusinessInfoContainer = (props) => {
    return (
        <Paper style={props.styles.Paper}>
            <Typography variant={'h4'} >
                {props.restaurantInfo.name}         
            </Typography>
            {props.restaurantInfo.name !== undefined ? <SaveButton user={props.user} handleSaveClick={props.handleSaveClick} restaurantInfo={props.restaurantInfo} />
             : null}
           
            <img alt="" className="business-img" src={props.restaurantInfo.image_url}  />

            <div className="business-description">
            <Typography variant={'caption'} >
                <p>{props.restaurantInfo.price !== undefined ? `Price:${props.restaurantInfo.price}` : null} </p>
                <p> {props.restaurantInfo.rating !== undefined ? `Rating:${props.restaurantInfo.rating}` : null} </p>
                <p>{props.restaurantInfo.location !== undefined ? props.restaurantInfo.location.display_address.join(' ') : null} </p>
                <p>{props.restaurantInfo.display_phone !== undefined ? `Tel: ${props.restaurantInfo.display_phone}` : null} </p>
            </Typography>
            </div> 
        </Paper>
    )
}

export default BusinessInfoContainer;
