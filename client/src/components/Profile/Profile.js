import React from "react";

const Profile = ({data}) => {
  if (data.private) {
    return (
      <h2>
        The account {data.name} is private. They will have to set their account
        in Overwatch to public in order to display their stats
      </h2>
    );
  }

  return (
    <div>
      <h2 className="profile-slug">
        <img src={data.icon} alt="account icon" />
        {data.name}
      </h2>
      <div id="profile-tags" />
    </div>
  );
};

export default Profile;
