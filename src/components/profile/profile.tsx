import React from 'react';
import './profile.scss';
import defaultAvatar from '../../images/defaultAvatar.jpg';

function Profile(): React.JSX.Element {
  // const [name, setName] = useState<string>('')
  // const [job, setJob] = useState<string>('')

  return (
    <div className="profile">
      <div className="profile__avatar-container">
        <img src={defaultAvatar} alt="" className="profile__avatar" />
      </div>
      <div className="profile__info">
        <div className="profile__box">
          <p className="profile__name">Жак-Ив Кусто</p>
          <button className="profile__edit" type="button"></button>
        </div>

        <p className="profile__job">Исследователь океана</p>
      </div>
    </div>
  );
}

export default Profile;
