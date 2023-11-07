import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id_user: null,
  user: null,
  username: null,
  imageProfile: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        id_user: action.payload.id_user,
        user: action.payload.email,
        username: action.payload.username
      }
    },
    clearUser: () => {
      return { id_user: null, user: null, username: null }
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