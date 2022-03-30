import React from 'react'
import Home from "./Home"
import CardList from "./CardList"
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <Link to ="/" className="nav-link">Home</Link>
      <Link to ="/cardList" className="nav-link">CardList</Link>
    </header>
  )
}
