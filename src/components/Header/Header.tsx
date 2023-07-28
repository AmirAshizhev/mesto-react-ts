import React, { useState } from 'react';
import './header.scss';

function Header(): React.JSX.Element {
  const [isburgerOpened, setIsburgerOpened] = useState<boolean>(false);

  function handleBurgerClick(): void {
    setIsburgerOpened(!isburgerOpened);
  }

  return (
    <header className="header">
      {isburgerOpened && (
        <div className="header__box header__box_active">
          <p className="header__email">admin@mail.ru</p>
          <a href="" className="header__logout">
            Выйти
          </a>
          <hr className="header__line header__line_burger" />
        </div>
      )}

      <div className="header__content">
        <div className="header__logo"></div>
        <div className="header__box">
          <p className="header__email">admin@mail.ru</p>
          <a href="" className="header__logout">
            Выйти
          </a>
        </div>
        <button
          className={`header__burger ${
            isburgerOpened ? 'header__burger_active' : ''
          }`}
          type="button"
          onClick={handleBurgerClick}
        ></button>
      </div>
      <hr className="header__line" />
    </header>
  );
}

export default Header;
