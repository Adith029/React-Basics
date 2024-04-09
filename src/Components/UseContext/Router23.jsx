import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import UserPArams from '../Pages/UserPArams';


const Newcontext = createContext();
function Router23() {


const[data ,setData]=useState([{name:"A",age:"22"}])


console.log(data)
  return (

    
<div>
    <Newcontext.Provider value={[data,setData]}>
<BrowserRouter>
<Routes>

<Route path='/profile/:username' element={<><UserPArams/></>}/>
</Routes>
</BrowserRouter>
    </Newcontext.Provider>
    
    </div>
  )
}

export default Router23
export {Newcontext}