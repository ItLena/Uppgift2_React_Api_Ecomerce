import React, {useState, useEffect} from 'react'
import {useParams} from "react-router"



export default function Product(props) {
const {id} = useParams();
const [product, setProduct] = useState([]);
const {onAdd} = props;
useEffect(()=>{
  async function getProduct(id) {
 
   await fetch('https://fakestoreapi.com/products/'+ id)
  .then(
    response => response.json())
  .then(data=>{setProduct(data)
  console.log(data)});
}
 getProduct(id);

}, [id])


console.log(product.rating)
  return(
    <div className="card-details" key={product.id}>
         
          <img className="img-details" src={product.image} alt="" />
          <span className="product-text"  > 
            <h4>{product.title}</h4>
            <p><b>Product Id:</b> {product.id}</p> 
            <p><b>Category:</b> {product.category}</p>
            <p><b>Description:</b> {product.description}</p>
            <p><b>Price:</b>{product.price}$</p>  
            <p><b>Rating:</b> {product.rating && product.rating.rate} (Voited: {product.rating && product.rating.count})</p>  
            <button onClick={() =>onAdd(product)} className="btn-shop">Add to Cart</button> 
          </span>
         
    </div>
  )
   
}

  