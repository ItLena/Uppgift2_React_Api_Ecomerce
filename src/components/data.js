

export const fetchProducts = async () => {
  return  await fetch("https://fakestoreapi.com/products")
    .then((response)=> response.json())
    .then ((data)=>console.log(data))
  }
