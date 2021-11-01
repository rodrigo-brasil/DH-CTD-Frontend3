import React from 'react';
import Header from './Components/Header';
import { Footer } from './Components/Footer';
import { Banner } from './Components/Banner';
import { Galeria } from './Components/Galeria';
import "dotenv/config";
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Banner>
        <h2>Olá!</h2>
        <p>Este é meu primeiro projeto em ReactJS</p>
      </Banner>
      <Galeria />
      <Footer />
    </div>
  );
}

export default App;
