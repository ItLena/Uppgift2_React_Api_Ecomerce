import React from 'react'
import bag from "../images/bag.png"

export default function CartIcon(props) {
    return (
        <div>
          <img src={bag} alt="" className="img-bag"/>
          {props.countItems ? (
          <span> {props.countItems}</span>
          ) : (0)}
        </div>
        )
}
