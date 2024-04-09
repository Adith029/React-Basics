import React, { useState } from 'react'


function Darkmode() {

    const [first, setfirst] = useState(false)
  return (
    <div>
        <div className={first? 'dark':'light'}>
        {first? <h1>Dark Mode</h1>:<h1>Light Mode</h1>}
        
        
        <button onClick={()=>{setfirst(!first)}}>Change</button>
        </div>
    </div>
  )
}

export default Darkmode