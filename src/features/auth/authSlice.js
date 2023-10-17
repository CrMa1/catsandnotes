import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  imageProfile: null,
  localId: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        user: action.payload.email,
        token: action.payload.idToken,
        localId: action.payload.localId,
      }
    },
    clearUser: () => {
      return { user: null, token: null, localId: null }
    },
    setImageProfile: (state, action) => {
      return {
        ...state,
        imageProfile: action.payload
      }
    }
  }
})

export const { setUser, clearUser, setImageProfile } = authSlice.actions

export default authSlice.reducer