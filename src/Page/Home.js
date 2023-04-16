import React, { useEffect } from 'react';
import Aside from '../component/Aside/Aside';
import Videos from '../component/Videos/Videos';

const Home = () => {
    return (
        <section className="wrapper">
        {/* <!-- posts container  --> */}
         <Aside></Aside>
         <Videos></Videos>
        {/* <!-- posts container ends --> */}
      </section>
    );
};

export default Home;