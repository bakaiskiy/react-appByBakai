import React from "react";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Routing from "./Routing";

import ProductsContextProvider from "./contexts/productsContext";
import AuthContextProvider from "./contexts/authContext";
import "./App.css";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <Header />
        <Routing />
        <Footer />
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
