import React, { useContext, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../../../public/blog';
import Side from './Side';
import { MdDateRange } from "react-icons/md"

const Detail = () => {

  const { id } = useParams()

  const blog = blogs.find((pro) => pro.id === Number(id))
  // console.log(property)

  return (
    <div className='bg-white dark:bg-black/80'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>
        {
          !blog &&
          <p className='text-red-500 text-center '>Blogs '{id}' Not Found</p>
        }
        <div className=' w-full flex flex-col lg:flex-row gap-4'>
          <div className='border border-black/5 dark:border-white/25 w-full lg:w-8/12 text-black/80'>
            <div className='p-4 dark:text-white/80'>
              <h3 className='text-xl font-medium tracking-wide'>{blog.title}</h3>
              <p className='mt-2 text-[16px] tracking-wider leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam amet aspernatur minus molestiae delectus aliquam cum consectetur nisi ex dignissimos.</p>
            </div>
            <img src={blog.url} className='w-full h-[350px] sm:h-[400px] object-cover'></img>

            <div className='p-4 dark:text-white/80'>
              <div className='flex gap-1 items-center'>
                <MdDateRange />
                <p className='text-[14px] tracking-wide'>{blog.date}</p>
              </div>
              <h3 className='mt-6 text-xl font-medium tracking-wide'>Blog Info</h3>
              <p className='border-t mt-2 border-black/10 dark:border-white/40'></p>
              <div className='mt-4 text-[16px] sm:text-[16px] tracking-wider leading-relaxed'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad fugiat inventore nisi, laborum magnam minima laudantium et beatae aut, quae dolores ea facere asperiores in tempore cumque! Sit, praesentium autem.</p><br></br>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, eveniet!</p><br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, perferendis officia. Excepturi a, minima ex quam rem tempore odit corrupti et mollitia quis, libero veniam inventore numquam nulla itaque atque voluptate ipsum aspernatur similique. Illo magnam error excepturi mollitia vero aperiam quo dolorum alias, corrupti, aut quos, aliquam assumenda.</p><br></br>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facere obcaecati debitis repudiandae rerum omnis dolor quaerat inventore maxime quae!</p><br></br>
              </div>
            </div>

            <div>
              <h2 className=' text-xl font-medium px-4 bg-[#97755A] text-white rounded py-2'>{blog.comment.length} Comments</h2>
              <div className='px-4 py-8 flex flex-col space-y-6'>
                {
                  blog.comment.map((comm, idx) => (
                    <div key={idx} className='flex  gap-4'>
                      <img src={comm.pic} className='h-14 w-14 object-cover rounded-full'></img>
                      <div className='mt-0'>
                        <p className='text-[18px] text-black/80 dark:text-white/80 font-semibold'>{comm.name}</p>
                        <p className='text-[13px] text-red-500 dark:text-red-400 font-medium mt-0 '>{comm.time}</p>
                        <p className='mt-2 text-[16px] text-black/60 dark:text-white/65 leading-relaxed tracking-wide w-full md:w-2/3'>{comm.com}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <div className=' w-full lg:w-4/12'>
            <Side id={parseInt(blog.id)}></Side>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;