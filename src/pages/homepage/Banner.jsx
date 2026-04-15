import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='text-center pt-10 md:pt-20 pb-5 md:pb-10'>
                <h1 className='primary-color text-5xl font-bold'>Friends to keep close in your life</h1>
                <h2 className='sec-color pt-4 pb-8 w-auto md:w-150 mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.</h2>
                <button className='btn rounded-sm text-white font-semibold bg-[#244D35]'>+ Add a Friend</button>
            </div>
            {/* counts */}

            <div className='flex justify-center items-center gap-6 w-full'>
                <div className='flex-1 space-y-2 text-center py-8 border border-[#000000]/8 shadow-sm rounded-lg bg-white'>
                    <h2 className='text-[#244D35] text-3xl font-semibold'>10</h2>
                    <p className='sec-color text-lg'>Total frnds</p>
                </div>
                <div className='flex-1 space-y-2 text-center py-8 border border-[#000000]/8 shadow-sm rounded-lg bg-white'>
                    <h2 className='text-[#244D35] text-3xl font-semibold'>10</h2>
                    <p className='sec-color text-lg'>On Track</p>
                </div>
                <div className='flex-1 space-y-2 text-center py-8 border border-[#000000]/8 shadow-sm rounded-lg bg-white'>
                    <h2 className='text-[#244D35] text-3xl font-semibold'>10</h2>
                    <p className='sec-color text-lg'>Need Attention</p>
                </div>
                <div className='flex-1 space-y-2 text-center py-8 border border-[#000000]/8 shadow-sm rounded-lg bg-white'>
                    <h2 className='text-[#244D35] text-3xl font-semibold'>10</h2>
                    <p className='sec-color text-lg'>Interactions This Month</p>
                </div>
            </div>

            <div className='py-10'>
                <hr className='text-[#e9e9e9]' />
            </div>
        </div>
    );
};

export default Banner;