import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Useeffect() {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(false)

    useEffect(() => {
      setloading(true);

      axios
      .get("https://dummyjson.com/products")
      .then(res=>{
        setproducts(res.data.products);
        setloading(false);
      })
    .catch(err => console.log(err));
},[]);
console.log(products);
    
  return loading ? (
    <div> Loading.....</div>
  ):(
  <div>
    {products.map((value)=>
    <>
    <h1 key={value.id}>{value.title}</h1>
    </>
    )}
  </div>
);
}

export default Useeffect