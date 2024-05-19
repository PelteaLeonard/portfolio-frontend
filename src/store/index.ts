import contactsReducer from "../features/contacts/slice";
import toastrReducer from "../features/toastr/slice";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import toastrMiddleware from "../features/toastr/middleware";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  toastr: toastrReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(toastrMiddleware),
});

export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
