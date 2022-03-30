import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function ProductsList(props) {
    const {onAdd} = props;
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProduct] = useState([]);
  console.log("CardList")
    const onSearchChange = (e)=>{
        e.preventDefault();
        const filtered = products.filter(x=> x.title.toLowerCase().includes(e.target.value.toLowerCase())|| x.category.toLowerCase().includes(e.target.value.toLowerCase()))
        
        setFilteredProduct(filtered)
    }
    console.log(onSearchChange)
   useEffect(async()=>{
       await fetch ("https://fakestoreapi.com/products") 
        .then(res=>res.json())
        .then(data=>{setProducts(data)
            setFilteredProduct(data)})
    }, [])
  
    const productsList = filteredProducts.map( item =>{        
      return(
        <div className="card-box" key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.category}</p>
          <img className="img-product" src={item.image} alt="" />
          <h3>Price: {item.price}$</h3>    
          <h>{item.raiting}</h>
           <Link to={`/product/${item.id}`}>Show details</Link>
           <button onClick={() =>onAdd(item)} className="btn-shop">Add to Cart</button>
        </div>)});
   console.log(filteredProducts)   


  return ( 
    <div className="main-container">      
       <input className ="input-search" type="search" placeholder='Search after product'onChange={onSearchChange} /> 
       <div className="products-container">{productsList}</div>       
   </div>
   )
}




