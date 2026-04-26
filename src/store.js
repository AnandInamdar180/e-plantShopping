import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Optional: keep default export in case other files use it
export default store;
