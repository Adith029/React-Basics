import React from 'react'

function Callback() {


    function add(a,b,cb){
      const  result = a+b;
        cb(result)
    }
    function subtract(a,b,cb){
      const  result = a-b;
       cb(result)
    }
    add(2,5,(cbresult)=>{
        console.log(cbresult);
        subtract(4,3,(cbsub)=>{
            console.log(cbsub);  
        })
    })
  return (
    <div>Callback</div>
  )
}

export default Callback