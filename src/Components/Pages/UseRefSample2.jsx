import React, { useEffect, useRef } from 'react'

function UseRefSample2() {
    const name =useRef()
    const email =useRef()
    const password =useRef()

    useEffect(()=>{
        password.current.focus()
    },[])

    function display(){
     var a=name.current.value
     var b=email.current.value
     var c=password.current.value
     console.log(a,b,c)
    }



  return (
    <div>
        <input ref={name} type="text" placeholder='name' />
        <input ref={email} type="text" placeholder='email' />
        <input ref={password} type="text" placeholder='password' />
        <button onClick={display}>Submit</button>
    </div>
  )
}

export default UseRefSample2