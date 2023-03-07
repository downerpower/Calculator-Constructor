import { configureStore } from '@reduxjs/toolkit'
import constructorSliceReducer from './constructor-slice'

export const store = configureStore({
  reducer: { constructor: constructorSliceReducer }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
