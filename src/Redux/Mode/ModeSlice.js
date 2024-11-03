import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'light' ,
  open: false , 
  params: 1,
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
    },
    SetParams : (state , action) => {
      state.params = action.payload
    }
  } ,
 
})
// Action creators are generated for each case reducer function
export const { SetMode , SetOpen , SetParams } = modeSlice.actions
export default modeSlice.reducer