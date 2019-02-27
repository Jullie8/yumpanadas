import React from 'react';
import FindButton from './FindButton';

const Header = (props) => {
    return (
        <div className="header">
            <span> Restaurants Nearby  </span> {' '}
            <FindButton handleFindClick={props.handleFindClick} />
            <hr />
        </div>
    )
}

export default Header;