import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from '../header/header';
import Main from '../main/main';
import Footer from '../footer/footer';
import api from '../../utils/api';
import type { Card } from '../../types/types';

function App(): JSX.Element {
  const [cards, setCards] = useState<Card[]>([])

  useEffect(()=>{
    Promise.all([api.getInitialCards()])
      .then((cards)=>{
        console.log(cards)
        // setCurrentUser(userInformation)
        setCards(cards)
      })
      .catch(err => {
        console.log(err);
      });
  }, [])

  console.log(cards)

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
