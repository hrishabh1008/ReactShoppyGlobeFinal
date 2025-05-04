import { configureStore } from '@reduxjs/toolkit';
import productsListSlice from "./productsListSlice";

const mainStore = configureStore({
  reducer: {
    productsListSlice,
  },
});

export default mainStore;