import React from 'react';
import './header.scss';

function Header(): React.JSX.Element {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo"></div>
        <div className="header__box">
          <p className="header__box">admin@mail.ru</p>
          <a href="" className="header__logout">
            Выйти
          </a>
        </div>
      </div>
      <hr className="header__line" />
    </header>
  );
}

export default Header;
