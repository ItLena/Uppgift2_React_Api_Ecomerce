import React from 'react'
import bag from "../images/bag.png"

export default function CartIcon() {
  return (
    <div>
      <img src={bag} alt="" className="img-bag"/>
      <span>0</span>
    </div>
  )
}
