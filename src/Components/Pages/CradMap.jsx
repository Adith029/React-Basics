import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function CradMap() {

    const [first, setfirst] = useState(
        [{
            name:"Hat",
            prize:"300 $",
            Image:"  https://th.bing.com/th/id/OIP.WIRCYOYxyKTC3gvJ3mm4_gHaEc?w=253&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
            name:"Car",
            prize:"30000 $",
            Image:" https://th.bing.com/th/id/OIP.WIRCYOYxyKTC3gvJ3mm4_gHaEc?w=253&h=180&c=7&r=0&o=5&pid=1.7"
        }]
    )
  return (
    <div>

        {first.map((card)=>
        <>
        
        

    <Container style={{display:"inline-flex"}}>
      <Row>
        <Col><Card style={{ width: '18rem' }}>
      {<Card.Img variant="top" src={card.Image} />}
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>
          {card.prize}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
        
        
        </>
        
        
        )}


    </div>


  )
}

export default CradMap