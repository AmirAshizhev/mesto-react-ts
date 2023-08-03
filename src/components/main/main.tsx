import React from 'react';
import './main.scss';
import Panel from '../panel/panel';
import Card from '../card/card';

function Main(): React.JSX.Element {
  return (
    <main className="main">
      <Panel />
      <ul className="main__list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </main>
  );
}

export default Main;
