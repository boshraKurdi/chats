import { createSlice } from '@reduxjs/toolkit'
import ActGetChat from './Act/ActGetChat'
import ActGetMessages from './Act/ActGetMessages'
import ActShow from './Act/ActShow'
const initialState = {
  myChats: [{ "id": "", "user_id": '', "f_id": '' , "lastMessage": "" , "f_name": "" }] ,
  messages: [{ "id": "", "chat_id": '' , "is_f": '', "f_id": '' , "text": "" }] ,
  myChat: { "id": "", "user_id": '', "f_id": '' , "lastMessage": "" , "f_name": "" },
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
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  } ,
  
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(ActGetChat.pending , (state) => {
      state.loading = 'pending' 
      state.error = null
    })
    builder.addCase(ActGetChat.fulfilled , (state , action) => {
      state.loading = 'succeeded' 
      state.myChats = action.payload.chat
    })
    builder.addCase(ActGetChat.rejected , (state , action) => {
      state.loading = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //message
    builder.addCase(ActGetMessages.pending , (state) => {
      state.loading2 = 'pending' 
      state.error = null
    })
    builder.addCase(ActGetMessages.fulfilled , (state , action) => {
      state.loading2 = 'succeeded' 
      state.messages = action.payload
    })
    builder.addCase(ActGetMessages.rejected , (state , action) => {
      state.loading2 = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
    //show 
    builder.addCase(ActShow.pending , (state) => {
      state.loading3 = 'pending' 
      state.error = null
    })
    builder.addCase(ActShow.fulfilled , (state , action) => {
      state.loading3 = 'succeeded' 
      state.myChat = action.payload
    })
    builder.addCase(ActShow.rejected , (state , action) => {
      state.loading3 = 'failed' 
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload 
      }
    })
  },
})
// Action creators are generated for each case reducer function
export { ActGetChat , ActGetMessages , ActShow }
export const { CleanUp , addMessage } = chatSlice.actions
export default chatSlice.reducer