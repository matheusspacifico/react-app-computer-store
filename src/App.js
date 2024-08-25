import React, { useState } from "react";
import Header from "./components/Header/Header";
import CompletionSheet from "./components/CompletionSheet/CompletionSheet";
import "./App.css";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  const [products, setProducts] = useState([]);

  function addProduct(newProduct){
    const newList = products.slice();
    newList.push(newProduct);
    setProducts(newList);
  }

  return (
    <div className="App">
      <Header></Header>
      <CompletionSheet onAddProduct={newProduct => addProduct(newProduct)}></CompletionSheet>
      <ProductsList objects={products}></ProductsList>
    </div>
  );
}

export default App;
