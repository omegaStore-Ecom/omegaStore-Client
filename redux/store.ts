import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import { setupListeners } from '@reduxjs/toolkit/query';
import currentUserReducer from "./features/authSlice";
import { adminApi } from "./services/admin";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    currentUser: currentUserReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  // redux middleware
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
  }).concat(adminApi.middleware)
});

// infer the rootstate and appDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);