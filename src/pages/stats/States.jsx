import React, { useContext } from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';
import { TimelineContext } from '../../context/TimelineContextProvider';
import { FriendsContext } from '../../context/FriendsContextProvider';
;


const States = () => {

    const { timelineTypeCount } = useContext(TimelineContext);
    const { checkIns } = useContext(FriendsContext);
    const { callTypeCount, textTypeCount, videoTypeCount } = timelineTypeCount;

    const data = [
        { name: 'Call', value: callTypeCount, fill: '#244d3f' },
        { name: 'Text', value: textTypeCount, fill: '#7e35e1' },
        { name: 'Video', value: videoTypeCount, fill: '#37a163' },

    ];
    return (
        <div className='px-[1%] md:px-[14%]  bg-[#f8fafc]'>

            <h1 className='text-3xl md:text-5xl font-bold pt-10 md:pt-20 pb-3 md:pb-6'>Friendship Analytics</h1>
            <div className='border border-[#e9e9e9] shadow-lg rounded-lg p-8 mb-20'>
                <p className='text-xl text-center md:text-left font-medium text-[#244d3f]'>By Interaction Type</p>

                {
                    checkIns.length === 0 ? <h1 className='text-center primary-color min-h-[40vh]'>No intercations logged yet.</h1> :

                        (<>
                            <div className='flex justify-center py-10'>
                                <PieChart style={{ width: '100%', maxWidth: '350px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                                    <Pie
                                        data={data}
                                        innerRadius="80%"
                                        outerRadius="100%"
                                        // Corner radius is the rounded edge of each pie slice
                                        cornerRadius="50%"
                                        fill="#8884d8"
                                        // padding angle is the gap between each pie slice
                                        paddingAngle={5}
                                        dataKey="value"

                                    />
                                    <Tooltip></Tooltip>

                                </PieChart>
                            </div>
                            {/* circles */}
                            <div className='flex justify-center items-center gap-6'>
                                <div className='flex items-center gap-1'>
                                    <div className='h-3 w-3 rounded-full bg-[#7e35e1]'></div>
                                    <p className='text-sm sec-color'>Text</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <div className='h-3 w-3 rounded-full bg-[#244d3f]'></div>
                                    <p className='text-sm sec-color'>Call</p>
                                </div>
                                <div className='flex items-center gap-1'>
                                    <div className='h-3 w-3 rounded-full bg-[#37a163]'></div>
                                    <p className='text-sm sec-color'>Video</p>
                                </div>
                            </div>
                        </>)
                }

            </div>
        </div>
    );
};

export default States;