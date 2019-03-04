import React from 'react';
import Button from '@material-ui/core/Button'; 
import './SaveButton.css';

const SaveButton = (props) => {
    return (
        <div >
            <Button className="save-button" variant="contained" size="small" style={{ background: '#d14149' }} onClick={(e) => props.handleSaveClick(e, props.restaurantInfo)} >
                Save
            </Button>
        </div>)
}

export default SaveButton;

