import React, {useState} from 'react'
import Header from "./components/Header"
import ProductsList from "./components/ProductsList"
import Product from "./components/Product"
import Home from "./components/Home"
import Foot from "./components/Foot"
import Cart from "./components/Cart"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import data from "./components/data"


export default function App() {
 const [shoppingBag, setShoppingBag] = useState([]);

  return (
    <Router >
      <Header />  
      <Foot />  
      <Routes>
        <Route path="/" exact element = {<Home/>} />
        <Route path="/productsList" exact element= {<ProductsList />} />
        <Route path="/product/:id" exact element = {<Product/>} />
        <Route path="/cart" exact element = {<Cart />} />
      </Routes>  
    </Router>
  )
}
