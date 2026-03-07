import { configureStore } from "@reduxjs/toolkit"
import userReducer from './userSlice'
const useAppStore = configureStore({
    reducer :{
        user: userReducer,
    }
})

export default useAppStore;