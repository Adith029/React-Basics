import React, { useContext } from 'react'
import { NewContext2 } from './Router3x'
import { Button, Card } from 'react-bootstrap'


function Cardd() {
    const [first,setfirst]=useContext(NewContext2)
  return (
    <div>
        {first.map((item)=>
        <>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>  
        </>
        )}
    </div>
  )
}

export default Cardd