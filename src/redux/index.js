import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer';
import games from './games/reducer';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        games
    }
});

