import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UseEffect3 from './UseEffect3'
import DemoPage from './DemoPage'

function Router() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<><UseEffect3/></>}/>
            <Route path={'/demo'} element={<><DemoPage/></>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router