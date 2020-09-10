import React, {useEffect, useState} from 'react';

import './App.css';

import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Micho from './components/Item/Micho'
import data from './assets/michos.json'

function App() {
  
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      {/* Banner */}
      <Banner/>
      {/* Content */}
      <div className="Content">
        {
          data.map(micho => <Micho key={micho.name} Images={micho.images} Name={micho.name}/>)
        }
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
