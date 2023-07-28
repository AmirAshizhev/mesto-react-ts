import React from 'react';
import './panel.scss';
import Profile from '../profile/profile';

function Panel(): React.JSX.Element {
  return (
    <div className="panel">
      <Profile />
      <button type="button" className="panel__btn"></button>
    </div>
  );
}

export default Panel;
