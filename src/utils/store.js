import { configureStore } from '@reduxjs/toolkit';
import addToCartSlice from './addToCartSlice'


const appStore = configureStore({
  reducer: {
    addToCartSlice : addToCartSlice
  },
});

export default appStore;
