import React from "react";
import "./App.css";
import Card from "./Components/Script/Card";
import ShowCard from "./Components/Script/ShowCard";
import Header from "./Components/Script/Header";
import { CartProvider } from "react-use-cart";


function App() {
  return (
    <div className="App">
      
        <Header />

        
          <CartProvider>
            
          <Card/>
          <ShowCard/>
          </CartProvider>

        
    </div>
  );
}

export default App;
