import React from 'react'
import { Alert } from 'react-bootstrap'

function AgePropsChild({val1}) {
  return (
    <div>
        {val1>=18? <h1>Adult</h1>:<h1>Minor</h1>}
    </div>
  )
}

export default AgePropsChild