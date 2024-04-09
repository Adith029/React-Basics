import React, { useState } from 'react'

function Ternary() {

    const [first, setfirst] = useState(false)
  return (
    <div>

    {first?<h1>Hello World</h1>:""}
    <button onClick={()=> setfirst(!first)}>{first?<p>Hide</p>:<p>Show</p>}</button>
    </div>
  )
}

export default Ternary