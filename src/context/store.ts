// src/context/store.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/tradeReducer'; // You'll need to create this rootReducer

const store = configureStore({
    reducer: rootReducer,
    // You can add middleware and other options here if needed
});

export default store;
