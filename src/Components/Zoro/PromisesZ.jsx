import React from 'react'

function PromisesZ() {
   const display=()=>{
        return new Promise((resolve,reject)=>{
            resolve=(2+4)
            if(resolve==7){
                console.log("Success")
            }else{
                reject("Failure")
            }
        })
    }
    display().then((item)=>{
        console.log(item)
    }).catch((err)=>{
        console.log(err)
    })
    function blue(){
        return "Hello World"
    }
    async function AsyncAwait(){
        let var1=await blue()
        console.log(var1)
    }
    AsyncAwait()
  return (
    <div>PromisesZ</div>
  )
}

export default PromisesZ