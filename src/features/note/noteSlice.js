import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: null,
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        setNote: (state, action) => {
            return {
                notes: action.payload
            }
        },
    }
})

export const { setNote } = noteSlice.actions

export default noteSlice.reducer