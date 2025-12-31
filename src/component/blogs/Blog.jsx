import React from 'react';
import { MdOutlineComment } from "react-icons/md";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';
import { MediaQuery } from '../../hook/MediaQuery';
import { blogs } from '../../../public/blog';

const Blog = () => {

  const isMobile = MediaQuery("(max-width: 639px)");
  const isTab = MediaQuery("(min-width: 640px) and (max-width: 767px)");
  const modVal = isTab ? 2 : 3;
  
  // console.log(blogs[0].comment.length)

  return (
    <div className='bg-white dark:bg-black dark:text-white'>
      <div className='max-w-6xl px-4 py-16 mx-auto'>
        <motion.h2
          variants={fadeIn("up", .2)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}
          className='text-center text-black/80 dark:text-[#97755A] tracking-wider font-bold text-3xl md:text-4xl uppercase'>Our Blogs</motion.h2>
        <motion.p
          variants={fadeIn("up", .3)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}
          className='text-[16px] tracking-wide mt-3 max-w-3xl mx-auto dark:text-white/90 text-black/70 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt dolores at tempore laborum accusantium quos ea excepturi deserunt quam maiores.</motion.p>
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-4'>
          {
            blogs.map((item, idx) => {
              const delay = isMobile ? 0.15 : (idx % modVal) * 0.25;
              return (
                <motion.div
                  variants={fadeIn("up", delay)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={defaultViewport}
                  key={idx}
                  className='h-90 relative bg-white shadow-lg rounded-xl hover:scale-103 overflow-hidden duration-500 transform'
                >
                  <Link to={`/blogs/${item.id}`} className=''>
                    <img src={item.url} className='h-44 w-full object-cover rounded-xl'></img>

                    <div className='px-2 mt-2'>
                      <p className='text-[#97755A] text-xs font-medium'>{item.tag}</p>
                      <h3 className='mt-2 text-lg text-black/95 font-medium leading-tight line-clamp-1'>{item.title}</h3>
                      <p className='mt-2 line-clamp-2 text-sm text-gray-500'>{item.des}</p>
                      <div className='absolute bottom-2 left-2 right-4'>
                        <div className=' flex justify-between items-center'>
                          <div className='flex items-center gap-4 mt-4 pb-4 '>
                            <img src={item.profile} className='h-10 w-10 mt-1 rounded-full object-cover '></img>
                            <div className='flex flex-col leading-tight'>
                              <p className='text-md text-black/95 font-semibold'>{item.author}</p>
                              <p className='text-xs font-semibold text-gray-600'>{item.folwars} followers</p>
                            </div>
                          </div>

                          <div className='mt-4 flex text-black/70 items-center gap-1'>
                            <MdOutlineComment className='text-xl' />
                            <p className='font-medium'>{item.comment.length}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })
          }
        </div>

      </div>
    </div>
  );
};

export default Blog;