import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer';
import gamesReduser from './games/reducer';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        game: gamesReduser
    }
});

