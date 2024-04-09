import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toDoDelete, toDoListUpdate } from './Todoo'
import "./ToDoList.css"


function ToDoList() {

    const dispatch = useDispatch()
    const {list} = useSelector(state => state.list)
    const [toDo,setToDo]=useState("")
    const[check,setCheck]=useState(false)
    console.log(list)
  return (
    <div>
    <div className="todo-container">
        <input type="text" className="todo-input" onChange={(e)=>setToDo(e.target.value)}/>
        <button className="todo-button" onClick={()=>dispatch(toDoListUpdate({list:toDo}))}>Add</button>
        </div>
       <div className='created-list'>
        <ul className="todo-list">
        {list?.map((items)=>(
           <li className="todo-item">{items} 
            <input type="checkbox" className="todo-checkbox" onChange={()=>dispatch(toDoDelete({list:check}))} />
            <hr /></li> 
        ))}
        </ul>
        </div>
        </div>
  )
}

export default ToDoList