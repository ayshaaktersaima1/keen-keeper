import React, { useContext } from 'react';
import { useParams } from 'react-router';
import UseFriends from '../../hooks/UseFriends';
import { ScaleLoader } from 'react-spinners';
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from 'react-icons/ri';
import { FiArchive } from 'react-icons/fi';
import { LuPhoneCall, LuVideo } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { toast } from 'react-toastify';
import { FriendsContext } from '../../context/FriendsContext';


const FriendsDetails = () => {
    const { paramId } = useParams();
    const { friends, loading } = UseFriends();
    const { checkIns, setCheckIns } = useContext(FriendsContext);
    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-[50vh]'>
                <ScaleLoader color='#244d3f' height={50} width={6} />
            </div>
        );

    }

    const friendDetail = friends.find(friend => friend.id == paramId);

    const handleCheckIn = (type) => {

        const newCheckIn = {
            ...friendDetail,
            type
        };
        setCheckIns([...checkIns, newCheckIn]);
        toast.success(`${newCheckIn.type} with ${newCheckIn.name}`)
    }
    return (
        <div>
            <div className='px-[1%] md:px-[14%]  bg-[#f8fafc] md:py-20'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {/* left side */}
                    <div className='col-span-3 lg:col-span-1 flex flex-col justify-center text-center'>
                        <div className='border border-[#e9e9e9] shadow-lg rounded-lg px-10 py-6 mb-4'>
                            <div className='flex justify-center mb-3'><img className='w-20 h-20 rounded-full' src={friendDetail.picture} alt="" /></div>
                            <h1 className='text-xl font-semibold mb-2 primary-color'>{friendDetail.name}</h1>
                            <div className={`badge text-white p-2 rounded-3xl text-xs font-medium capitalize mb-2 ${friendDetail.status === 'on-track' ? 'bg-[#244d3f]' : friendDetail.status === 'overdue' ? 'bg-[#ef4444]' : friendDetail.status === 'almost due' ? 'bg-[#efad44]' : ''}`}>{friendDetail.status}</div>


                            <div className='flex justify-center gap-2 mb-3'>
                                {
                                    friendDetail.tags.map((tag, index) => (<div key={index} className='badge uppercase bg-[#cbfadb] rounded-3xl text-[#244d3f] text-xs font-medium px-3'>{tag}</div>
                                    ))
                                }
                            </div>
                            <div className='font-medium italic sec-color mb-3'>"{friendDetail.bio}"</div>
                            <p className='text-sm sec-color'>{friendDetail.email}</p>
                        </div>
                        {/* 2 */}
                        <div className='border border-[#e9e9e9] shadow-lg rounded-lg p-4 mb-2'>
                            <h1 className='primary-color font-medium flex justify-center items-center gap-2'><span className='text-xl'><RiNotificationSnoozeLine /></span>Snooze 2 weeks</h1>
                        </div>
                        {/* 3 */}
                        <div className='border border-[#e9e9e9] shadow-lg rounded-lg p-4 mb-2'>
                            <h1 className='primary-color font-medium flex justify-center items-center gap-2'><span className='text-xl'><FiArchive /></span>Archive</h1>
                        </div>
                        {/* 4 */}
                        <div className='border border-[#e9e9e9] shadow-lg rounded-lg p-4 mb-2'>
                            <h1 className='text-[#ef4444] font-medium flex justify-center items-center gap-2'><span className='text-xl'><RiDeleteBin5Line /></span>Delete</h1>
                        </div>
                    </div>

                    {/* right side */}
                    <div className='col-span-3 lg:col-span-2 space-y-6'>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-1 md:gap-6'>
                            <div className='py-8 flex flex-col justify-center items-center bg-white border border-[#e9e9e9] shadow-lg rounded-lg'>
                                <h1 className='text-[#244d3f] text-3xl font-semibold'>{friendDetail.days_since_contact}</h1>
                                <p className='sec-color font-semibold'>Days Since Contact</p>
                            </div>
                            {/* 2 */}
                            <div className='py-8 flex flex-col justify-center items-center bg-white border border-[#e9e9e9] shadow-lg rounded-lg'>
                                <h1 className='text-[#244d3f] text-3xl font-semibold'>{friendDetail.goal}</h1>
                                <p className='sec-color font-semibold'>Goal (Days)</p>
                            </div>
                            {/* 3 */}
                            <div className='py-8 flex flex-col justify-center items-center bg-white border border-[#e9e9e9] shadow-lg rounded-lg'>
                                <h1 className='text-[#244d3f] text-3xl font-semibold'>{friendDetail.next_due_date}</h1>
                                <p className='sec-color font-semibold'>Next Due</p>
                            </div>

                        </div>

                        {/* second row */}
                        <div className='p-6 bg-white border border-[#e9e9e9] shadow-lg rounded-lg'>
                            <div className='flex justify-between'>
                                <h1 className='text-lg font-medium text-[#244d3f] pb-5'>Relationship Goal</h1>
                                <button className='btn bg-[#f8fafc] rounded-sm shadow-sm primary-color'>Edit</button>
                            </div>
                            <p className='text-lg sec-color'>Connect every <span className='primary-color font-bold'>{friendDetail.goal} days</span></p>
                        </div>

                        {/* 3rd raw */}
                        <div className='p-6 bg-white border border-[#e9e9e9] shadow-lg rounded-lg'>
                            <h1 className='text-lg font-medium text-[#244d3f] pb-5'>Quick Check-In</h1>

                            <div className='grid grid-cols-3 gap-4'>
                                {/* 1 */}
                                <div onClick={() => handleCheckIn('Call')} className='hover:bg-[#d9d9d9] cursor-pointer flex flex-col justify-center items-center py-4 bg-[#f8fafc] border border-[#e9e9e9] shadow-sm rounded-lg'>
                                    <div><LuPhoneCall className='h-6 w-6 primary-color' /></div>
                                    <h2 className='text-lg primary-color pt-2'>Call</h2>
                                </div>
                                {/* 2 */}
                                <div onClick={() => handleCheckIn('Text')} className='hover:bg-[#d9d9d9] cursor-pointer flex flex-col justify-center items-center py-4 bg-[#f8fafc] border border-[#e9e9e9] shadow-sm rounded-lg'>
                                    <div><MdOutlineTextsms className='h-6 w-6 primary-color' /></div>
                                    <h2 className='text-lg primary-color pt-2'>Text</h2>
                                </div>
                                {/* 3 */}
                                <div onClick={() => handleCheckIn('Video')} className='hover:bg-[#d9d9d9] cursor-pointer flex flex-col justify-center items-center py-4 bg-[#f8fafc] border border-[#e9e9e9] shadow-sm rounded-lg'>
                                    <div><LuVideo className='h-6 w-6 primary-color' /></div>
                                    <h2 className='text-lg primary-color pt-2'>Video</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendsDetails;