import React, { Fragment, Component } from 'react';
import { Paper, Typography, CardMedia } from '@material-ui/core/';
//import FavoriteIcon from '@material-ui/icons/Favorite';
//import ShareIcon from '@material-ui/icons/Share';
// import Collapse from '@material-ui/core/Collapse';

const BusinessInfoContainer = (props) => {
    // const Style = {
    //     height: 150,
    // };

    // console.log(props.restaurantInfo.location.display_address)
    return (
        <Paper style={props.styles.Paper}>
        
            <Typography variant={'h4'} >
                {props.restaurantInfo.name}         
            </Typography>
            
            <img className="business-img" src={props.restaurantInfo.image_url}  />

            <Typography variant={'caption'} >
                <p>{props.restaurantInfo.price !== undefined ? `Price:${props.restaurantInfo.price}` : null} </p>
            </Typography>
            
            <Typography variant={'caption'} >
                <p> {props.restaurantInfo.rating !== undefined ? `Rating:${props.restaurantInfo.rating}` : null} </p>
            </Typography>

            <Typography variant={'caption'} >
                <p>{props.restaurantInfo.location !== undefined ? props.restaurantInfo.location.display_address.join(' ') : null} </p>
            </Typography>
            <Typography variant={'caption'} >
                <p>{props.restaurantInfo.display_phone !== undefined ? `Tel: ${props.restaurantInfo.display_phone}`: null} </p>
            </Typography>
            
            

        </Paper>
    
    )
}

export default BusinessInfoContainer;

// { props.restaurantInfo.rating }