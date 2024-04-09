import React from 'react'

function AsyncAwait() {

    function display(){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res("Hello")
            },3000)
        })
    }
    function display1(){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res("World")
            },3000)
        })
    }
    display().then((first)=>{
        console.log(first)
    })
    display1().then((second)=>{
        console.log(second)
    })
    async function helloworld(){
        var name =await display()
        console.log(name);
        var name2= await display1()
        console.log(name2)
    }
    helloworld()
    Promise.all([display(),display1()]).then((data)=>{
        console.log(data)
    })
  return (
    <div></div>
  )
}

export default AsyncAwait