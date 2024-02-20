import React from 'react';
import './main.scss';
import Panel from '../panel/panel';
import Card from '../card/card';
import type { CardType } from '../../types/types';

function Main({cards}:{cards: CardType[]}): React.JSX.Element {
  console.log(cards)
  const cardsElements = cards.map((card)=>(

    <Card
      key={card._id} //TODO понять, почему не хочет оотрабоатывать key
      {...card}  
    />
  ))



  return (
    <main className="main">
      <Panel />
      <ul className="main__list">
        {cardsElements}
      </ul>
    </main>
  );
}

export default Main;
