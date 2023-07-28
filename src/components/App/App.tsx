import React from 'react';
import './App.scss';
import Header from '../header/header';
import Main from '../main/main';

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
