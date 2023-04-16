import React, { useEffect } from 'react';
import git from '../../assets/git.webp'
import ai from '../../assets/ai.jpg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Relatedcard from './Relatedcard';
import { fetchrelated } from '../../features/Relatedv/Relatedslice';

const Relatedp = ({video}) => {
  const {id,tags}= video
    const dispatch=useDispatch()
    const {Related,isLoading,isError,error}=useSelector(state=>state.Related)
    useEffect(()=>{
        dispatch(fetchrelated({id,tags}))
    },[id])
    let content=null
    if(isLoading) content=<h1>Loading........</h1>
    if(!isLoading && isError) content=<div className='col-span-12'>{error}</div>
    if(!isLoading && !isError && Related?.length > 0 ) content=Related.map(item=>(<Relatedcard key={item.id} item={item}></Relatedcard>))
    return (
        <aside>
      <h4 class="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div class="space-y-4 related-post-container">
        {/* <!-- related post  --> */}
         {content}
      </div>
    </aside>
    );
};

export default Relatedp;