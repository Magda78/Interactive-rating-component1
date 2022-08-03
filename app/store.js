import { configureStore } from '@reduxjs/toolkit'
import numbersSlice from './../slices/numbers';

export default configureStore({
  reducer: {
      number: numbersSlice
  },
})