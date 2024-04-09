import React, { useState } from 'react'

function TableMapping() {

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
    ])

  return (
    <div>
        
        {first.map((item)=>
        <>
        
        <table style={{border:"2px",padding:"20px",cellspacing:"20px"}}>  
            <tr style={{border:"2px solid black",height:"200px",width:"400px"}}>
                <td style={{border:"2px solid black",padding:"20px",height:"200px",width:"400px"}}>{item.name}</td>
                <td style={{border:"2px solid black",padding:"20px",height:"200px",width:"400px"}}>{item.price}</td>
                <td style={{border:"2px solid black",padding:"20px",height:"200px",width:"400px"}}> <img src={item.image} alt="" height={100}/></td>
            </tr>
        </table>
        
        </>
        )}

    </div>
  )
}

export default TableMapping