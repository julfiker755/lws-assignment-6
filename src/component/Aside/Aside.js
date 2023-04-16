import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatefilters } from '../../features/filter/filterslice';

const Aside = () => {
  const [filters,setfilters]=useState("")
  const [sort,setsort]=useState("")
  console.log(sort)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(updatefilters({filters}))
  },[filters])
  useEffect(()=>{
    dispatch(updatefilters({sort}))
  },[sort])
    return (
        <aside>
        <div className="sidebar-items">
          <div className="sidebar-content">
            <h4>Sort</h4>
            <select name="sort" id="lws-sort" onChange={(e)=>setsort(e.target.value)} className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
              <option value="">Default</option>
              <option value="newest">Newest</option>
              <option value="most_liked">Most Liked</option>
            </select>
          </div>
          <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
              {/* <!-- handle filter on button click --> */}
              <div>
                <input type="radio" value="all"  onChange={(e)=>setfilters("")} name="filter" id="lws-all"  className="radio" />
                <label for="lws-all">All</label>
              </div>
              <div>
                <input type="radio" value="save" onChange={(e)=>setfilters(e.target.value)} name="filter" id="lws-saved" className="radio" />
                <label for="lws-saved">Saved</label>
              </div>
              <div>
                <input type="radio" value="unsave" onChange={(e)=>setfilters(e.target.value)} name="filter" id="lws-saved" className="radio" />
                <label for="lws-saved">Un Saved</label>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
};

export default Aside;