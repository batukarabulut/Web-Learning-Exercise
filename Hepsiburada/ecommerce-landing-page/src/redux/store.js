import { configureStore } from '@reduxjs/toolkit';
import visitedProductsReducer from './slices/visitedProductsSlice.js';

const store = configureStore({
  reducer: {
    visitedProducts: visitedProductsReducer,
  },
});

export default store;