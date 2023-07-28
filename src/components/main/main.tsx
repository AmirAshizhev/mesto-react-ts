import React from 'react';
import './main.scss';
import Panel from '../panel/panel';
import Card from '../card/card';

function Main(): React.JSX.Element {
  return (
    <main className="main">
      <Panel />
      <Card />
    </main>
  );
}

export default Main;
