import React from 'react';

//stay away from inline styling they are difficult to find and can not re use it again 
const FindButton = (props) => (
    <button onClick={props.handleFindClick} style={{borderRadius: 15}}>
        Locate
    </button>
)

export default FindButton;
   