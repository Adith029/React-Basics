import { configureStore } from '@reduxjs/toolkit'
import ApiData from './DataStoreAction'
export default configureStore({
    reducer:{
        Datastore:ApiData
    }
})