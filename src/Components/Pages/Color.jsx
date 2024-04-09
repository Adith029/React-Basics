import React from 'react'
import { useState } from 'react'

function Color() {


    const Position ={textAlign:"left"}
    const Red={backgroundColor:"Red"}
    const Yellow={backgroundColor:"Yellow"}
    const Green={backgroundColor:"green"}
    const Brown={backgroundColor:"brown"}

    const Red2={backgroundColor:"Red",borderRadius:"30px", width:"80px"}
    const Yellow2={backgroundColor:"Yellow",borderRadius:"30px", width:"80px"}
    const Green2={backgroundColor:"green",borderRadius:"30px", width:"80px"}
    const Brown2={backgroundColor:"brown",borderRadius:"30px", width:"80px"}

    const [first, setfirst] = useState("No Color")
    const [txtcolor, settxtcolor] = useState("white")
    
  return (
    <div>
        <div style={Position}>
        <h1> {first}</h1>
        <button style={Red} onClick={()=>setfirst("Red")}>Red</button>
        <button style={Yellow}  onClick={()=>setfirst("Yellow")}>Yellow</button>
        <button style={Green}  onClick={()=>setfirst("Green")}>Green</button>
        <button style={Brown}  onClick={()=>setfirst("Brown")}>Brown</button>
        </div>

    <h1 style={{color:txtcolor}}>Text color is {txtcolor}</h1>
        <button style={Red2} onClick={()=>settxtcolor("Red")}>Red</button>
        <button style={Yellow2} onClick={()=>settxtcolor("Yellow")}>Yellow</button>
        <button style={Green2} onClick={()=>settxtcolor("Green")}>Green</button>
        <button style={Brown2} onClick={()=>settxtcolor("Brown")}>Brown</button>
    </div>
  )
}

export default Color