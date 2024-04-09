import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

function CarouselMapping() {
  const [first, setfirst] = useState([
    {
      name: "Hat",
      price: "30",
      image:
        "https://i5.walmartimages.com/asr/23eaf7a5-0a82-452b-8dc3-7abe42be7031_1.07c72c20c19c76092f39292f280de130.jpeg",
    },
    {
      name: "Car",
      price: 300000,
      image:
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=road-car-vehicle-170811.jpg&fm=jpg",
    },
    {
      name: "Phone",
      price: "400000",
      image:
        "https://th.bing.com/th/id/OIP.BQhwKHwVYvkFSiV6jwk_RAHaHj?w=175&h=180&c=7&r=0&o=5&pid=1.7",
    },
  ]);
  return (
    <div>
      {/* <Carousel>
    {first.map((item)=>
      <Carousel.Item>
        
       <img src={item.image} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      )}
    </Carousel> */}

      
<Carousel>
    {first.map((item)=>
      <Carousel.Item>

<img src={item.image} alt=""  height={500}/>        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      )}
      </Carousel>
    </div>
  );
}

export default CarouselMapping;
