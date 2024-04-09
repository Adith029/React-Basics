import React from 'react'

function Promise1() {

    function add(a,b){
        return new Promise((res,rej)=>{
            if(a>10){
                res(a+b)
            }
        })
    }
    add(9,12).then((abc)=>{
        console.log(abc)
    })
   
  return (
    <div></div>
  )
}

export default Promise1