import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DemoPage1 from './DemoPage1'
import SamplePage from './SamplePage'
import UseEffect3 from '../Pages/UseEffect3'

function RouterPage() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<><UseEffect3/></>}/>
            <Route path='/demo/:id' element={<><SamplePage/></>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterPage