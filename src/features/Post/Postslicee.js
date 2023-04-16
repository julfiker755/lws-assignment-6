import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { updatelike, updatesave } from "./Postapii"

const initialState={
    Post:{},
    isLoading:false,
    error:null
}
// like
export const likeupdate=createAsyncThunk('post/likeupdate',async({id,currentlike})=>{
    const data=await updatelike({id,currentlike})
    return data
})
// save,unsave
export const unsaveupdate=createAsyncThunk('post/unsaveupdate',async({id,isSaved})=>{
    const data=await updatesave({id,isSaved})
    return data
})
// 
const Postslicee=createSlice({
    name:'Post',
    initialState,
    extraReducers:(builder=>{
        builder
        .addCase(likeupdate.pending,(state)=>{
            return state
        })
        .addCase(likeupdate.fulfilled,(state,action)=>{
            state.Post.likes=action.payload.likes
        })
        .addCase(likeupdate.rejected,(state)=>{
            return state
        })
        .addCase(unsaveupdate.pending,(state)=>{
            return state
        })
        .addCase(unsaveupdate.fulfilled,(state,action)=>{
            console.log(action)
            state.Post.isSaved=action.payload.isSaved
        })
        .addCase(unsaveupdate.rejected,(state)=>{
            return state
        })
    })
})

export default Postslicee.reducer