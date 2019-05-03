import React from 'react';
import FindButton from './FindButton';

const Header = ({ user, handleFindClick }) => (
  <div className="header">
    <span>
      {' '}
Hi
      {' '}
      {user.username}
      {' '}
click here to find empanadas nearby
    </span>
    {' '}
    {' '}
    <FindButton handleFindClick={handleFindClick} />
    <hr />
  </div>
);

export default Header;
