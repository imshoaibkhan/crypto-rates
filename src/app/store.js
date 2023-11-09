import { configureStore } from '@reduxjs/toolkit';
import  coinReducer  from '../features/coinSlice'


const store = configureStore({
    reducer: {
        coin: coinReducer,
    }
})

export default store;