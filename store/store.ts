import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import gamesReducer from "../redux/gamesSlice";

const rootReducer = combineReducers({
  games: gamesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
