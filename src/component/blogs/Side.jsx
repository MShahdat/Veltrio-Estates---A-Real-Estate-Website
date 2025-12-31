import React, { useState } from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { properties } from '../../../public/properties';
import { Link } from 'react-router-dom';
import { blogs } from '../../../public/blog';

const Side = (props) => {
  // console.log(props.id)

  const blog = blogs.filter((b) => b.id === props.id)
  // console.log(blog)

  const pblog = blogs.slice(0, 5);

  const categories = [...new Set(properties.map(item => item.category))];
  // console.log(categories);

  const categoryCount = properties.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc
  }, {})

  // console.log(categoryCount)

  return (
    <div className='grid grid-cols-1 gap-6'>

      <div className='bg-[#97755A] p-8'>
        <h2 className='text-xl font-medium tracking-wide text-white '>Properties Category</h2>
        {
          categories.map((item) => (
            <div key={item} className='px-4'>
              <div className=' text-[16px] text-white py-2.5 flex items-center justify-between'>
                <Link to={'/properties'} className='hover:underline'>{item}</Link>
                <p>({categoryCount[item]})</p>
              </div>
              <h3 className='border-t border-dashed border-white'></h3>
            </div>
          ))
        }
      </div>

      <div className='border bg-white border-black/10 dark:border-white/25 text-black/80 px-8 py-6 w-full'>
        {/* <h3 className='text-xl'>Contact Agent</h3> */}
        <div className='flex items-start gap-2'>
          <img src={blog[0].profile} className='w-18 h-18 rounded-full object-cover'></img>
          <div className='flex flex-col mt-1 items-start'>
            <p className='text-lg font-medium'>{blog[0].author}</p>
            <p className='text-black/60'>Author</p>
          </div>
        </div>
        <p className='mt-4 text-black/60 tracking-wide leading-relaxed text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos temporibus, similique sunt quasi saepe unde quae ad facilis perferendis labore illo tempora adipisci impedit odio officiis aliquid autem obcaecati quisquam, recusandae incidunt reprehenderit voluptatum vitae? </p>
        <div className='flex gap-2 text-white mt-4'>
          <a href='https://x.com/'><FaTwitter className='size-8 rounded-full bg-[#7b5e46] px-1.5 py-1.5' /></a>
          <a href='https://www.facebook.com/'><FaFacebook className='size-8 rounded-full bg-[#7b5e46] px-1.5 py-1.5' /></a>
          <a href='https://www.instagram.com/'><LuInstagram className='size-8 rounded-full bg-[#7b5e46] px-1.5 py-1.5' /></a>
          <a href='https://www.instagram.com/'><FaLinkedin className='size-8 rounded-full bg-[#7b5e46] px-1.5 py-1.5' /></a>
        </div>
      </div>

      <div className=''>
        <h2 className='text-xl font-medium px-4 bg-black/70 dark:bg-[#97755A] text-white py-2 tracking-wide'>Popular Blogs</h2>
        <div className='px-0 flex flex-col gap-1 mt-0'>
          {
            pblog.map((item, idx) => (
              <Link to={`/blogs/${item.id}`} key={idx} className='hover:scale-101 transform duration-300 px-2 py-1 flex items-center gap-2 bg-white shadow'>
                <img src={item.url} className='h-20 w-24 object-cover rounded'></img>
                <div className=''>
                  <p className='text-[17px] text-black/70 tracking-wide line-clamp-1 font-medium leading-tight'>{item.title}</p>
                  <p className='text-black/60 text-sm mt-1'>{item.date}</p>
                  <p className=' text-[#97755A] font-medium'>Read more</p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>

    </div>
  );
};

export default Side;