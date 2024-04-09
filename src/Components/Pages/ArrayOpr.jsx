import React from 'react'

function ArrayOpr() {
    const arr =[43,45,16,43,83,97,25,34,65,78,98]
    // const b=arr.some((li)=>{
    //     return li>10
    // })
    const b=arr.every((li)=>{
        return li>20
    })
    console.log(b)
  return (
    <div>ArrayOpr</div>
  )
}

export default ArrayOpr