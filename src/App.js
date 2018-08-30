import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux'

import store from './store'

import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Home from './Componentes/Home';
import Chatbot from './Componentes/Chatbot';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="conteudo">
          <Header />
          <Home />
          <Chatbot />
          <Footer />
        </div>
      </Provider>

    );
  }
}

export default App;
