import React from 'react';
import { GiSpookyHouse } from "react-icons/gi";
import { BsHouseCheckFill } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaMobileScreenButton } from "react-icons/fa6";
import {motion} from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';
import { MediaQuery } from '../../hook/MediaQuery';

const Choose = [
  {
    icon: <BsHouseCheckFill />,
    title: 'Search Property',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi possimus consectetur? Provident quibusdam natus labore,',
  },
  {
    icon: <GiSpookyHouse />,
    title: 'Buy & Rent Modern Properties',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: <FaMoneyBillTrendUp />,
    title: 'Invest Property',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi possimus consectetur?',
  },
  {
    icon: <PiBuildingApartmentFill />,
    title: 'Post Properties.',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi possimus consectetur? Provident quibusdam natus labore,',
  },
  {
    icon: <FaMapLocationDot />,
    title: 'Property Locator',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi possimus consectetur?',
  },
  {
    icon: <FaMobileScreenButton />,
    title: 'Stated Apps',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi possimus consectetur? Provident quibusdam natus labore,',
  },
]

const Service = () => {
  return (
    <div className='bg-white dark:bg-black/80'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>
        <motion.h3
        variants={fadeIn("up", .15)}
                                  initial="hidden"
                                  whileInView={'show'}
                                  viewport={defaultViewport}
        className='text-center text-black/80 dark:text-[#97755A] tracking-wider font-bold text-3xl md:text-4xl uppercase'>Our Services</motion.h3>
        <motion.p
        variants={fadeIn("up", .25)}
                                  initial="hidden"
                                  whileInView={'show'}
                                  viewport={defaultViewport}
        className='text-[16px] tracking-wide mt-3 dark:text-white/90 text-black/70 mx-auto max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi possimus consectetur? Provident quibusdam natus labore, sapiente, voluptates, numquam vitae repellat assumenda inventore iusto non dicta in porro. Pariatur vitae molestias facilis quo reiciendis?</motion.p>

        <div className='mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 space-y-8'>
          {
            Choose.map((item, idx) => (
              <motion.div
              variants={fadeIn("up", .2)}
                                        initial="hidden"
                                        whileInView={'show'}
                                        viewport={defaultViewport}
              key={idx} className='text-black flex items-start gap-4'>
                <p className='mt-4 text-6xl text-[#97755A]'>{item.icon}</p>
                <div className='flex flex-col items-start'>
                  <p className='mt-2 dark:text-white/80 text-[24px] text-black/80 leading-tight font-medium'>{item.title}</p>
                  <p className='mt-2 text-black/70 tracking-wide dark:text-white/60'>{item.des}</p>
                </div>
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Service;