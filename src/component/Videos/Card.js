import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillLike } from 'react-icons/ai';
// 

const Card = ({video}) => {
    const {id,image,createdAt,likes,title,isSaved,tags}=video
    return (
        <div className="lws-card">
            <Link to={`/single/${id}`}>
              <img src={image} className="lws-card-image" alt="" />
            </Link>
            <div className="p-4">
              <div className="lws-card-header">
                <p className="lws-publishedDate">{createdAt}</p>
                <p className="lws-likeCount flex"><AiFillLike size={18}/>{likes}</p>
              </div>
              <Link to="/single/1" className="lws-postTitle">{title}</Link>
              <div className="lws-tags">{tags?.map(item=>(<span>{item}</span>))}</div>
              {/* <!-- Show this element if post is saved --> */}
              <div className="flex gap-2 mt-4">
                <span className="lws-badge"> {isSaved ? 'Save':'Unsave'} </span>
              </div>
              {/* <!-- Show this element if post is saved Ends --> */}
            </div>
          </div>
    );
};

export default Card;