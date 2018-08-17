import React, { Component } from 'react';
import './App.css';

import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';
import Chatbot from './Componentes/Chatbot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className='conteudo'>
          <Home />
          <Chatbot />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
