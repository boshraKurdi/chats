import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const ActGetMessages = createAsyncThunk(
    'Chat/ActGetMessages',
    async (id , thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await axios.get(`https://boshrakurdi.github.io/json/message.json` , {
              });
              const newData = response.data.message.filter((d) =>{
                if (d.chat_id == id) {
                    return true
                }else{
                    return false
                }
              })
            return newData
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);   
            }else{
                return rejectWithValue("An unexpected error")
            }
        }
    },
  )
  export default ActGetMessages