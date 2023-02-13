import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './reducers/currentLocation';
import { loginReducer } from './reducers/loginReducer';

export const store = configureStore({
    reducer: {
        // TODO: reducers aumentar aqui
        Auth: loginReducer,
        LOCATION: locationReducer
    },
});