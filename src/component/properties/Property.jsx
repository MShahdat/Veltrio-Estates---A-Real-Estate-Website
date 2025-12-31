import React, { useEffect, useState } from 'react';
import { properties } from '../../../public/properties';
import PropertyCard from './PropertyCard';
import { IoFilter } from "react-icons/io5";
import ReactPaginate from 'react-paginate';
import { IoSearch } from "react-icons/io5";
import { MediaQuery } from '../../hook/MediaQuery';
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';


const Property = () => {
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [bed, setBed] = useState('');
  const [bath, setBath] = useState('');
  const [filterType, setFilterType] = useState(null);
  const [property, setProperty] = useState(properties);
  const [order, setOrder] = useState('default');
  const [index, setIndex] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  let count = 6;

  useEffect(() => {
    let filtered = [...properties]; // copy the array

    if (filterType) {
      filtered = filtered.filter((pro) => pro.type === filterType);
      // console.log(filterType)
    }

    if (city) {
      filtered = filtered.filter((pro) => pro.city === city);
      console.log(city)
    }

    if (category) {
      filtered = filtered.filter((pro) => pro.category === category);
    }

    if (bed) {
      if (bed === '5+') {
        filtered = filtered.filter((pro) => pro.bed >= 5);
      } else {
        filtered = filtered.filter((pro) => pro.bed === parseInt(bed));
      }
    }

    if (bath) {
      if (bath === '5+') {
        filtered = filtered.filter((pro) => pro.bath >= 5);
      } else {
        filtered = filtered.filter((pro) => pro.bath === parseInt(bath));
      }
    }

    setTotalPage(Math.ceil(filtered.length / count));
    const start = (index - 1) * count;
    const end = start + count;

    if (order === 'low') {
      filtered.sort((a, b) => a.price - b.price); // low to high
      // console.log(order)
    } else if (order === 'high') {
      filtered.sort((a, b) => b.price - a.price); // high to low
    } else if (order === 'default') {
      filtered.sort((a, b) => a.id - b.id);
    }

    setFilteredProperties(filtered);
    setProperty(filtered.slice(start, end));
  }, [filterType, order, index, city, category, bed, bath])


  const handleChange = (cur) => {
    // console.log(cur.selected + 1)
    setIndex(cur.selected + 1)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const isMobile = MediaQuery("(max-width: 639px)");
  const isTab = MediaQuery("(min-width: 640px) and (max-width: 767px)");
  const modVal = isTab ? 2 : 3;

  return (
    <div className='bg-white overflow-visible dark:bg-black/80'>
      <div className='bg-[#97755A] w-full pt-0'>
        <div className='bg-white flex items-center gap-2 text-black/90 rounded w-fit px-4 sm:px-8 py-3 mx-auto'>
          <IoSearch className='text-[18px]' />
          <p className=''>Search Your Best Comfortable Property</p>
        </div>
        <form className='px-4 mt-8 pb-16 max-w-7xl mx-auto lg:px-6 xl:px-12 grid grid-cols-2 md:grid-cols-4 gap-4 '>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Select City Area</legend>
            <select onChange={(e) => {
              setCity(e.target.value);
              setIndex(1)
              // console.log(e.target.value);
            }} defaultValue="Pick a browser" className="select outline-none bg-white dark:bg-black/95 text-black dark:text-white/80">
              <option value={''} className='hover:bg-[#97755A] hover:text-white'>Default</option>
              <option value={'Dhaka'} className='hover:bg-[#97755A] hover:text-white'>Dhaka</option>
              <option value={'Narayanganj'} className='hover:bg-[#97755A] hover:text-white'>Narayanganj</option>
              <option value={'Cumilla'} className='hover:bg-[#97755A] hover:text-white'>Cumilla</option>
              <option value={'Gazipur'} className='hover:bg-[#97755A] hover:text-white'>Gazipur</option>
              <option value={'Chittagong'} className='hover:bg-[#97755A] hover:text-white'>Chittagong</option>
              <option className='hover:bg-[#97755A] hover:text-white'>Khulna</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Category</legend>
            <select onChange={(e) => {
              setCategory(e.target.value);
              setIndex(1);
            }} defaultValue="Pick a browser" className="select outline-none bg-white dark:bg-black/95 text-black dark:text-white/80">
              <option value={''} className='hover:bg-[#97755A] hover:text-white'>All Category</option>
              <option value={'Villa'} className='hover:bg-[#97755A] hover:text-white'>Villa</option>
              <option value={'Apartment'} className='hover:bg-[#97755A] hover:text-white'>Apartment</option>
              <option value={'House'} className='hover:bg-[#97755A] hover:text-white'>House</option>
              <option value={'Home'} className='hover:bg-[#97755A] hover:text-white'>Home</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">No. of Bed</legend>
            <select onChange={(e) => {
              setBed(e.target.value);
              setIndex(1);
            }} defaultValue="Pick a browser" className="select outline-none bg-white dark:bg-black/95 text-black dark:text-white/80">
              <option value={''} className='hover:bg-[#97755A] hover:text-white'>Default</option>
              <option value={'2'} className='hover:bg-[#97755A] hover:text-white'>2</option>
              <option value={'3'} className='hover:bg-[#97755A] hover:text-white'>3</option>
              <option value={'4'} className='hover:bg-[#97755A] hover:text-white'>4</option>
              <option value={'5+'} className='hover:bg-[#97755A] hover:text-white'>5+</option>
            </select>
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">No. of Bath</legend>
            <select onChange={(e) => {
              setBath(e.target.value);
              setIndex(1);
            }} defaultValue="Pick a browser" className="select outline-none bg-white dark:bg-black/95 text-black dark:text-white/80">
              <option value={''} className='hover:bg-[#97755A] hover:text-white'>Default</option>
              <option value={'2'} className='hover:bg-[#97755A] hover:text-white'>2</option>
              <option value={'3'} className='hover:bg-[#97755A] hover:text-white'>3</option>
              <option value={'4'} className='hover:bg-[#97755A] hover:text-white'>4</option>
              <option value={'5+'} className='hover:bg-[#97755A] hover:text-white'>5+</option>
            </select>
          </fieldset>
        </form>
      </div>
      <div className='max-w-7xl px-4 md:px-8 pb-16 mx-auto'>

        <div className='mt-8 flex items-center justify-between'>
          <div className='flex items-center gap-2 text-black/80 dark:text-white'>
            <p className='hidden sm:block font-medium'>Filter</p>
            <IoFilter className=' mt-0.5' />
          </div>
          <div className='flex items-center gap-3 sm:gap-4 dark:text-white text-black/80'>
            <button onClick={() => setFilterType(null)} className={`${filterType === null ? 'font-bold text-[#97755A]' : ''}`}>
              All
            </button>
            <button className={`${filterType === 'rent' ? 'font-bold text-[#97755A]' : ''}`} onClick={() => {
              setFilterType('rent');
              setIndex(1);
            }}>
              Rent
            </button>
            <button className={`${filterType === 'sale' ? 'font-bold text-[#97755A]' : ''}`} onClick={() => {
              setFilterType('sale');
              setIndex(1);
            }}>
              Sale</button>
            <div className='w-45 sm:w-48'>
              <select className="select validator outline-none bg-white dark:text-black/80 border-black/25 w-full text-[15px] sm:text-[16px] "
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                required>
                <option value={'default'} className='hover:bg-[#97755A] hover:text-white'>Default</option>
                <option value={'low'} className='hover:bg-[#97755A] hover:text-white' >Price Low to High</option>
                <option value={'high'} className='hover:bg-[#97755A] hover:text-white'>Price High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className='mt-4 tracking-wide text-center text-black dark:text-white/80'>
          Showing {property.length} of {filteredProperties.length} properties
        </div>
        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 space-y-4'>
          {
            property.map((pro, idx) => {
              const delay = isMobile ? 0.15 : (idx % modVal) * 0.25;
              return (
                <motion.div
                  variants={fadeIn("up", delay)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={defaultViewport}
                  key={idx}>
                  <PropertyCard property={pro}></PropertyCard>
                </motion.div>
              )
            })
          }
        </div>
        <motion.div
          variants={fadeIn("up", .2)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}
        >
          <ReactPaginate
            previousLabel='Pre'
            nextLabel='Next'
            breakLabel='...'

            pageCount={totalPage}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}

            onPageChange={handleChange}
            forcePage={index - 1}

            containerClassName="mt-8 flex item-center justify-center gap-1 sm:gap-2 lg:gap-2 text-sm sm:text-sm lg:text-md font-medium"

            pageClassName="border px-2 sm:px-3 py-1 rounded text-black dark:text-white/80"
            pageLinkClassName="cursor-pointer"

            previousClassName="border px-2 sm:px-3 py-1 rounded  text-black dark:text-white/80"
            previousLinkClassName="cursor-pointer"

            nextClassName="border px-2 sm:px-3 py-1 rounded dark:text-white/80 text-black"
            nextLinkClassName="cursor-pointer"

            breakClassName="px-3 py-1 dark:text-white/80 text-black"
            breakLinkClassName="cursor-pointer"

            activeClassName="bg-[#97755A] text-white"
            disabledClassName='opacity-0 cursor-not-allowed'
          ></ReactPaginate>
        </motion.div>
      </div>
    </div>
  );
};

export default Property;