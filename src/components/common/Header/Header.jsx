import React from 'react';
import AnnouncementBar from './AnnouncementBar';
import Image from 'next/image';

const Header = () => {
    const logo = `/Logo.png`
  return (
    <header className="bg-white shadow-sm">
        <AnnouncementBar/>
      <div className="container mx-auto px-[14%] py-4 flex justify-between items-center">
        <div className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor" // This makes it inherit the parent's text color
                        className="w-6 h-6 cursor-pointer text-black" // Added text-black here
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>

                {/* Logo */}
                <div className="flex justify-center text-center">
                    <div>
                        {/* Make sure your Image component has correct width and height */}
                        <Image
                            src={logo}
                            alt="TARAKAYA SILVER Logo"
                            width={200} // Adjust as needed
                            height={50} // Adjust as needed
                            priority
                        />
                    </div>
                </div>

                {/* User and Cart Icons */}
                <div className="flex items-center space-x-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor" // This makes it inherit the parent's text color
                        className="w-6 h-6 cursor-pointer text-black" // Added text-black here
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor" // This makes it inherit the parent's text color
                        className="w-6 h-6 cursor-pointer text-black" // Added text-black here
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.002ZM8.25 10.5a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v-.75Zm6 0a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Z" />
                    </svg>
                </div>
      </div>
      {/* Navigation */}
      <nav className="container mx-auto px-4 pt-2 pb-[2%] flex justify-center space-x-8 text-gray-700 text-sm tracking-wider">
        <a href="#" className="hover:text-gray-900 border-b-1 border-b-white hover:border-b-gray-900 hover:border-b-1">Home</a>
        <a href="#" className="hover:text-gray-900 border-b-1 border-b-white hover:border-b-gray-900 hover:border-b-1">Categories</a>
        <a href="#" className="hover:text-gray-900 border-b-1 border-b-white hover:border-b-gray-900 hover:border-b-1">Shop all</a>
        <a href="#" className="hover:text-gray-900 border-b-1 border-b-white hover:border-b-gray-900 hover:border-b-1">Contact</a>
        <a href="#" className="hover:text-gray-900 border-b-1 border-b-white hover:border-b-gray-900 hover:border-b-1">Our Story</a>
      </nav>
    </header>
  );
};

export default Header;