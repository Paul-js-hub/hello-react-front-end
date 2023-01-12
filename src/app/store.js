import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from '../features/greeting/greetingSlice'
export const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});
