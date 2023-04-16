import React, { useEffect } from 'react';
import { AiFillLike } from 'react-icons/ai';
import {useDispatch, useSelector} from 'react-redux'
import { likeupdate, unsaveupdate } from '../../features/Post/Postslicee';


const Singlevideo = ({video}) => {
  const {id,title,likes,description,image,tags,isSaved}=video
  const dispatch=useDispatch()
  const handlelike=()=>{
    dispatch(likeupdate({id,currentlike:likes}))
  }
  const handlesave=()=>{
    dispatch(unsaveupdate({id,isSaved:!isSaved}))
  }
    return (
        <main className="post">
      <img src={image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags?.map((item,index)=>(<span key={index} classNameName='capitalize'>{item},</span>))}
        </div>
        <div className="btn-group">
          {/* <!-- handle like on button click --> */}
          <button onClick={()=>handlelike()} className="like-btn flex items-center" id="lws-singleLinks">
            <AiFillLike /> {likes}
          </button>
          {/* <!-- handle save on button click --> */}
          {/* <!-- use ".active" className and "Saved" text  if a post is saved, other wise "Save" --> */}
          <button onClick={()=>handlesave()} className="active save-btn" id="lws-singleSavedBtn">
            <i className="fa-regular fa-bookmark"></i> {isSaved ? 'Save':'Unsave'}
          </button>
        </div>
        <div className="mt-6">
          <p>
           {description}
          </p>
        </div>
      </div>
    </main>
    );
};

export default Singlevideo;