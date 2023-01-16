import {combineReducers} from '@reduxjs/toolkit';
import {loginSlice} from './store/loginSlice';

const rootReducer = combineReducers({
  loginReducer: loginSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
