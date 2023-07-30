import React from 'react';
import './App.scss';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
