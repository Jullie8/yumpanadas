import React from 'react';

// To Do: refactor away from inline styling
const FindButton = ({ handleFindClick }) => (
  <button type="button" onClick={handleFindClick} style={{ borderRadius: 15 }}>
        Locate
  </button>
);

export default FindButton;
