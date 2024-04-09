import React, { useReducer } from 'react'

function Usereduces() {
    const initialvalue=0

    const display=(state,action)=>{
        switch(action.type){
            case "inc":
                return state=state+1

                case "dec":
                return state=state>0?state-1:0 

                case "reset":
                return state=0

                default:
                    return state
        }

    }

    const [d,dispatch]=useReducer(display,initialvalue)
  return (
    <div>
        <h1>{d}</h1>
        <button onClick={()=>dispatch({type:"inc"})}>Increment</button>
        <button onClick={()=>dispatch({type:"dec"})}>Decrement</button>
        <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default Usereduces