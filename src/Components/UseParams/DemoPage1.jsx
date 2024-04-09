import React from 'react'
import { Link } from 'react-router-dom'

function DemoPage1() {
  return (
    <div>
      <Link to={'sample/123'}>  <h1>Hello World</h1></Link>
    </div>
  )
}

export default DemoPage1