import React from "react";

const Profile = ({ id, title, firstName, lastName, picture }) => {
  return (
    <div className="profile">
      <img src={picture} alt={`${firstName} ${lastName}`} />
      <div className="details">
        <h2>
          {title}. {firstName} {lastName}
        </h2>
        <p>ID: {id}</p>
      </div>
    </div>
  );
};

export default Profile;
