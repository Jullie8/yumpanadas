import React from 'react';
import { Paper, Typography } from '@material-ui/core/';
import SaveButton from '../Components/SaveButton/SaveButton';


const BusinessInfoContainer = ({
  handleSaveClick, restaurantInfo, styles, user,
}) => (
  <Paper style={styles.Paper}>
    <Typography variant="h4">
      {restaurantInfo.name}
    </Typography>
    {restaurantInfo.name !== undefined
      ? (
        <SaveButton
          user={user}
          handleSaveClick={handleSaveClick}
          restaurantInfo={restaurantInfo}
        />
      )
      : null}
    <img alt="" className="business-img" src={restaurantInfo.image_url} />
    <div className="business-description">
      <Typography variant="body1" noWrap fontSize={16}>
        <p>
          {restaurantInfo.price !== undefined ? `Price:${restaurantInfo.price}` : null}
          {' '}
        </p>
        <p>
          {' '}
          {restaurantInfo.rating !== undefined ? `Rating:${restaurantInfo.rating}` : null}
          {' '}
        </p>
        <p>
          {restaurantInfo.location !== undefined ? restaurantInfo.location.display_address.join(' ') : null}
          {' '}
        </p>
        <p>
          {restaurantInfo.display_phone !== undefined ? `Tel: ${restaurantInfo.display_phone}` : null}
          {' '}
        </p>
      </Typography>
    </div>
  </Paper>
);

export default BusinessInfoContainer;
