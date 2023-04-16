import { axiosinstance } from "../../utilis/axios"

export const getrelated=async({tags,id})=>{
    const limit=2
    let querystring=tags?.length > 0 ? tags.map(tag=>`tags_like=${tag}`).join('&')+`&id_ne=${id}&_limit=${limit}`:`&id_ne=${id}&_limit=${limit}`
    console.log(id,tags)

    const res=await axiosinstance.get(`/blogs/?${querystring}`)
    return res.data

}