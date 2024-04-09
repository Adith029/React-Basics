import React from 'react'
import { useParams } from 'react-router-dom'

function UseParam2() {

    const {user} = useParams();
  return (
    <div>
        <h1>Username</h1>
        <p>{user}</p>
    </div>
  )
}

export default UseParam2