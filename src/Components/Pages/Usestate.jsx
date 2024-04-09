import React from 'react'
import { useState } from 'react'

function Usestate() {


const [name, setfirst] = useState("Hello World")
let [count, setcount] = useState(1)

// if(count<0){
//     alert("The result is less than 0");
//     setcount(0)
// }

const decremnt=()=>{
    if(count<=0)
    {
        alert("not possible")
    }
    else{
        setcount(count-1)
    }
}

let change =() => setfirst("Hello Universe")
  return (
    <div>
     <h1>  {name}</h1> 
     <button onClick={change}>Change</button>
     <button onClick={()=>setfirst("Hello World")}>Change2</button>

     <br /><br />
    <h1>Count:{count}</h1>
     <button onClick={()=>setcount(count+1)}>Counter</button>
     {/* <button onClick={()=>setcount(count-1)

    }>Counter</button> */}
    <button  onClick={decremnt}>decremnt</button>
        </div>
  )
}

export default Usestate