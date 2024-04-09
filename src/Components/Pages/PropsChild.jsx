import React from 'react';

function PropsChild({ val1, val2 }) {
  return (
    <div>
      {val1.map((display,ind)=>
      <>
      <h1>{display.name}</h1>
      <h1>{display.age}</h1>
      <h1>{display.place}</h1>
      <h1>{display.hair}</h1>
      <h1>{display.ph}</h1>
      </>)}
      <button onClick={() => val2(val1.map((item,index)=>index===0? {...item,age:28}: item))}>Button</button>
    </div>
  );
}

export default PropsChild;
