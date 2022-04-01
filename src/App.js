
import './App.css';
import Header from './components/header/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Product from './components/form/Product';
import axios from 'axios';
import {useState,useEffect} from "react"

function App() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios
    .get("https://fakestoreapi.com/products")
    .then((result)=>{
      setProduct(result.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  
  return (
    <Router className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Product product={product}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
