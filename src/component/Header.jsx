import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";


const Header = () => {
  return (
   <div className='bg-red-50 dark:bg-black'>
     <div className='max-w-7xl px-4 lg:px-8 py-1 md:py-2 md:px-4 mx-auto bg-[#97755A] text-white'
    style={{clipPath: 'inset(0% 0 0% 0 round 0% 20% 0 20%)'}}
    >
      <div className='flex items-center justify-between'>

        <div className='flex flex-col sm:flex-row gap-1 sm:gap-4 text-[12px] md:text[14px] font-medium'>
          <div className='flex items-center gap-1'>
            <FaLocationDot />
            <p>15/2 Block-A Gulshan, Dhaka-1200</p>
          </div>
          <div className='flex items-center gap-1'>
            <MdAddCall />
            <p>+8801885374041</p>
          </div>
        </div>

        <div className='flex items-center gap-2 md:gap-4'>
          <a href='#'>
            <FaFacebook className='size-4 md:size-4' />
          </a>
          <a href='#'>
            <FaSquareInstagram className='size-4 md:size-4' />
          </a>
          <a href='#'>
            <FaTwitter className='size-4 md:size-4' />
          </a>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Header;