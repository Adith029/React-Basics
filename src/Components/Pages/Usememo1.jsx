import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

function Usememo1() {
    const [first, setfirst] = useState(0)
    const [first1, setfirst1] = useState(0)

    const isEven= useMemo(()=>{
    let i=0
        while(i<1000000000)
            i++
            return first%2===0
        
},[first])
  return (
    <div>
        <button onClick={()=>setfirst(first+1)}>First</button>
        <h1>{first}</h1>
        {isEven? <h1>Even</h1>:<h1>Odd</h1>}
        <button onClick={()=>setfirst1(first1+1)}>First1</button>
        <h1>{first1}</h1>
    </div>
  )
}

export default Usememo1