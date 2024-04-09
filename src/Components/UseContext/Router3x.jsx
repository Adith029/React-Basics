import React, { createContext, useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cardd from './Cardd';
import UseParam2 from './UseParam2';


const NewContext2 = createContext();
function Router3x() {

    const [first, setfirst] = useState([{
        name:"A",img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
    },
{
    name:"B", img:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
}])

  return (
    <div>
        <NewContext2.Provider value={[first,setfirst]}>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<><Cardd/></>}/>
        <Route path='/profile/:user' element={<><UseParam2/></>}/>
    </Routes>
    </BrowserRouter>
        </NewContext2.Provider>
    </div>
  )
}

export default Router3x
export {NewContext2}