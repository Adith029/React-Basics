import React, { useState } from 'react'
import Darkmode from './Darkmode'
import TableMapping from './TableMapping'
 

function MapComponent() {

    const [first, setfirst] = useState(false)
    const click=()=>{
        setfirst(!first)
    }
  return (
    <div>
{first? <Darkmode/>:<TableMapping/>}
<button onClick={click}>{first? "hide":"show"}</button>
    </div>
  )
}


export default MapComponent