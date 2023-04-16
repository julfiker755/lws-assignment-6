import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getvideos } from './videosapi'

const initialState={
    videos:[],
    isLoading:false,
    isError:false,
    error:""
}
// how to get video 
export const fetchvideos=createAsyncThunk('videos/fetachvideos',async()=>{
    const data=await getvideos()
    return data
})

const videoslice=createSlice({
    name:'videos',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchvideos.pending,(state)=>{
            state.isLoading=true;
            state.isError=false
        })
        .addCase(fetchvideos.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.videos=action.payload
        })
        .addCase(fetchvideos.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.videos=[];
            state.error=action.error?.message
        })
    }
})
export default videoslice.reducer