import { createSlice } from '@reduxjs/toolkit';


// const baseApiUrl = 'https://dummyjson.com/products'


const productsListSlice = createSlice({
  name: "productslist",
  
  initialState: {
    isLightTheme :true,
    ProductsListData: [],

  },
  reducers: {
    
    setThemeMode(state,action) {
      state.isLightTheme = action.payload
    },
    filterProduct(state, action) {
      state.loading = false;
      state.products = action.payload;
    },
    
  },
});

export const {setThemeMode,filterProduct} = productsListSlice.actions;

export default productsListSlice.reducer;