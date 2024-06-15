// src/reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import sampleReducer from './sampleReducer';

const rootReducer = combineReducers({
    sample: sampleReducer,
});

export default rootReducer;
