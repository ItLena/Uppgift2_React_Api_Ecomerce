import React from 'react'

import CartIcon from "./CartIcon"
import {Link} from "react-router-dom"


export default function Header(props) {
  return (
    <header className="header">
      <span >
      <Link to ="/" className="nav-link">Home</Link>
      <Link to ="/productsList" className="nav-link">Products</Link>
      </span>
      <div className ="bag-cirkel">
      <Link to ="/cart" ><CartIcon countItems={props.countItems} / ></Link>
      </div>
    </header>
  )
}
