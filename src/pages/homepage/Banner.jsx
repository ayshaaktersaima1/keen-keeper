import { FiPlus } from 'react-icons/fi';
import UseFriends from '../../hooks/UseFriends';
import { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContextProvider';

const Banner = () => {

    const { friends } = UseFriends();
    const { checkIns } = useContext(FriendsContext);

    const onTrack = friends.filter(friend => friend.status === 'on-track');
    const needAttention = friends.filter(friend => friend.status === 'overdue' || friend.status === 'almost due');
    return (
        <div>
            <div className='text-center pt-10 md:pt-20 pb-5 md:pb-10'>
                <h1 className='primary-color text-5xl font-bold'>Friends to keep close in your life</h1>
                <h2 className='sec-color pt-4 pb-8 w-auto md:w-150 mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.</h2>
                <button className='btn rounded-sm text-white font-semibold bg-[#244D35]'><FiPlus className='text-base' /> Add a Friend</button>
            </div>
            {/* counts */}

            <div className='grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-6 w-full'>
                <div className='flex-1 space-y-2 text-center py-8 border border-[#000000]/8 shadow-sm rounded-lg bg-white'>
                    <h2 className='text-[#244D35] text-3xl font-semibold'>{friends.length}</h2>
                    <p className='sec-color text-lg'>Total friends</p>
                </div>

                <div className='flex-1 space-y-2 text-center py-8 border border-[#000000]/8 shadow-sm rounded-lg bg-white'>
                    <h2 className='text-[#244D35] text-3xl font-semibold'>{onTrack.length}</h2>
                    <p className='sec-color text-lg'>On Track</p>
                </div>
                <div className='flex-1 space-y-2 text-center py-8 border border-[#000000]/8 shadow-sm rounded-lg bg-white'>
                    <h2 className='text-[#244D35] text-3xl font-semibold'>{needAttention.length}</h2>
                    <p className='sec-color text-lg'>Need Attention</p>
                </div>
                <div className='flex-1 space-y-2 text-center py-8 border border-[#000000]/8 shadow-sm rounded-lg bg-white'>
                    <h2 className='text-[#244D35] text-3xl font-semibold'>{checkIns.length}</h2>
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