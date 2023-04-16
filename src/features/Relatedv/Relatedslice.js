import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getrelated } from "./Relatedapi"

const initialState={
    Related:[],
    isLoading:false,
    isError:false,
    error:""
}
export const fetchrelated=createAsyncThunk('Related/fetchrelated',async({tags,id})=>{
    const data=await getrelated({tags,id})
    return data
})

const Relatedslice=createSlice({
    name:"Related",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchrelated.pending,(state)=>{                                                                                  
          state.isLoading=true;
          state.isError=false
        })
        .addCase(fetchrelated.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.Related=action.payload
        })
        .addCase(fetchrelated.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.Related=[];
            state.error=action.error?.message
        })
    }

})
export default Relatedslice.reducer;