import React from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routing from './Routing';

import ProductsContextProvider from './contexts/productsContext';
import './App.css';

const App = () => {
  return (
    <ProductsContextProvider>
      <Header />
      <Routing />
      <Footer />
    </ProductsContextProvider>
  );
};

export default App;