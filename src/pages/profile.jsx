import React from "react";
import { useParams } from "react-router-dom";
import { UsersProfile } from "../components/UserProfil";
// import ProfileHeader from "../components/profile/profileHeader";
// import ProfileInfos from "../components/profile/profileInfos";
// import UsersServices from "../models/usersServices";
// import ProfileContent from "../components/profile/profileContent";
// import Profile404 from "../components/profile/profile404";

function Profile() {
  const { userName } = useParams("userName");

  const users = UsersProfile;
  
  const user = users.find((user) => user.userName == userName);
  console.log(user);

//   console.log(user);

  return (
    <>
      <div className="profile-content-top">
        <div className="pc-header">
          <div className="icon-back">
            <span>=</span>
          </div>
          <div className="pc-header-text">
            <h5>{user.displayName}</h5>
            <p>{user.abonne}</p>
          </div>
        </div>
        <div className="pc-cover-section">
          <div className="cover-image">
            <img src={user.banner} alt="" />
          </div>
          <div className="photo-section">
            <div className="avatar">
              <img src={user.profil} alt="" />
            </div>
            <div className="setting-button">
              <a href="">Suivre</a>
            </div>
          </div>
          <div className="infos">
            <h4>{user.displayName}</h4>
            <p>@{user.userName}</p>
          </div>
        </div>
        <div className="pc-infos-section">
        <p className="profile-description">{user.description}</p>
            <div className="texts-actions">Array</div>
        </div>
      </div>
      <div className="profile-content-bottom"></div>
    </>
  )
}

export default Profile;