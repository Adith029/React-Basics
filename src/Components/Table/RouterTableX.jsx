import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserTable from './UserTable';

const Newcontext = createContext();
function RouterTableX() {

    const [data, setdata] = useState([{
       no:1 ,name:"Adith",age:"22",qualfcn:"Bsc"
    },
    {
        no:2 ,name:"Jishnu",age:"21",qualfcn:"Bsc"
     },
     {
        no:3 ,name:"Aromal",age:"23",qualfcn:"Bsc"
     },
     {
        no:4,name:"Midhun",age:"24",qualfcn:"Bsc"
     }])
  return (
    <div>
        <Newcontext.Provider value={[data,setdata]}>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<><UserTable/></>}/>
            </Routes>
            </BrowserRouter>
        </Newcontext.Provider>
    </div>
  )
}

export default RouterTableX
export {Newcontext}