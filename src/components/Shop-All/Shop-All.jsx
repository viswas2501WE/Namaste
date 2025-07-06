'use client'; 
import Link from 'next/link';
import React from 'react';

const ShopAll = ({ imageUrl, title, linkHref = '#', price }) => {
  return (

    <Link
      href={linkHref}
      className="block w-50 h-105 overflow-hidden group cursor-pointer justify-between transform transition-transform duration-500"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >

      <div className="w-full h-65 overflow-hidden">

        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-103 "
          onError={(e) => {
            e.target.onerror = null; // Prevents infinite loop if fallback also fails
            e.target.src = `https://placehold.co/600x400/CCCCCC/333333?text=Image+Not+Found`;
          }}
        />
      </div>

      <div className="py-4 h-27 w-full flex-col items-center justify-center">
        <h3 className="text-sm font-extralight text-gray-800 w-full text-left hover:underline">
          {title} →
        </h3>
        <p className='text-xs py-0.5'>★★★★★ (1)</p>
        <h3 className="text-md font-light text-gray-800 w-full text-left">
          From Rs.{price}
        </h3>
      </div>
        <button className='flex justify-self-center py-3 w-full items-center justify-center border-1 border-gray-200'>
            Choose Options
        </button>
    </Link>
  );
};

export default ShopAll;
