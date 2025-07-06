    'use client';

    import React, { useState, useEffect } from 'react';
    import AnnouncementBar from './AnnouncementBar';
    import Image from 'next/image';
    import { usePathname } from 'next/navigation';
import Link from 'next/link';

    const Header = () => {
    const pathname = usePathname();
    const logo = `/Logo.png`;

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showAnnouncementBar, setShowAnnouncementBar] = useState(true);
    const [showSearchBar, setShowSearchBar] = useState(false); // NEW

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }

        setShowAnnouncementBar(currentScrollY === 0);
        setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        >
        {/* Announcement bar always on top */}
        {showAnnouncementBar && <AnnouncementBar />}

        {/* 🔍 Search Bar BELOW announcement bar */}
        {showSearchBar && (
            <div className="absolute left-0 right-0 z-40 bg-white text-gray-600 px-[14%] h-35 py-3 border-b border-gray-200 flex justify-center items-center" style={{ top: showAnnouncementBar ? '90px' : '0' }}>
            <div className="relative w-full max-w-xl mx-auto">
                <input
                type="text"
                autoFocus
                placeholder="Search"
                className="w-full border border-black p-3 pr-10 text-sm focus:outline-none"
                />
                <div className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-5.197-5.197a7.5 7.5 0 1 0-10.607 0 7.5 7.5 0 0 0 10.607 0Z" />
                </svg>
                </div>
                <button
                onClick={() => setShowSearchBar(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 text-xl cursor-pointer"
                >
                ✕
                </button>
            </div>
            </div>
        )}

        <div className="container mx-auto px-[14%] py-4 flex justify-between items-center">
            {/* Left: Search Icon */}
            <div className="flex items-center">
            <svg
                onClick={() => setShowSearchBar(true)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer text-gray-600"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center text-center">
            <Image
                src={logo}
                alt="TARAKAYA SILVER Logo"
                width={200}
                height={50}
                priority
            />
            </div>

            {/* Right: Icons */}
            <div className="flex items-center space-x-4">
                <Link href="/login">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 cursor-pointer text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
                 </Link>
                 <Link href="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 cursor-pointer text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.002ZM8.25 10.5a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v-.75Zm6 0a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75Z" />
            </svg>
                 </Link>
            </div>
        </div>

        {/* Bottom Nav */}
        <nav className="container mx-auto px-4 pt-2 pb-[2%] flex justify-center space-x-8 text-gray-700 text-sm tracking-wider">
            <a href="/" className={`hover:text-gray-900 border-b-1 ${pathname === '/' ? 'border-b-black' : 'border-b-white'} hover:border-b-gray-900`}>Home</a>
            <a href="/categories" className={`hover:text-gray-900 border-b-1 ${pathname === '/categories' ? 'border-b-black' : 'border-b-white'} hover:border-b-gray-900`}>Categories</a>
            <a href="/shopall" className={`hover:text-gray-900 border-b-1 ${pathname === '/shopall' ? 'border-b-black' : 'border-b-white'} hover:border-b-gray-900`}>Shop all</a>
            <a href="/contact" className={`hover:text-gray-900 border-b-1 ${pathname === '/contact' ? 'border-b-black' : 'border-b-white'} hover:border-b-gray-900`}>Contact</a>
            <a href="/ourstory" className={`hover:text-gray-900 border-b-1 ${pathname === '/ourstory' ? 'border-b-black' : 'border-b-white'} hover:border-b-gray-900`}>Our Story</a>
        </nav>
        </header>
    );
    };

    export default Header;
