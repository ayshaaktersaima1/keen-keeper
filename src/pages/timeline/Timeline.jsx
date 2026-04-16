import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../context/FriendsContextProvider';
import TimelineCard from './TimelineCard';
import { RiArrowDropDownLine } from 'react-icons/ri';


const Timeline = () => {
    const { checkIns } = useContext(FriendsContext);

    const [filter, setFilter] = useState('Filter timeline');

    const handleFilter = (type) => {
        setFilter(type);
    }

    const filterCheckIns = checkIns.filter(checkIn => checkIn.type === filter);
    return (
        <div className='px-[1%] md:px-[14%] bg-[#f8fafc] py-20'>
            <h1 className='primary-color text-5xl font-bold pb-6'>Timeline </h1>

            {/* dropdown */}
            <div className="dropdown bg-[#f8fafc] mb-6">
                <div tabIndex={0} role="button" className="btn min-w-70 justify-between m-1 text-sm sec-color">{filter} <span><RiArrowDropDownLine className='sec-color text-2xl' /></span></div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleFilter('Filter timeline')}><a>Filter timeline</a></li>
                    <li onClick={() => handleFilter('Call')}><a>Call</a></li>
                    <li onClick={() => handleFilter('Text')}><a>Text</a></li>
                    <li onClick={() => handleFilter('Video')}><a>Video</a></li>
                </ul>
            </div>
            <div className='space-y-6'>
                {
                    checkIns.length === 0 ? <h1 className='text-center primary-color min-h-[40vh]'>No data Found!</h1> : filter === 'Filter timeline' ?
                        (checkIns.map((checkIn, index) => <TimelineCard key={index} checkIn={checkIn}></TimelineCard>)) :

                        (filterCheckIns.map((checkIn, index) => <TimelineCard key={index} checkIn={checkIn}></TimelineCard>))
                }
            </div>
        </div>
    );
};

export default Timeline;