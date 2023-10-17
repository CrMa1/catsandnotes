import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { authApi } from "../services/authApi";
import noteSlice from "../features/note/noteSlice";
import authSlice from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    note: noteSlice,
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(authApi.middleware),
}) 

setupListeners(store.dispatch)

export default store