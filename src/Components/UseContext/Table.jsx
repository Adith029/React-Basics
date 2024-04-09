import React, { useContext } from 'react'
import { Newcontext } from './Router23'

function Table() {
    const [data,setData]= useContext(Newcontext)
    console.log(data)
  return (
    <div>
        <table><tr><th>Name</th> <th>Age</th></tr>
        {data.map((item)=>
        <>
        <tr>
            <td>{item.name}</td>
            <td>{item.age}</td>
        </tr>
        </>
        )}</table>
    </div>
  )
}

export default Table