import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UseEffect3() {

    const [first, setfirst] = useState([])

    useEffect (()=>{

        async function dishes(){
           const data=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
           console.log("async await",data.data.categories);
           setfirst(data.data.categories)
        }
        dishes();

        

    },[])
  return (
    <div className="main">
        {first.map((item)=>(
        <Link to={`demo/${item.idCategory}`}>    <div className='items'>
                <img src={item.strCategoryThumb} alt="" height={250} />
                <h1>{item.strCategory}</h1>
            </div></Link>
        ))}
    </div>
  )
}

export default UseEffect3