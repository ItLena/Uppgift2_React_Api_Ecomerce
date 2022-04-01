import React, { useState } from 'react'
import data from "./data"

export default function Cart(props) {
    const {cartItems, onAdd, onRemove} = props;
    const sum = cartItems.reduce((a,c)=>a + c.price * c.count, 0) 
   return (
      <div className= "cart-box">
         <h1>Your shopping cart</h1>
        <div>
            <h3>{cartItems.length ===0 && <p>Cart is empty</p>}</h3>
        </div>

        {cartItems.map((item)=>(
            <div key={item.id}>
                <h3>{item.title}</h3> 
                <span>{item.count} x ${item.price.toFixed(2)}</span>
                <span className="btn-container">
                <button className ="btn-add" onClick={() =>onAdd(item)}>+</button>
                <button className ="btn-add" onClick={() =>onRemove(item)}>-</button>
                </span>
            </div> 
        ))}

        {cartItems.length !== 0 && (
           <h4>Total price: {sum} $</h4>
        )}
      </div>
    
  )
}
