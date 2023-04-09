import React from 'react';

const Profile = ({ name, bio, avatar }) => {
  return (
    <div className="profile">
      <img src={avatar} alt={`${name} Avatar`} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default Profile;
