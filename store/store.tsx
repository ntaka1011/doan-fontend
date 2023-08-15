import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types
export type AppDispatch = typeof store.dispatch; // Type to access dispatch
