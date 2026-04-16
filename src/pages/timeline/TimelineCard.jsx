import React from 'react';
import callImg from '../../assets/images/call.png'
import textImg from '../../assets/images/text.png'
import videoImg from '../../assets/images/video.png'

const TimelineCard = ({ checkIn }) => {
    return (
        <div className='flex items-center gap-4 border border-[#e9e9e9] rounded-lg shadow-sm bg-white p-4'>
            {/* left */}
            <div>
                {
                    checkIn.type === 'Call' ? <img className='w-7 h-6 md:w-13 md:h-12' src={callImg} alt="" /> : checkIn.type === 'Text' ? <img className='w-7 h-6 md:w-13 md:h-12' src={textImg} alt="" /> :
                        checkIn.type === 'Video' ? <img className='w-7 h-6 md:w-13 md:h-12' src={videoImg} alt="" /> : ''
                }
            </div>
            {/* right */}
            <div>
                <h1 className='text-xl font-medium text-[#244d3f] pb-1'>{checkIn.type === 'Call' ? 'Call' : checkIn.type === 'Video' ? 'Video' : checkIn.type === 'Text' ? 'Text' : ''} <span className='text-lg sec-color'>with {checkIn.name}</span></h1>
                <p className='font-medium sec-color'>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
        </div>
    );
};

export default TimelineCard;