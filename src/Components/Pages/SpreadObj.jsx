import React, { useState } from 'react'

function SpreadObj() {

    const [car, setcar] = useState([
        {name:"Alto",color:"red"},{name:"Swift",color:"black"}
    ])
    const [car2, setcar2] = useState({name:"BMW",color:"White"})

    const add=()=>{
        setcar([...car,{...car2}])
    }
  return (

    <div>
        <table>
    <tr>
    <th><b>Car</b></th>
        <th> <b>Color</b></th>
    </tr>
    {car.map((item)=>
    <tr>
        
        <td>{item.name}</td>
        <td>{item.color}</td>
      
    </tr>
        )}      
            
        </table>
        <button onClick={add}>Add Car</button>
    </div>

  )
}

export default SpreadObj