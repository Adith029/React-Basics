import React from 'react'

function PromisePage() {

    function add(a,b){
        return new Promise((res,rej)=>{
            res(a+b)
        })
    }
    function sub(a,b){
        return new Promise((res,rej)=>{
            res(a-b)
        })
    }
    function mul(a,b){
        return new Promise((res,rej)=>{
            res(a*b)
        })
    }
    add(20,12).then((sum)=>{
        console.log(sum);
        return sub(sum,2)
    }).then((subn)=>{
        console.log(subn)
        return mul(subn,10)
    }).then((multi)=>{
        console.log(multi)
    })

  return (
    <div>PromisePage</div>
  )
}

export default PromisePage