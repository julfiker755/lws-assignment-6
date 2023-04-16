import { axiosinstance } from "../../utilis/axios"

export const updatelike=async({id,currentlike})=>{
    const res=await axiosinstance.patch(`/blogs/${id}`,{
        likes:currentlike+1
    })
    return res.data
}
export  const updatesave=async({id,isSaved})=>{
    const res=await axiosinstance.patch(`/blogs/${id}`,{
        isSaved,
    })
    return res.data
}