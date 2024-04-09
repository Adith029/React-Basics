import React from 'react'
import { SlAnchor } from "react-icons/sl";
function Internal() {


    const helloWorld ={color:"red",backgroundColor:"black",width:"50%",height:"45%" ,margin:"auto",textAlign:"center"}
  return (
    <div>
        <p style={helloWorld}d>Hello World</p>
        <div><SlAnchor/></div>
        <div><SlAnchor/></div>
        <div><SlAnchor/></div>
    </div>
  )
}

export default Internal