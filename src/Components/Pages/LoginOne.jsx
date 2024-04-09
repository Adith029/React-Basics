import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

function LoginOne() {
    const [cred, setcred] = useState(
        {name:"",password:""} 
    )

        const display=(event)=>{
            event.preventDefault()
            console.log("E-Mail:",cred.name)
            console.log("Password:",cred.password)
        }
  
  return (
    <div>
        
        <Form onSubmit={display}>
          <Form.Group className="mb-3" controlId="formGroupEmail" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={cred.name} onChange={(event) => setcred({ ...cred,name: event.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={cred.password} onChange={(pass)=>setcred({...cred,password:pass.target.value})} />
          </Form.Group>
          <Button type="submit">login</Button>
        </Form>
       
    </div>
  )
}

export default LoginOne