import {createSlice} from '@reduxjs/toolkit'

const ApiData = createSlice({
    name:"DataSource",
    initialState:{
        productioninfo:[]
    },
    reducers:{
    addtoData:(state,action)=>{
        console.log("action value",action)
        state.productioninfo.push(action.payload)
    }
    }
})
export const {addtoData}=ApiData.actions
export default ApiData.reducer