import React from 'react';
import './App.scss';
import Card from '../card/card';
import Header from '../header/header';

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Card />
      </div>
    </div>
  );
}

export default App;
