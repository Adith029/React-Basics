import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userDelete, userUpdate } from './User'

function Demo() {


const dispatch = useDispatch()
const { list }= useSelector(state => state.user)
const [todo, setTodo] = useState("")
console.log(list)





  return (
    <div>
       <input type="text" onChange={(e)=>setTodo(e.target.value)}/>
       <button onClick={()=>dispatch(userUpdate({list:todo}))}>Add</button>
       <button onClick={()=>dispatch(userDelete({list:todo}))}>delete</button>
       {list?.map((items,index)=>(
       
        <h6 key={index} onClick={()=>dispatch(userDelete({list:items}))}>{items} </h6>
        
       
       ))}       
    </div>
  )
}

export default Demo