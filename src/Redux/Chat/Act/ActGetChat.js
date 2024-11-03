import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActGetChat = createAsyncThunk(
    'Chat/ActGetChat',
    async (_ , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.get(`https://boshrakurdi.github.io/json/chat.json` , {
              });
            return response.data   
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);   
            }else{
                return rejectWithValue("An unexpected error")
            }
        }
    },
  )
  export default ActGetChat