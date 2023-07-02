import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rucheReducer from "./rucheSlice";

const persistConfig = {
  key: "ruche",
  version: 1,
  storage,
};
// let persistor = persistStore(store);

const persistedReducer = persistReducer(persistConfig, rucheReducer);

export const store = configureStore({
  reducer: { ruche: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
