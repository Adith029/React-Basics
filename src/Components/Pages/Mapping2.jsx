import React from 'react'

function Mapping2() {

    const arr =[2,3,4,22,34,5,6,6,54,65,43,96,85]
    // const filtered = arr.filter((item2)=>{
    //     return item2<10
    // })
    // const b =arr.slice(3,6);
    // console.log(b)
    const c = arr.splice(4,7)
    console.log(c)
  return (
    <div>
        {/* {arr.map((items)=>{
            console.log(items)
        })} */}
         {/* {filtered.map((item2)=>{
            console.log(item2)
        })} */}
        
        
    </div>
  )
}

export default Mapping2