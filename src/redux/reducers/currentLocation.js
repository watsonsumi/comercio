import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    location: null,
    isLoading: true,
};

export const locationSlice = createSlice({
    name: 'LOCATION',
    initialState,
    reducers: {
        setCurrentLocation: (state, action) => {
            state.location = action.payload
        }
    }
})

export const { setCurrentLocation } = locationSlice.actions;

const locationReducer = locationSlice.reducer;

export default locationReducer;