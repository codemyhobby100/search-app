import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProfileList from './ProfileList';

const profilesData = [
  {
    id: "60d0fe4f5311236168a109f5",
    name: 'ms Charlotte Legrand',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    avatar: 'https://randomuser.me/api/portraits/med/women/77.jpg',
  },
  {
    id: 2,
    name: 'Jane Doe',
    bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Bob Smith',
    bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    avatar: 'https://via.placeholder.com/150',
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredProfiles = profilesData.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <SearchBar value={searchTerm} onChange={handleSearch} />
      <ProfileList profiles={filteredProfiles} />
    </div>
  );
};

export default App;
