import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import { setupListeners } from '@reduxjs/toolkit/query';
import currentUserReducer from "./features/authSlice";
import { adminApi } from "./services/admin";
import { nextReduxCookieMiddleware, wrapMakeStore } from "next-redux-cookie-wrapper";
import {createWrapper} from "next-redux-wrapper";
// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     currentUser: currentUserReducer,
//     [adminApi.reducerPath]: adminApi.reducer,
//   },
//   // redux middleware
//   middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//   }).concat(adminApi.middleware)
//   .prepend(nextReduxCookieMiddleware({ subtrees: ["cart"] })
// });

const makeStore = wrapMakeStore(() =>
  configureStore({
    reducer: {
      current: currentUserReducer,
      cart: cartReducer,
      [adminApi.reducerPath]: adminApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({})
        .concat(adminApi.middleware)
        .prepend(nextReduxCookieMiddleware({ subtrees: ["cart"] }));
    },
  })
);
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });

// infer the rootstate and appDispatch types from the store
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// setupListeners(store.dispatch);
