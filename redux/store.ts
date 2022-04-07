import {
    configureStore,
    ThunkAction,
    Action,
    getDefaultMiddleware,
  } from "@reduxjs/toolkit";
  import { combineReducers } from "redux";
  import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
  import currentUserReducer from "./features/authSlice";
  import { adminApi } from "./services/admin";
  import { sellerApi } from './services/seller';

  const persistConfig = {
    key: "root",
    storage,
    blacklist: [adminApi.reducerPath , sellerApi.reducerPath], //add slice to be ignored here
  };
  
  const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [sellerApi.reducerPath]: sellerApi.reducer,
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export function makeStore() {
    return configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }).concat(adminApi.middleware , sellerApi.middleware),
    });
  }
  
  const store = makeStore();
  
  export type AppState = ReturnType<typeof store.getState>;
  
  export type AppDispatch = typeof store.dispatch;
  
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
  >;
  
  export default store;