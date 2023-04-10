import React from "react";
import Profile from "./Profile";

const ProfileList = ({ profiles }) => {
  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <Profile key={profile.id} {...profile} />
      ))}
    </div>
  );
};

export default ProfileList;

// import React from 'react';
// import Profile from './Profile';

// const ProfileList = ({ profiles }) => {
//   return (
//     <div className="profile-list">
//       {profiles.map(profile => (
//         <Profile key={profile.id} name={profile.name} bio={profile.bio} avatar={profile.avatar} />
//       ))}
//     </div>
//   );
// };

// export default ProfileList;
