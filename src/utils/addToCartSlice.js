import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
    name : 'count',
    initialState : {
        items : [],
        count : 0 
    },
    reducers : {
        addCart : (state ,action ) =>{
            state.items.push(action.payload)
            state.count = state.items.length
        } 
    }
})
export const {addCart} = addToCartSlice.actions; 
export default addToCartSlice.reducer;