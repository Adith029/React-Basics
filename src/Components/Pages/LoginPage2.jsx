import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

function LoginPage2() {
    const [user, setuser] = useState({name:"",password:"",address:"",city:"",pincod:""})
    const [radio, setradio] = useState("")
    const [drop, setdrop] = useState("")
    const [check, setcheck] = useState(false)
    
    const display=(view)=>{
        view.preventDefault()
        console.log("UserName:",user.name)
        console.log("Password:",user.password)
        console.log("Address:",user.address)
        console.log("Gender:",radio)
        console.log("City",user.city)
        console.log("State:",drop)
        console.log("Pin:",user.pincod)
        console.log("Check:",check)
    }
  return (
    <div><Form onSubmit={display} style={{width:"600px",margin:"auto",marginTop:"100px",backgroundColor:"black",color:"white",padding:"20px"}}>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridUserName">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter Username"  onChange={(usrname)=>setuser({...user,name:usrname.target.value})}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={(pass)=>setuser({...user,password:pass.target.value})} />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Main St"  onChange={(add)=>setuser({...user,address:add.target.value})}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridRadio">
      <Form.Label>Gender</Form.Label> <br />
      <label htmlFor="">Male</label>&nbsp;
      <input type="radio" name='gender' checked={radio==='Male'} value="Male" onChange={()=>setradio("Male")}/>
      &nbsp;&nbsp;&nbsp;
      <label htmlFor="">Female</label>&nbsp;
      <input type="radio" name='gender' checked={radio==='Female'} value="Female" onChange={()=>setradio("Female")}/> 
 
    </Form.Group>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control  onChange={(ct)=>setuser({...user,city:ct.target.value})} />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Select defaultValue="Choose..." onChange={(drp)=>setdrop(drp.target.value)} defaultChecked={drop}>
        <option value="">Select a state</option>
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>

        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control  onChange={(pin)=>setuser({...user,pincod:pin.target.value})} />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" id="formGridCheckbox">
      <Form.Check type="checkbox" label="Check me out" onChange={(ck)=>setcheck(!check)} />
    </Form.Group>

    

    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form></div>
  )
}

export default LoginPage2