import { configureStore } from '@reduxjs/toolkit'
import {} from 'react-redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userData from './User'


const persistConfig={   
    key:"root",
    storage
}
const persistUserConfig = persistReducer(persistConfig,userData)

export const Store = configureStore({
    reducer:{
        user:persistUserConfig
    }
})
export const persistor =persistStore(Store)