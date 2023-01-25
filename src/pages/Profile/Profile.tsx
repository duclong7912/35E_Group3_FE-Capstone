import React from "react";
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="profile">
      <div className="profile--content width-container">
        <ProfileLeft />
        <ProfileRight />
      </div>
    </div>
  );
};

export default Profile;
