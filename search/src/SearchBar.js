import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <input type="text" value={value} onChange={onChange} placeholder="Search by name" />
    </div>
  );
};

export default SearchBar;
