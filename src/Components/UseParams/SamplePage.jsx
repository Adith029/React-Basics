import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function SamplePage() {

    const navigate = useNavigate()
    
    const data = useParams()
    console.log("*******",data)
    const [first, setfirst] = useState([])
    useEffect (()=>{

        async function dishes(){
           const data=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
           console.log("async await",data.data.categories);
           setfirst(data.data.categories)
        }
        dishes();
        const filterData=first.filter((dishes)=>{
            return dishes.idCategory == data.id;
        })
        setTimeout(()=>{
            navigate('/')
        },3000)
        

    },[])
    const filterData=first.filter((dishes)=>{
        return dishes.idCategory == data.id;

        
    })
  return (
    <div className="main">
        {filterData.map((item)=>(
            <div className='items1'>
                <img src={item.strCategoryThumb} alt="" height={250} />
                <h1>{item.strCategory}</h1>
                <p>{item.strCategoryDescription}</p>
            </div>
        ))}
    </div>

  )
}

export default SamplePage