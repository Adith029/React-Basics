import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function UseNavigate() {

const navigate = useNavigate()

    const sample=()=>{
        navigate('/sample')
    }

  return (
    <div><button onClick={sample}>Button</button></div>
  )
}

export default UseNavigate