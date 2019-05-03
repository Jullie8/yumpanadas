import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteButton = (props) => {
  return (
    <div className="delete-div" onClick={() => { props.delete(props.user_business); }}>
      <DeleteIcon user_business_id={props.user_business} className="delete" fontSize="small" />
    </div>
  );
};

export default DeleteButton;
