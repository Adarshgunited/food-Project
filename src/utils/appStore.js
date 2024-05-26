import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

//redux store
const appStore = configureStore({
    // big reducer, consist of many small/individual reducers from cartSlice.js file
    reducer: {
        // cart name comes from cartSlice. u can give any name for cartReducer[contain the logic for managing the shopping cart state].
        cart : cartReducer,
        
    }

});

export default appStore;