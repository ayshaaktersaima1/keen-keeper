import React from 'react';
import { RiHome2Line } from 'react-icons/ri';
import { Link } from 'react-router';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center max-w-md">
                <h1 className="text-7xl font-bold text-[#244d3f]">404</h1>

                <h2 className="mt-4 text-2xl font-bold primary-color">
                    Page Not Found
                </h2>

                <p className="mt-3 text-gray-700">
                    Looks like this friendship link is broken. The page you're looking for doesn't exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="inline-flex gap-2 text-lg font-semibold justify-center items-center mt-6 px-6 py-3 rounded-xl bg-[#244d3f] text-white hover:bg-[#11241e] transition"
                >
                    <RiHome2Line className='text-2xl' />  Back to home
                </Link>

            </div>
        </div>
    );
};

export default NotFoundPage;