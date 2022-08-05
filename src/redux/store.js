import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import missionsReducer from './missions/missions';
import rockertsReducer from './rockets/rockets';

const rootStore = combineReducers({
   missions: missionsReducer,
   rockets: rockertsReducer,
});

const store = configureStore({
  reducer: rootStore,
});

export default store;
