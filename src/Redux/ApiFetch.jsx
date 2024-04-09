import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { addtoData } from './DataStoreAction'

function ApiFetch() {
const [state, setstate] = useState([])
const dispatch =useDispatch()

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((data)=>{
        console.log(data)
        setstate(data)
    })
},[])

function display(){
    dispatch(addtoData(state))
}

  return (
    <div>
        <button onClick={display}></button>
    </div>
  )
}

export default ApiFetch