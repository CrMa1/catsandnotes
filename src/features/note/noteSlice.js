import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    note: null,
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        setNote: (state, action) => {
            return {
                note: action.payload,
            }
        },
    }
})

export const { setNote } = noteSlice.actions

export default noteSlice.reducer