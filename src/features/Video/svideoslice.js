import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getvideo } from "./svideoapi"

const initialState={
    video:{},
    isLoading:false,
    isError:false,
    error:""
}

export const fetchvideo=createAsyncThunk('video/fetchvideo',async(id)=>{
    const data=await getvideo(id)
    return data
})

const svideoslice=createSlice({
    name:'video',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchvideo.pending,(state)=>{
          state.isLoading=true;
          state.isError=false
        })
        .addCase(fetchvideo.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.video=action.payload
        })
        .addCase(fetchvideo.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.video={};
            state.error=action.error?.message;
        })
    }
})

export default svideoslice.reducer