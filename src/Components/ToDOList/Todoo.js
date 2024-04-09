import { createSlice } from "@reduxjs/toolkit";

const toDoList = createSlice({
    name:"toDo",
    initialState:{
        list:[]
    },
    reducers:{
        toDoListUpdate:(state,action)=>{
            state.list=[...state.list,action.payload.list]
        },
        toDoDelete:(state,action)=>{
            state.list.splice(state.list.indexOf(action.payload.list),1)
        }
    }
})

export const {toDoListUpdate , toDoDelete }= toDoList.actions
export default toDoList.reducer