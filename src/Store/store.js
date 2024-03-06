
import { configureStore } from "@reduxjs/toolkit";
import cardSlice  from './cardSlice'
import productSlice from './productSlice'

const store = configureStore({
    reducer: {
        card: cardSlice,
        
        product:productSlice,
    } 
})

export default store;