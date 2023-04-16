import { axiosinstance } from "../../utilis/axios"

export const getvideos=async()=>{
    const res=await axiosinstance.get("/blogs")
    return res.data
}
