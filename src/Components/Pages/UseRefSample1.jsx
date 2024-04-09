import React, { useRef } from 'react'

function UseRefSample1() {
    const head= useRef()
    const divv=useRef()

    function change(){
        head.current.style.margin="auto"
        head.current.style.backgroundColor="red"
        head.current.style.color="white"
        divv.current.style.backgroundColor="black"
        divv.current.style.innerHtml="<h1>Hello World</h1>"
        divv.current.style.margin="auto"
    }

  return (
    <div><h1 ref={head}>
       Hello World 
        </h1>
        <div ref={divv} style={{width:"100px",height:"100px",backgroundColor:"cyan"}}></div>
        <button onClick={change}>click</button>
        </div>
  )
}

export default UseRefSample1