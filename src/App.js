import React from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";

import ProductsContextProvider from "./contexts/productsContext";
import AuthContextProvider from "./contexts/authContext";
import "./App.css";
import CartContextProvider from "./contexts/cartContext";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Header />
            <Routing />
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
