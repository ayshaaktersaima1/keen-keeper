import React from 'react';
import { useParams } from 'react-router';
import UseFriends from '../../hooks/UseFriends';
import { ScaleLoader } from 'react-spinners';

const FriendsDetails = () => {
    const { paramId } = useParams();
    const { friends, loading } = UseFriends();
    if (loading) {
        return <ScaleLoader className='text-center py-10' />
    }

    const friendDetail = friends.find(friend => friend.id == paramId);

    return (
        <div>
            <div className='px-[1%] md:px-[14%]  bg-[#f8fafc] md:py-20'>
                <div className='grid grid-cols-3'>
                    <div className='col-span-1 bg-amber-600'>1</div>
                    <div className='col-span-2 bg-blue-950'>2</div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;