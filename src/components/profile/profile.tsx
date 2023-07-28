import React from 'react';
import './profile.scss';
import defaultAvatar from '../../images/defaultAvatar.jpg';

function Profile(): React.JSX.Element {
  return (
    <div className="profile">
      <div className="profile__avatar-container">
        <img src={defaultAvatar} alt="" className="profile__avatar" />
      </div>
      <div className="profile__info">
        <p className="profile__name"></p>
        <p className="profile__job"></p>
      </div>
    </div>
  );
}

export default Profile;
