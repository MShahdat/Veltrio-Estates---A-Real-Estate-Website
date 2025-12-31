import React, { useContext, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { properties } from '../../../public/properties';
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { FaMapLocation } from "react-icons/fa6";
import { FaBath } from "react-icons/fa6";
import { FaChartArea } from "react-icons/fa";
import { FaBed } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { MdOutlineCrisisAlert } from "react-icons/md";
import Sidebar from './Sidebar';
import PropertyCard from './PropertyCard';
import { dataContext } from '../../context/Context';
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';

const Detail = () => {
  const [
    open,
    setOpen,
    gallery,
    setGallery,
    imgIdx,
    setImgIdx,
    urlIdx,
    setUrlIdx,
  ] = useContext(dataContext)

  const { id } = useParams()

  setUrlIdx(Number(id))
  // console.log('pro idx',urlIdx)
  // console.log(id)
  const property = properties.find((pro) => pro.id === Number(id))
  // console.log(property)
  // console.log(property.url)
  const bath = property.bath;
  const bed = property.bed;

  const related = properties.filter((item) => item.bath === bath || item.bed === bed)

  const rec = related.slice(0, 3);

  const prop = property.url.slice(0, 5)
  // console.log('related',related)
  // console.log(related.length)

  const slideRef = useRef();

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <div className='bg-white dark:bg-black/80'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>
        {
          !property &&
          <p className='text-red-500 text-center '>Property '{id}' Not Found</p>
        }
        <motion.h3
          variants={fadeIn("up", .15)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}
          className='text-center text-black/80 dark:text-[#97755A] tracking-wider font-bold text-3xl md:text-4xl uppercase'>Property Details</motion.h3>
        <motion.p
          variants={fadeIn("up", .15)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}
          className='text-[16px] tracking-wide mt-3 dark:text-white/90 text-black/70 mx-auto max-w-3xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi possimus consectetur? Provident quibusdam natus labore,</motion.p>
        <div className='mt-12 w-full flex flex-col lg:flex-row gap-4'>
          <div className='border border-black/5 dark:border-white/25 lg:w-8/12 text-black/80'>
            <Slider ref={slideRef} {...settings}>
              {
                prop.map((im, idx) => (
                  <div key={idx} className='relative'>
                    <button onClick={() => slideRef.current.slickPrev()} className='absolute left-2 top-1/2 -translate-y-1/2 '>
                      <IoIosArrowBack className='bg-white text-black rounded-full w-5 h-5' />
                    </button>
                    <button onClick={() => slideRef.current.slickNext()} className='absolute right-2 top-1/2 -translate-y-1/2'>
                      <IoIosArrowForward className='bg-white text-black rounded-full w-5 h-5' />
                    </button>
                    <img src={im.image} className='w-full h-[350px] sm:h-[400px] object-cover'></img>
                  </div>
                ))
              }
            </Slider>

            <div className='px-4 py-6'>
              <div className=' dark:text-white/80'>
                <h3 className=' text-xl font-medium tracking-wide '>Property Details</h3>
                <p className='border-t mt-2 border-black/10 dark:border-white/40'></p>
                <div className='flex flex-col items-start'>
                  <div className='flex items-center mt-4 text-[#97755A]'>
                    <p className='text-2xl sm:text-3xl font-bold'>$ {property.price}
                      {property.type === 'rent' && <span className='text-[14px]'>/month</span>}</p>
                  </div>
                </div>
                <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 text-black/80 dark:text-white/80 space-x-16 space-y-6 flex-wrap'>
                  <div className='flex flex-col items-start'>
                    <p className='text-[17px] font-medium'>Location</p>
                    <div className='flex items-start gap-2'>
                      <FaMapLocation className='shrink-0 text-[20px] text-[#97755A]' />
                      <p className='text-[16px] tracking-wide '>{property.location}</p>
                    </div>
                  </div>
                  <div className='flex flex-col items-start'>
                    <p className='text-[17px] font-medium'>Property</p>
                    <div className='flex items-center gap-2'>
                      <PiBuildingApartmentFill className='text-[20px] text-[#97755A]' />
                      <p className='text-[16px] tracking-wide '>{property.category}</p>
                    </div>
                  </div>
                  <div className='flex flex-col items-start'>
                    <p className='text-[17px] font-medium'>Type</p>
                    <div className='flex items-center gap-2'>
                      <MdOutlineCrisisAlert className='text-[20px] text-[#97755A]' />
                      <p className='text-[16px] uppercase tracking-wide '>{property.type}</p>
                    </div>
                  </div>
                  <div className='flex flex-col items-start'>
                    <p className='text-[17px] font-medium'>Area</p>
                    <div className='flex items-center gap-2'>
                      <FaChartArea className='text-[20px] text-[#97755A]' />
                      <p className='sm:text-[16px] tracking-wide '>{property.area} Sq.fit</p>
                    </div>
                  </div>
                  <div className='flex flex-col items-start'>
                    <p className='text-[17px] font-medium'>Bath</p>
                    <div className='flex items-center gap-2'>
                      <FaBath className='text-[20px] text-[#97755A]' />
                      <p className='text-[16px] tracking-wide '>{property.bath}</p>
                    </div>
                  </div>
                  <div className='flex flex-col items-start'>
                    <p className='text-[17px] font-medium'>Bed</p>
                    <div className='flex items-center gap-2'>
                      <FaBed className='text-[20px] text-[#97755A]' />
                      <p className='sm:text-[16px] tracking-wide '>{property.bed}</p>
                    </div>
                  </div>
                  <div className='flex flex-col items-start'>
                    <p className='text-[17px] font-medium'>Build</p>
                    <div className='flex items-center gap-2'>
                      <FaHouseUser className='text-[20px] text-[#97755A]' />
                      <p className='sm:text-[16px] tracking-wide '>{property.build}</p>
                    </div>
                  </div>
                  <div className='flex flex-col items-start'>
                    <p className='text-[17px] font-medium'>Garage</p>
                    <div className='flex items-center gap-2'>
                      <FaCarAlt className='text-[20px] text-[#97755A]' />
                      <p className=' sm:text-[16px] tracking-wide '>{property.garage} Sq. fit</p>
                    </div>
                  </div>
                </div>
                <h3 className='mt-6 text-xl font-medium tracking-wide'>More Info</h3>
                <p className='border-t mt-2 border-black/10 dark:border-white/40'></p>
                <div className='mt-4 text-[16px] sm:text-[16px] tracking-wider leading-relaxed'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat inventore nisi, laborum magnam minima laudantium et beatae aut, quae dolores ea facere asperiores in tempore cumque! Sit, praesentium autem.</p><br></br>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, eveniet!</p><br></br>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facere obcaecati debitis repudiandae rerum omnis dolor quaerat inventore maxime quae!</p>
                </div>
              </div>

              <div className='mt-4'>
                <h3 className='mt-6 dark:text-white/80 text-xl font-medium tracking-wide '>Gallery</h3>
                <p className='border-t mt-2 pb-4 border-black/10 dark:border-white/40'></p>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-0.5'>
                  {
                    property.url.map((im, idx) => (
                      <div key={idx} onClick={() => {
                        setGallery(true),
                          setImgIdx(idx)
                      }} className=''>
                        <img src={im.image} className='h-[150px] w-full object-cover hover:cursor-zoom-in'></img>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          <div className=' w-full'>
            <Sidebar />
          </div>
        </div>

        {
          related &&
          <div className='mt-16'>
            <h3 className='text-3xl text-black/80 dark:text-white/80 font-semibold '>Related Properties</h3>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 space-y-4'>
              {
                rec.map((pro, idx) => (
                  <div key={idx}>
                    <PropertyCard property={pro} />
                  </div>
                ))
              }
            </div>
          </div>
        }

      </div>
    </div>
  );
};

export default Detail;