import { configureStore, createSlice } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import toDoList from './Todoo'

const saveConfig = {
    key:"root",
    storage
}

const saveUserConfig =persistReducer(saveConfig,toDoList)

export const Store = configureStore({
    reducer:{
        list:saveUserConfig
    }
})
export const persistor = persistStore(Store)