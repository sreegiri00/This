import { configureStore } from '@reduxjs/toolkit';


const appStore = configureStore({
  reducer: {
    counter: counterReducer
  },
});

export default appStore;
