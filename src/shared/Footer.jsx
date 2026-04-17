import React from 'react';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { FaSquareFacebook, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="w-full footer footer-horizontal footer-center bg-[#244d3f] text-primary-content p-5 md:p-12">
                <aside>
                    <h1 className='text-4xl md:text-7xl text-white font-semibold pb-4'>KeenKeeper</h1>
                    <p className='text-white pb-6'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <div>
                        <h1 className='text-white text-xl font-medium pb-4'>Social Links</h1>
                        <nav>

                            <div className="grid grid-flow-col gap-4">
                                <div className='h-9 w-9 rounded-full bg-white flex justify-center items-center'>
                                    <BiLogoInstagramAlt className='h-6 w-6 text-[#101727]' />
                                </div>
                                <div className='h-9 w-9 rounded-full bg-white flex justify-center items-center'>
                                    <FaSquareFacebook className='h-6 w-6 text-[#101727]' />
                                </div>
                                <div className='h-9 w-9 rounded-full bg-white flex justify-center items-center'>
                                    <FaXTwitter className='h-6 w-6 text-[#101727]' />
                                </div>
                            </div>
                        </nav>

                    </div>

                </aside>
                <hr className='border-white opacity-20 w-full md:w-[76%]  mt-1 md:mt-6' />
                <div className='flex flex-col md:flex-row justify-between w-full md:w-[76%] text-white opacity-60'>
                    <div>© 2026 KeenKeeper. All rights reserved.</div>
                    <div className='flex justify-center gap-5 '>
                        <p>Privacy Policy </p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>


            </footer>
        </div>
    );
};

export default Footer;