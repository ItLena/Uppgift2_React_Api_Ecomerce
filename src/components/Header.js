import React from 'react'

import CartIcon from "./CartIcon"
import {Link} from "react-router-dom"


export default function Header() {
  return (
    <header className="header">
      <Link to ="/" className="nav-link">Home</Link>
      <Link to ="/productsList" className="nav-link">Products</Link>
      <Link to ="/cart" className="nav-link"><CartIcon /></Link>
    </header>
  )
}
