import { createSlice } from '@reduxjs/toolkit'



 const userData = createSlice({
  name:"user",
  initialState:{
    list:[]
  },
  reducers:{
    userUpdate:(state,action)=>{
      state.list=[...state.list, action.payload.list] 
    },
    userDelete:(state,action)=>{
      state.list.splice(state.list.indexOf(action.payload.list),1)  
    }
  
    
  }
 })
    
  

export const { userUpdate,userDelete } = userData.actions

export default userData.reducer