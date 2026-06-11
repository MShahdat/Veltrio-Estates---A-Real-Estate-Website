import React, { useState } from 'react';
import { MdDownloadDone } from "react-icons/md";
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';
import { isFirstVisit } from '../../motion/visitedComponents';


const About1 = () => {
  const ab = [
    {
      te: 'Placeat maxime animi minus',
    },
    {
      te: 'Dolore qui placeat maxime',
    },
    {
      te: 'Consectetur adipisicing',
    },
    {
      te: 'Lorem ipsum dolor',
    },
    {
      te: 'Placeat molestias animi',
    },
    {
      te: 'Dolore qui placeat maxime',
    },
  ]
  const [isAnimate] = useState(() => isFirstVisit('about1'))
  return (
    <div className='bg-white dark:bg-black/80'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 min:h-[600px] w-full gap-8'>
          <div className='h-full flex flex-col items-center'>
            <img src='https://images.unsplash.com/photo-1604062459109-fe36dde64999?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-[400px] md:h-[600px] w-full md:w-[90%] object-cover'></img>
          </div>
          <div className='mt-6 flex flex-col items-start text-black/60 w-[80%]'>
            <motion.h3
              variants={isAnimate ? fadeIn('up', 0.2) : undefined}
              initial={isAnimate ? "hidden" : undefined}
              whileInView={isAnimate ? 'show' : undefined}
              viewport={defaultViewport}
              className='text-3xl md:text-3xl xl:text-4xl font-bold text-[#97755A]'>We Are The Best RealEstate Company</motion.h3>
            <motion.div
              variants={isAnimate ? fadeIn('up', 0.3) : undefined}
              initial={isAnimate ? "hidden" : undefined}
              whileInView={isAnimate ? 'show' : undefined}
              viewport={defaultViewport}
            >
              <p className='text-[20px] mt-4 dark:text-white/80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint?</p>
              <p className='mt-6 dark:text-white/70 tracking-wide leading-relaxed '>Est qui eos quasi ratione nostrum excepturi id recusandae fugit omnis ullam pariatur itaque nisi voluptas impedit Quo suscipit omnis iste velit maxime.</p>
            </motion.div>

            <motion.div
              variants={isAnimate ? fadeIn('up', 0.3) : undefined}
              initial={isAnimate ? "hidden" : undefined}
              whileInView={isAnimate ? 'show' : undefined}
              viewport={defaultViewport}
              className='mt-6 flex flex-col gap-1'>
              {
                ab.map((a, idx) => (
                  <div key={idx} className='flex items-center gap-3'>
                    <MdDownloadDone className='text-[#97755A] text-[20px]' />
                    <p className='text-[16px] dark:text-white/70 tracking-wide'>{a.te}</p>
                  </div>
                ))
              }
            </motion.div>
            <motion.button
              variants={isAnimate ? fadeIn('up', 0.3) : undefined}
              initial={isAnimate ? "hidden" : undefined}
              whileInView={isAnimate ? 'show' : undefined}
              viewport={defaultViewport}
              className='mt-8 xl:mt-12 bg-[#97755A] text-white px-4 py-1.5 rounded-full'>
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;