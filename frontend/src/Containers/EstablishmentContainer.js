import React from 'react';
import { Paper } from '@material-ui/core/';
import Header from '../Components/Header';

const EstablishmentContainer = ({
  styles, user, handleFindClick, restaurants,
}) => (
  <Paper style={styles.Paper}>
    <Header user={user} handleFindClick={handleFindClick} />
    {restaurants}
  </Paper>
);

export default EstablishmentContainer;
