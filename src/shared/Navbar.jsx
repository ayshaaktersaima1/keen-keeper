import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { RiHome2Line, RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router';
import logo from '../assets/images/logo.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar flex flex-col md:flex-row md:justify-between md:items-center-safe bg-base-100 shadow-sm py-2 md:py-5 px-[1%] md:px-[5%]">
                <div className="flex justify-center md:justify-start">

                    <img src={logo} alt='logo'></img>
                </div>
                <div className="flex justify-center md:justify-start">
                    <NavLink to={'/'} className={({ isActive }) => `btn btn-ghost rounded-sm flex justify-center items-center gap-1 mr-1 font-medium ${isActive ? 'text-white bg-[#244D35]' : 'font-medium sec-color'}`}><span className='text-2xl'><RiHome2Line /></span>Home</NavLink>
                    <NavLink to={'/timeline'} className={({ isActive }) => `btn btn-ghost rounded-sm flex justify-center items-center gap-1 mr-1 ${isActive ? 'text-white bg-[#244D35]' : 'sec-color'}`}><span className='text-2xl'><RiTimeLine /> </span>Timeline</NavLink>
                    <NavLink to={'/stats'} className={({ isActive }) => `btn btn-ghost rounded-sm flex justify-center items-center gap-1 mr-1 ${isActive ? 'text-white bg-[#244D35]' : 'sec-color'}`}><span className='text-2xl'><ImStatsDots /></span>Stats</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;