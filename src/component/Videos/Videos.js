import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchvideos } from '../../features/Videos/videoslice';
import Card from './Card';

const Videos = () => {
  const dispach=useDispatch()
  const {videos,isLoading,isError,error}=useSelector(state=>state.videos)
  const {filters,sort}=useSelector(state=>state.filter)
  useEffect(()=>{
    dispach(fetchvideos())
  },[dispach])
  let content=null
  if(isLoading) content=<h1>Loading....</h1>
  if(!isLoading && isError) content=<div className='col-span-12'>{error}</div>
  if(!isLoading && !isError && videos?.length === 0) content=<div className='col-span-12'>Video is not found</div>
  if(!isLoading && !isError && videos?.length > 0){
    content=videos.filter(video=>{
      if(filters === 'save'){
        return video.isSaved
      }else if(filters === 'unsave'){
        return !video.isSaved
      }else{
        return true
      }
    })
    .sort((a,b)=>{
      if(sort === "most_liked"){
        return b.likes - a.likes
      }else if(sort === "newest"){
        return new Date(b.createdAt) -new Date(a.createdAt)
      }
      else{
        return true
      }
    })
    .map(video=><Card key={video.id} video={video}></Card>)
  }
    return (
        <main className="post-container" id="lws-postContainer">
          {/* <!-- single post --> */}
           {content}
        </main>
    );
};

export default Videos;