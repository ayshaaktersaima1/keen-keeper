import React from 'react';
import UseFriends from '../../hooks/UseFriends';
import Card from './Card';
import { ScaleLoader } from 'react-spinners';

const YourFriend = () => {

    const { friends, loading } = UseFriends();

    return (
        <div className='pb-20'>
            <h1 className='primary-color text-center md:text-left text-2xl font-semibold pb-4'>Your Friends</h1>


            {
                loading ? (<div className='flex justify-center items-center min-h-[40vh]'>
                    <ScaleLoader color='#244d3f' height={50} width={6} />
                </div>
                ) : (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

                    {
                        friends.map(friend => <Card key={friend.id} friend={friend}></Card>)
                    }
                </div>)
            }


        </div>
    );
};

export default YourFriend;

