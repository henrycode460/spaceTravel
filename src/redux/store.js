import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import missionsReducer from './missions/missions';
// import rocket reducer

// const rootStore = combineReducers({
//   books: booksReducer,
//   categories: categoriesReducer,
// });

const store = configureStore({
  // reducer: rootStore,
  reducer: missionsReducer,
});

export default store;