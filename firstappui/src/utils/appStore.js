import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/cartSlice"
const appStore = configureStore({
    reducer:{
        cart:cartReducer,
    },
});
export default appStore; // TODO: add reducers here! (see docs)