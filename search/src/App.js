import React, { useState } from "react";
import data from "./data";
import ProfileList from "./ProfileList";
import SearchBar from "./SearchBar";
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProfiles = data.filter((profile) =>
    `${profile.firstName} ${profile.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="app">
      <SearchBar value={searchTerm} onChange={handleSearch} />
      <ProfileList profiles={filteredProfiles} />
    </div>
  );
};

export default App;
