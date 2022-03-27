import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import CurrentAticle from './MainContent/CurrentAticle';

function App() {
  return (
    <React.Fragment>
      <Header />
      <CurrentAticle />
    </React.Fragment>
  );
}

export default App;
