import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import currentUserReducer from "./features/authSlice";
import { adminApi } from "./services/admin";
import { productApi } from "./services/products"
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";
import { createWrapper } from "next-redux-wrapper";
import { deliveryManApi } from "./services/deliveryMan";

const makeStore = wrapMakeStore(() =>
  configureStore({
    reducer: {
      cart: cartReducer,
      currentUser: currentUserReducer,
      [adminApi.reducerPath]: adminApi.reducer,
      [deliveryManApi.reducerPath]: deliveryManApi.reducer, [productApi.reducerPath] : productApi.reducer
    },
    // redux middleware
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false})
        .concat(adminApi.middleware, deliveryManApi.middleware, productApi.middleware)
        .prepend(nextReduxCookieMiddleware({ subtrees: ["user", "cart"] })),
  })
);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
