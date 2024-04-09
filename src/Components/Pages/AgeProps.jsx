import React, { useState } from 'react'
import AgePropsChild from './AgePropsChild'


function AgeProps() {
    const [age, setage] = useState(20)
  return (
    <div>
        <AgePropsChild val1={age}/>
    </div>
  )
}

export default AgeProps