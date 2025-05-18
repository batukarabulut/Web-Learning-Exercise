
import { createSlice } from '@reduxjs/toolkit';

const visitedProductsSlice = createSlice({
  name: 'visitedProducts',
  initialState: {
    products: []
  },
  reducers: {
    addVisitedProduct: (state, action) => {
      // Check if product already exists
      const exists = state.products.some(product => product.id === action.payload.id);
      
      if (!exists) {
        // Add to the beginning (most recent first)
        state.products.unshift(action.payload);
        
        // Keep only the last 10 items
        if (state.products.length > 10) {
          state.products.pop();
        }
      } else {
        // Move existing product to the top (most recent)
        state.products = [
          action.payload,
          ...state.products.filter(product => product.id !== action.payload.id)
        ].slice(0, 10);
      }
    }
  }
});

export const { addVisitedProduct } = visitedProductsSlice.actions;
export default visitedProductsSlice.reducer;