import { createSlice } from '@reduxjs/toolkit'
import ActGetChat from './Act/ActGetChat'

const initialState = {
  myChats: [] ,
  messages: [] ,
  myChat: {},
  loading: 'idle',
  loading2: 'idle' ,
  loading3: 'idle' ,
  error:null
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    CleanUp: (state) => {
      state.loading = 'idle'
      state.error = null
    } ,
  } ,
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(ActGetChat.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActGetChat.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.myChats = action.payload
    })
    builder.addCase(ActGetChat.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
  },
})
// Action creators are generated for each case reducer function
export { ActGetChat }
export const { CleanUp } = chatSlice.actions
export default chatSlice.reducer