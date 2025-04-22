import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
    name: 'count',
    initialState: {
        items: [],
        count: 0,
        totelPrice: 0
    },
    reducers: {
        addCart: (state, action) => {
            state.items.push(action.payload)
            state.count = state.items.length;
            state.totelPrice += (action.payload.price * (1 - action.payload.discount / 100));
        }
    }
})
export const { addCart } = addToCartSlice.actions;
export default addToCartSlice.reducer;