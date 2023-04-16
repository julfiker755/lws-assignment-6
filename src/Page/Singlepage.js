import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Singlevideo from '../component/Singlevideo/Singlevideo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchvideo } from '../features/Video/svideoslice';
import Relatedp from '../component/Relatedp/Relatedp';

const Singlepage = () => {
  const dispatch=useDispatch()
  const {pid}=useParams()
  const {video,isLoading,isError,error}=useSelector(state=>state.video)
  const {Post}=useSelector(state=>state.like)
  console.log(Post)
  // how to fetch data
  useEffect(()=>{
    dispatch(fetchvideo(pid))
  },[Post])
  let content=null;
  if(isLoading) content=<h1>Loading...</h1>
  if(!isLoading && isError) content=<div className='col-span-12'>{error}</div>
  if(!isLoading && !isError && !video?.id) content=<div className='col-span-12'>Your video not found</div>
  if(!isLoading && !isError && video?.id) content=<Singlevideo video={video}></Singlevideo>
    return (
       <>
        <div class="container mt-8">
        <Link to="/" class="inline-block text-gray-600 home-btn" id="lws-goHome"><i
            class="mr-2 fa-solid fa-house"></i>Go Home</Link>
      </div>
    
      <section class="post-page-container">
        {/* <!-- detailed post  --> */}
          {content}
        {/* <!-- detailed post ends --> */}
        {/* <!-- related posts --> */}
        <Relatedp video={video}></Relatedp>
        {/* <!-- related posts ends --> */}
      </section>
       </>
    );
};

export default Singlepage;