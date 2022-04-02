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
            <div className="grid-items" key={item.id}>
                <div>{item.title}</div> 
                <div>{item.count} x ${item.price.toFixed(2)}</div>
                <div className="btn-container">
                <button className ="btn-add" onClick={() =>onAdd(item)}>+</button>
                <button className ="btn-add" onClick={() =>onRemove(item)}>-</button>
                </div>
            </div> 
        ))}

        {cartItems.length !== 0 && (
           <h4>Total price: {sum.toFixed(2)} $</h4>
        )}
      </div>
    
  )
}
