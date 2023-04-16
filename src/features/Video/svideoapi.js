import { axiosinstance } from "../../utilis/axios"
export const getvideo=async(id)=>{
    const res=await axiosinstance.get(`/blogs/${id}`)
    return res.data
}