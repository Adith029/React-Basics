import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function CardList() {

    const [first, setfirst] = useState([
        {
            name:"Flower",img:"https://i.pinimg.com/236x/e3/27/bd/e327bd58eeee655b8103bf72e6c832fc.jpg"
        },
        {
            name:"Flower",img:"https://i.pinimg.com/236x/0f/ef/e2/0fefe27507a39a5499d73155b218fb8c.jpg"
        },
        {
            name:"Flower",img:"https://i.pinimg.com/564x/71/8f/08/718f08b6ddc5768e36341d70fdf0f822.jpg"
        },
        {
            name:"Flower",img:"https://i.pinimg.com/236x/03/3d/e3/033de3079c5a4d6e9e57e495931449e6.jpg"
        },
    ])
  return (
    <div>

<Container style={{display:"flex"}}>
    {first.map((items)=>
      <Row>
        <Col><Card style={{ width: '18rem' }}>
     <img src={items.img} alt="" />
      <Card.Body>
        <Card.Title>{items.img}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
      </Row>
      )}
    </Container>

        <Button onClick={()=>setfirst([{
         name:"Flower",img:"https://i.pinimg.com/236x/15/53/f5/1553f507ae736176e250efdc12c43b28.jpg"   
        },
        {
            name:"Flower",img:"https://i.pinimg.com/564x/7a/aa/a5/7aaaa545e00e8a434850e80b8910dd94.jpg"   
           },
           {
            name:"Flower",img:"https://i.pinimg.com/236x/84/ac/05/84ac05010335404ad7d9703908c55fbd.jpg"   
           },
           {
            name:"Flower",img:"https://i.pinimg.com/236x/84/ac/05/84ac05010335404ad7d9703908c55fbd.jpg"   
           },
        ])}> More</Button>
    </div>
  )
}

export default CardList