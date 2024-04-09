import React, { useState } from 'react'

function ArrayOfObj() {


    const [first, setfirst] = useState([{name:"Jishnu",age:21,},{name:"Vishnu",age:23,},{name:"Jish",age:31}])
    
  return (
    <div>
        {first.map((item,ind)=>
        <>
        <p>{ind+1}</p>
        <h1>{item.name} {item.age}

        
        
        </h1>
        
        
        </>
        
        )}
        
   
        <button onClick={()=>setfirst(first.map((item,index)=>index===0? {...item,age:29}:item ))}>change</button>
    
    </div>
  )
}

export default ArrayOfObj