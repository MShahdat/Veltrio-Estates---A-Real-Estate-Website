import React, { useEffect, useState } from 'react';
import { properties } from '../../../public/properties';
import PropertyCard from './PropertyCard';
import { IoFilter } from "react-icons/io5";
import ReactPaginate from 'react-paginate';


const Property = () => {

  const [filterType, setFilterType] = useState(null);
  const [property, setProperty] = useState(properties);
  const [order, setOrder] = useState('default');
  const [index, setIndex] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [filteredProperties, setFilteredProperties] = useState(properties);
  let count = 2;

  useEffect(() => {
    let filtered = [...properties]; // copy the array

    if (filterType) {
      filtered = filtered.filter((pro) => pro.type === filterType);
    }

    setTotalPage(Math.ceil(filtered.length / count));
    const start = (index - 1) * count;
    const end = start + count;

    if (order === 'low') {
      filtered.sort((a, b) => a.price - b.price); // low to high
    } else if (order === 'high') {
      filtered.sort((a, b) => b.price - a.price); // high to low
    } else if (order === 'default') {
      filtered.sort((a, b) => a.id - b.id);
    }

    setFilteredProperties(filtered);
    setProperty(filtered.slice(start, end));
  }, [filterType, order, index])

  const handleFilter = (type) => {
    setFilterType(type);
    setIndex(1)
  }

  const handleOrder = (order) => {
    setOrder(order);
  }

  const handleChange = (cur) => {
    // console.log(cur.selected + 1)
    setIndex(cur.selected + 1)
    window.scrollTo({
      top:0,
      behavior: 'smooth',
    })
  }


  return (
    <div className='bg-white dark:bg-black/80'>
      <div className='max-w-7xl px-4 md:px-8 py-16 mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2 text-black/80 dark:text-white'>
            <p className='hidden sm:block font-medium'>Filter</p>
            <IoFilter className=' mt-0.5' />
          </div>
          <div className='flex items-center gap-2 sm:gap-4 dark:text-white text-black/80'>
            <button onClick={() => setFilterType(null)} className={`${filterType === null ? 'font-bold text-[#97755A]' : ''}`}>
              All
            </button>
            <button className={`${filterType === 'rent' ? 'font-bold text-[#97755A]' : ''}`} onClick={() => handleFilter('rent')}>
              Rent
            </button>
            <button className={`${filterType === 'sale' ? 'font-bold text-[#97755A]' : ''}`} onClick={() => handleFilter('sale')}>
              Sale</button>
            <div className='w-45 sm:w-48'>
              <select className="select validator outline-none bg-white dark:text-black/80 border-black/25 w-full text-[15px] sm:text-[16px] "
                value={order}
                onChange={(e) => handleOrder(e.target.value)}
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
            property.map((pro, idx) => (
              <div key={idx}>
                <PropertyCard property={pro}></PropertyCard>
              </div>
            ))
          }
        </div>
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
      </div>
    </div>
  );
};

export default Property;