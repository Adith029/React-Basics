import React, { useState } from 'react'

function Object1() {


    const [first, setfirst] = useState({name:"A",age:20})
  return (
    <div>
        
        <h1>{first.name}</h1>
        <h1>{first.age}</h1>
    </div>
  )
}

export default Object1