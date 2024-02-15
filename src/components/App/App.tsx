import React, { useEffect } from 'react';
import './App.scss';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import api from '../../utils/api';

function App(): JSX.Element {

  useEffect(()=>{
    Promise.all([api.getInitialCards()])
      .then((cards)=>{
        console.log(cards)
        // setCurrentUser(userInformation)
        // setCards(cards)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App;
