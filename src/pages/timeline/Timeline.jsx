import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContextProvider';
import TimelineCard from './TimelineCard';


const Timeline = () => {
    const { checkIns, setCheckIns } = useContext(FriendsContext);
    return (
        <div className='px-[1%] md:px-[14%] bg-[#f8fafc] py-17'>
            <h1 className='primary-color text-5xl font-bold pb-6'>Timeline </h1>
            <div className='space-y-6'>
                {
                    checkIns.map(checkIn => <TimelineCard checkIn={checkIn}></TimelineCard>)
                }
            </div>
        </div>
    );
};

export default Timeline;