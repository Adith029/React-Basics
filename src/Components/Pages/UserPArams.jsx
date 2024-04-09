import React from 'react'
import { useParams } from 'react-router-dom'

const UserPArams=()=> {

    const {username} =useParams();
  return (
    <div>
        <h1>UserProfile</h1>
        <p>Username:{username}</p>
    </div>
  )
}

export default UserPArams