import {configureStore} from "@reduxjs/toolkit";
import {  cartSlice, loginSlice, productSlice, registerSlice, viewSlice ,cartCountSlice} from "./slice/slice";

const eComerceStore = configureStore({
    reducer : {
      register : registerSlice.reducer,
      isLogin : loginSlice.reducer,
      product : productSlice.reducer,
      cart : cartSlice.reducer,
      view: viewSlice.reducer,
      cartCount : cartCountSlice.reducer,
      
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});

export const registerAction = registerSlice.actions;
export const loginAction = loginSlice.actions;
export const productActin = productSlice.actions;
export const cartAction = cartSlice.actions;
export const viewAction =viewSlice.actions;
export const cartCountAction = cartCountSlice.actions;
export default eComerceStore;
