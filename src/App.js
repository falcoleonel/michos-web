import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'

function App() {

  const marray = [1,2,3];

  return (
    <div className="App">
      {/* Header */}
      <Header/>
      {/* Banner */}
      <Banner/>
      {/* Content */}
      <div className="Content">
        <h1>Aquí va el contenido</h1>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
