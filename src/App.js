import React from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routing from './Routing';

import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Routing />
      <Footer />
    </div>
  );
};

export default App;