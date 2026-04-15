import React from 'react';
import Banner from './Banner';
import YourFriend from './YourFriend';

const Homepage = () => {
    return (
        <div className='px-[1%] md:px-[14%]  bg-[#f8fafc]'>
            <Banner></Banner>
            <YourFriend></YourFriend>
        </div>
    );
};

export default Homepage;