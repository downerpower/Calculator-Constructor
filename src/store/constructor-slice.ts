import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface State {
  items: string[]
}

const initialState: State = {
  items: []
}

const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    addItemToDropBoard (state, action: PayloadAction<string>) {
      const item = action.payload
      console.log(item)
      state.items.push(item)
    },
    removeItemFromDropBoard (state, action) {
    }
  }
})

export const { addItemToDropBoard, removeItemFromDropBoard } = constructorSlice.actions

export default constructorSlice.reducer
