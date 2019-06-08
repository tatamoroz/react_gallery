import React from 'react';
import './style.scss';
import Header from '../Header';
import Footer from '../Footer';
import Router from '../../core/Router';

function App() {

  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
