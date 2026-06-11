import React, { useState } from 'react';
import { FaMedal } from "react-icons/fa";
import { MdEmail, MdAddCall } from "react-icons/md";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';
import { MediaQuery } from '../../hook/MediaQuery';
import { isFirstVisit } from '../../motion/visitedComponents';


const agent = [
  {
    url: 'https://images.unsplash.com/photo-1637542010084-3b4d4133ddfa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Ben Thompson',
    des: 'Real Estate Agent',
    phone: '+45 677 8993000 223',
    email: 'office@templete.com'
  },
  {
    url: 'https://images.unsplash.com/photo-1697731367218-5311c069484e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Ben Thompson',
    des: 'Real Estate Agent',
    phone: '+45 677 8993000 223',
    email: 'office@templete.com'
  },
  {
    url: 'https://images.unsplash.com/photo-1557763686-26805501db4a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Ben Thompson',
    des: 'Real Estate Agent',
    phone: '+45 677 8993000 223',
    email: 'office@templete.com'
  },
]




const Agent = () => {
  const isMobile = MediaQuery("(max-width: 639px)");
  const isTab = MediaQuery("(min-width: 640px) and (max-width: 767px)");
  const modVal = isTab ? 2 : 3;

  const [isAnimate] = useState(() => isFirstVisit('Agent'))
  return (
    <div className='bg-white dark:bg-black/80'>
      <div className='max-w-5xl px-4 md:px-8 py-16 mx-auto'>
        <motion.h3
          variants={isAnimate ? fadeIn("up", .15) : undefined}
          initial={isAnimate ? "hidden" : undefined}
          whileInView={isAnimate ? 'show' : undefined}
          viewport={defaultViewport}
          className='text-center text-black/80 dark:text-[#97755A] tracking-wider font-bold text-3xl md:text-4xl uppercase'>Real State Agents</motion.h3>
        <motion.p
          variants={isAnimate ? fadeIn("up", .25) : undefined}
          initial={isAnimate ? "hidden" : undefined}
          whileInView={isAnimate ? 'show' : undefined}
          viewport={defaultViewport}
          className='text-[16px] tracking-wide mt-3 dark:text-white/90 text-black/70 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore.</motion.p>
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            agent.map((ag, idx) => {
              const delay = isMobile ? 0.2 : (idx % modVal) * 0.25;
              return (
                <motion.div
                  variants={isAnimate ? fadeIn("up", delay) : undefined}
                  initial={isAnimate ? "hidden" : undefined}
                  whileInView={isAnimate ? 'show' : undefined}
                  viewport={defaultViewport}

                  key={idx} className=' border
              border-black/5 flex flex-col items-center group transition-all duration-500 ease-in-out'>
                  <div className='w-full group-hover:-translate-y-[10px] duration-500'>
                    <div className='relative w-full h-96'>
                      <div className='absolute opacity-0 group-hover:opacity-100 duration-700 bottom-0 flex flex-col px-3 py-3 gap-4 bg-[#97755A]'>
                        <a href='#'>
                          <FaFacebook className='text-[22px]' />
                        </a>
                        <a href='#'>
                          <FaTwitter className='text-[22px]' />
                        </a>
                        <a href='#'>
                          <LuInstagram className='text-[22px]' />
                        </a>
                        <a href='#'>
                          <FaLinkedin className='text-[22px]' />
                        </a>
                      </div>
                      <img src={ag.url} className='w-full h-full object-cover'></img>
                    </div>
                    <div className='flex flex-col items-center bg-white w-full'>
                      <FaMedal className='mt-4 text-[#97755A] text-3xl' />
                      <p className='mt-3 uppercase text-black/80 text-2xl md:text-3xl font-medium'>{ag.name} </p>
                      <p className='mt-1 text-[#97755A] font-medium text-[16px]'>{ag.des}</p>
                      <div className='py-6'>
                        <div className='flex items-center  gap-2'>
                          <MdAddCall className='text-[#97755A] text-[20px]' />
                          <p className='text-black'>{ag.phone}</p>
                        </div>
                        <div className='flex items-center gap-2 mt-1'>
                          <MdEmail className='text-[#97755A] text-[20px]' />
                          <p className='text-black'>{ag.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Agent;