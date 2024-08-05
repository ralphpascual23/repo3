import React from 'react';

function Header({ onSearch }) {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <header>
      <h1>THE TIMEKEEPER BOUTIQUE</h1>
      <input type="text" placeholder="Search..." onChange={handleInputChange} />
    </header>
  );
}

export default Header;
