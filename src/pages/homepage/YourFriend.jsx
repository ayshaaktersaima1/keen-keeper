import React from 'react';
import UseFriends from '../../hooks/UseFriends';
import Card from './Card';
import { ScaleLoader } from 'react-spinners';

const YourFriend = () => {

    const { friends, loading } = UseFriends();

    return (
        <div className='pb-20'>
            <h1 className='primary-color text-2xl font-semibold pb-4'>Your Friends</h1>


            {
                loading ? (<ScaleLoader className='text-center' />) : (<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                    {
                        friends.map(friend => <Card key={friend.id} friend={friend}></Card>)
                    }
                </div>)
            }


        </div>
    );
};

export default YourFriend;

