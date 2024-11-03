import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'light' ,
  open: false , 
  message: null
}

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    SetMode: (state , action) => {
        state.value = action.payload 
    },
    SetOpen : (state , action) => {
      state.open = !state.open
      state.message = action.payload
    }
  } ,
 
})
// Action creators are generated for each case reducer function
export const { SetMode , SetOpen } = modeSlice.actions
export default modeSlice.reducer