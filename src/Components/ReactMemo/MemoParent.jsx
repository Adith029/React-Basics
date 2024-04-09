import React, { useCallback, useState } from 'react'
import { MemoChild1 } from './MemoChild'

function MemoParent() {

    const [first, setfirst] = useState(0)
    const [second, setsecond] = useState(0)
    console.log("Parent initiated")

    function hello(){
        console.log("Hello world")
    }
    const memoized =useCallback(hello,[first])
  return (
    <div>
        <button onClick={()=>setfirst(first+1)}>State 1 :{first}</button>
        <button onClick={()=>setsecond(second+1)}>State 1 :{second}</button>
        <MemoChild1 data={memoized}/>
    </div>
  )
}

export default MemoParent