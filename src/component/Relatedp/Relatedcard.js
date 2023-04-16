import React from 'react';
import { Link } from 'react-router-dom';

const Relatedcard = ({item}) => {
    const {id,image,title,tags}=item
    return (
        <>
           <div class="card">
          <Link to="/">
            <img src={image} class="card-image" alt="" />
          </Link>
          <div class="p-4">
            <Link to="/" class="text-lg post-title lws-RelatedPostTitle">
              {title}
            </Link>
            <div class="mb-0 tags">
                {tags?.map((value,index)=>(<span key={index}>{value},</span>))}
            </div>
            <p>2010-03-27</p>
          </div>
        </div> 
        </>
    );
};

export default Relatedcard;