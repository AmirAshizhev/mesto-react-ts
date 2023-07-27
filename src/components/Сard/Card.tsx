import React from 'react';

function Card(): React.JSX.Element {
  return (
    <li className="card">
      <img src="" alt="место" className="card__img" />
      <button className="card__delete"></button>
      <div className="card__info">
        <p className="card__info"></p>
        <div className="card__like-countainer">
          <div className="card__like"></div>
          <span className="card__like-count"></span>
        </div>
      </div>
    </li>
  );
}

export default Card;
