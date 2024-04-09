import React, { useState } from 'react';
import PropsChild from './PropsChild';

function Props() {
  const [tr, settr] = useState([{ name: "Jishnu", age: 21 }, { place: "Kozhikode", ph: "0000000" }, { hair: "black", collage: "AWH" }]);
  
  return (
    <div>
      <PropsChild val1={tr} val2={settr} />
    </div>
  );
}

export default Props;
