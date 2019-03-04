import React from 'react';
import FindButton from './FindButton';

const Header = (props) => {
    return (
        <div className="header">
            <span> Hi {props.user.username} click here to find empanadas nearby </span> {' '}
            <FindButton handleFindClick={props.handleFindClick} />
            <hr />
        </div>
    )
}

export default Header;