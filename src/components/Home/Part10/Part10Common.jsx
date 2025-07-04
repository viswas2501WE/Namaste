'use client'; 
import Link from 'next/link';
import React from 'react';

const Part10Common = ({ imageUrl, title, linkHref = '#', price }) => {
  return (

    <Link
      href={linkHref}
      className="block w-50 h-75 overflow-hidden group cursor-pointer transform transition-transform duration-500"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >

      <div className="w-full h-3/4 overflow-hidden">

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

      <div className="py-4 h-1/6 w-full flex-col items-center justify-center">
        <h3 className="text-sm font-extralight text-gray-800 w-full text-left hover:underline">
          {title} →
        </h3>
        <h3 className="text-md font-light text-gray-800 w-full text-left">
          From Rs.{price}
        </h3>
      </div>
    </Link>
  );
};

export default Part10Common;
