import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
