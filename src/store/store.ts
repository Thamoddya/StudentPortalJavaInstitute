import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../redux/authSlice';
import loadingReducer from '../redux/loadingSlice';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
