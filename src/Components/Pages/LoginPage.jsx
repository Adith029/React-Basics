import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function LoginPage() {
    const [username, setusername] = useState("")
    const [password, setpasswprd] = useState("")


    const display=(event)=>{
        event.preventDefault();
        console.log("E-mail:",username);
        console.log("Password:",password);
    }
  return (

    <div>
        <Form onSubmit={display}>
          <Form.Group className="mb-3" controlId="formGroupEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={username} onChange={(event)=>setusername(event.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(pass)=>setpasswprd(pass.target.value)} />
          </Form.Group>
          <Button type="submit">login</Button>
        </Form>
        </div>
  )
}

export default LoginPage