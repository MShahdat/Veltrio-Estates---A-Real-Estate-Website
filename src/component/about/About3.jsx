import React from 'react';
import { GiSpookyHouse } from "react-icons/gi";
import { FaUsersGear } from "react-icons/fa6";
import { GiCctvCamera } from "react-icons/gi";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';


const Choose = [
  {
    icon: <GiSpookyHouse />,
    title: 'Buy & Rent Modern Properties',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi possimus consectetur? Provident quibusdam natus labore,',
  },
  {
    icon: <FaUsersGear />,
    title: 'We Have Agents With Experience',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    icon: <GiCctvCamera />,
    title: 'Security Priority',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi possimus consectetur?',
  },
  {
    icon: <FaMoneyCheckDollar />,
    title: 'Make Investment.',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi possimus consectetur? Provident quibusdam natus labore,',
  },
]

const About3 = () => {
  return (
    <div className='bg-white dark:bg-black/80'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>
        <motion.h3
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}
          className='text-center text-black/80 dark:text-[#97755A] tracking-wider font-bold text-3xl md:text-4xl uppercase'>Why Choose Us?</motion.h3>
        <motion.p
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}
          className='text-[16px] tracking-wide mt-3 dark:text-white/90 text-black/70 mx-auto max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi possimus consectetur? Provident quibusdam natus labore, sapiente, voluptates, numquam vitae repellat assumenda inventore iusto non dicta in porro. Pariatur vitae molestias facilis quo reiciendis?</motion.p>

        <div className='mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 space-y-8'>
          {
            Choose.map((item, idx) => (
              <motion.div
                variants={fadeIn("up", .2)}
                initial="hidden"
                whileInView={'show'}
                viewport={defaultViewport}
                key={idx} className='text-black flex flex-col items-center'>
                <p className='text-6xl text-[#97755A]'>{item.icon}</p>
                <p className='text-center mt-2 dark:text-white/80 text-[24px] text-black/80 leading-tight font-medium'>{item.title}</p>
                <p className='mt-2 text-black/70 tracking-wide dark:text-white/60 text-center'>{item.des}</p>
              </motion.div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default About3;