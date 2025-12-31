import React from 'react';
import { FaMapLocation } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const PropertyCard = (props) => {
  // console.log(props.property)
  return (
    <>
      <Link to={`/properties/${props.property.id}`}
        className='bg-white shadow-xl  flex flex-col group transition-all ease-in-out'>
        <div className='group-hover:-translate-y-[16px] transform duration-500'>
          <div className='relative'>
            <div className='absolute top-1 left-1'>
              <p className='text-[#97755A] transition transform group-hover:bg-[#97755A] group-hover:text-white duration-700  bg-white px-4 py-1 font-bold uppercase tracking-wider'>{props.property.type}</p>
            </div>
            <div className='absolute bottom-1 left-1'>
              <p className='bg-[#97755A] transition transform group-hover:text-[#97755A] group-hover:bg-white duration-700 px-4 py-1 font-bold tracking-wide text-2xl'>
                $ {props.property.price}
                {props.property.type === 'rent' && <span className='text-[14px]'>/month</span>}
              </p>
            </div>
            <img src={props.property.cover} className='w-full h-[260px] sm:h-[280px] object-cover'></img>
          </div>
          <div className='p-4'>
            <div className='flex items-center gap-2'>
              <p className='text-black text-[20px] font-medium'>{props.property.name}</p>
            </div>
            
            <div className='flex mt-2 items-center gap-2'>
              <FaMapLocation className='text-[#97755A] text-[20px]' />
              <p className='mt-0.5 text-black font-medium'>{props.property.location}</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='mt-2 text-[17px] text-[#97755A] font-medium'>{props.property.category}</p>
              <p></p>
            </div>
            <p className='text-black/60 mt-2 text-[16px] line-clamp-2 tracking-wide leading-relaxed'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsa quaerat ea sed quis officiis? Architecto, cupiditate atque? Rem, iure.</p>
            <div className='mt-6 flex justify-between'>
              <div className='flex items-center gap-2'>
                <FaChartArea className='text-[#97755A] text-[24px]' />
                <p className='text-black/70 font-medium'>{props.property.area} sq.fit</p>
              </div>
              <div className='flex items-center gap-6'>
                <div className='flex items-center gap-2'>
                  <FaBath className='text-[#97755A] text-[24px]' />
                  <p className=' text-black/70 font-medium'>{props.property.bed}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <FaBed className='text-[#97755A] text-[24px]' />
                  <p className='text-black/70 font-medium'>{props.property.bath}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PropertyCard;