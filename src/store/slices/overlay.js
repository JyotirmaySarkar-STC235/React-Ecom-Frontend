import { createSlice } from '@reduxjs/toolkit'

const overlaySlice = createSlice({
  name: 'overlay',
  initialState: {
    isOpen: false,
  },
  reducers: {
    setOverlay: (state, action) => {
        console.log('setOverlay', action.payload)
      state.isOpen = action.payload
    },
  },
})

export const { setOverlay } = overlaySlice.actions
export const selectOverlay = (state) => state.overlay.isOpen
export default overlaySlice.reducer