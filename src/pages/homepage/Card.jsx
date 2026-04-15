import React from 'react';
import { Link } from 'react-router';

const Card = ({ friend }) => {
    const { id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = friend;



    return (
        <Link to={`/friendsDetails/${id}`} className='border border-[#e9e9e9] rounded-lg shadow-xl bg-white py-6'>
            <div className='flex justify-center pb-3'><img className='h-12 w-12 md:h-20 md:w-20 rounded-full' src={picture} alt="" /></div>
            <h2 className='text-xl font-semibold primary-color text-center pb-2'>{name}</h2>
            <p className='sec-color text-xs text-center pb-2'>{days_since_contact}d ago</p>

            <div className='flex flex-col justify-center items-center gap-2'>
                <div className='flex justify-center gap-2'>
                    {
                        tags.map(tag => (<div className='badge uppercase bg-[#cbfadb] rounded-3xl text-[#244d3f] text-xs font-medium px-3'>{tag}</div>
                        ))
                    }
                </div>
                <div className={`badge text-white p-2 rounded-3xl text-xs font-medium capitalize ${status === 'on-track' ? 'bg-[#244d3f]' : status === 'overdue' ? 'bg-[#ef4444]' : status === 'almost due' ? 'bg-[#efad44]' : ''}`}>{status}</div>
            </div>
        </Link>
    );
};

export default Card;