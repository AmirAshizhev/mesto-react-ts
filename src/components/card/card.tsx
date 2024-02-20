import React from 'react';
import './card.scss';
import type { CardType } from '../../types/types';

function Card({likes, name, link, owner, _id}:CardType): React.JSX.Element {
  return (
    <li className="card" key={_id}>
      <img
        src={link}
        alt={name}
        className="card__img"
      />
      <button className="card__delete"></button>
      <div className="card__info">
        <p className="card__name">{name}</p>
        <div className="card__like-container">
          <button className="card__like" type="button"></button>
          <span className="card__like-count">{likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
