import React from 'react';
import './card.scss';

function Card(): React.JSX.Element {
  return (
    <li className="card">
      <img
        src="https://www.kp.ru/russia/wp-content/uploads/2019/11/elbrus-1330-530x322.jpg"
        alt="место"
        className="card__img"
      />
      <button className="card__delete"></button>
      <div className="card__info">
        <p className="card__info">Название места</p>
        <div className="card__like-countainer">
          <div className="card__like"></div>
          <span className="card__like-count"></span>
        </div>
      </div>
    </li>
  );
}

export default Card;
