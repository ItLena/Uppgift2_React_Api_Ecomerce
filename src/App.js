import React from 'react'
import Header from "./components/Header"
import CardList from "./components/CardList"
import Card from "./components/Card"
import Home from "./components/Home"
import Foot from "./components/Foot"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


export default function App() {

  return (
    <Router >
      <Header />  
      <Foot />  
      <Routes>
        <Route path="/" exact element = {<Home/>} />
        <Route path="/cardList" exact element= {<CardList/>} />
        <Route path="/card/:id" exact element = {<Card/>} />
      </Routes>  
    </Router>
  )
}
