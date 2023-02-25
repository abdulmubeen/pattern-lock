import { configureStore } from "@reduxjs/toolkit";
import {
  persistCombineReducers,
  persistStore,
  PAUSE,
  PERSIST,
  PURGE,
  FLUSH,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import patternSlice from "./slices/patternSlice";
import hashSlice from "./slices/hashSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["pattern"],
};

const persistedReducer = persistCombineReducers(persistConfig, {
  pattern: patternSlice,
  hash: hashSlice,
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
export default store;
