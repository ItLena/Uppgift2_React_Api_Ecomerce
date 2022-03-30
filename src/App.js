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
 const [cartItems, setCartItems] = useState([]);
const onAdd= (product)=>{
  const exist = cartItems.find(x=>x.id === product.id);
  if(exist == true){
    setCartItems(cartItems.map(x=>x.id===product.id ? {...exist, count: exist.count +1} : x));
  }
  else {
    setCartItems([...cartItems, {...product, count: 1}])
  }
}
  return (
    <Router >
      <Header />  
      <Foot />  
      <Routes>
        <Route path="/" exact element = {<Home/>} />
        <Route path="/productsList" exact element= {<ProductsList onAdd={onAdd}/>} />
        <Route path="/product/:id" exact element = {<Product/>} />
        <Route path="/cart" exact element = {<Cart onAdd={onAdd} cartItems={cartItems}/>} />
      </Routes>  
    </Router>
  )
}
