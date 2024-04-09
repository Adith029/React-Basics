import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../style/Usestate.css'

function Useeffect2() {

    const [products, setproducts] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
      setloading(true);
      axios
      .get("https://dummyjson.com/products")
      .then(res=>{
        setproducts(res.data.products);
        setloading(false);
      })
    .catch(err => console.log(err) )
    }, [])
    console.log(products)
    
  return (
    <div className='body'>
    <Container style={{padding:"20px"}}>
      <Row style={{paddingtop:"20px"}}>
      {products.map((value)=>
      
        <>
        
        
        <Col key={value.id} xs={12} sm={6} md={4} lg={3} style={{padding:"30px",margin:"50px",border:"2px solid black", backgroundColor:"transparent"}}>
        <Card className="h-100" style={{ width: '100%',padding:"20px",backgroundColor:"transparent",color:"whitesmoke" }}>
        <Card.Img variant="top" src={value.thumbnail}  height={120}/>
      <Card.Body>
        <Card.Title>{value.title}</Card.Title>
        <Card.Text>
         <p> Description:{value.description} </p>
        </Card.Text>
        <Card.Text>
         <p> Price: {value.price} $</p>
        </Card.Text>
        <Card.Text>
         <p style={{backgroundColor:"red"}}> Discount: {value.discountPercentage} % </p>
        </Card.Text>
        <Button variant="success">Buy Now</Button>{' '}
      </Card.Body>
    </Card>
    </Col>
    
        </>
        )}
    </Row>
      
    
  </Container>
  </div>
  )
}

export default Useeffect2