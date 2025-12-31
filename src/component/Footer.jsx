import React, { useState } from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../motion/Motion';

const gallery = [
  {
    url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1563037413-199e230cfd9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1717167398817-121e3c283dbb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1747371476846-1af8fbc9f3c3?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]
const Footer = () => {

  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email)
    toast.success('Thans for your support!')
    setEmail('')
  }

  return (
    <div className='bg-[#010102] text-white'>
      <div className='max-w-7xl px-4 py-8 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}
        >
          <h3 className='mt-2 md:mt-4 text-xl uppercase text-white font-bold tracking-widest'>Get in Touch</h3>

          <div className='mt-4 text-white/80 flex flex-col gap-2'>
            <div className='flex items-center gap-1'>
              <FaLocationDot />
              <p>15/2 Block-A Gulshan, Dhaka-1200</p>
            </div>
            <div className='flex items-center gap-1'>
              <MdAddCall />
              <p>+8801885374041</p>
            </div>
            <div className='flex items-center gap-1'>
              <MdEmail />
              <p>+mdshahdat2504@gmail.com</p>
            </div>
          </div>
          <div className='flex gap-2 mt-4'>
            <a href='https://x.com/'><FaTwitter className='size-8 rounded-full bg-[#7b5e46] px-1.5 py-1.5' /></a>
            <a href='https://www.facebook.com/'><FaFacebook className='size-8 rounded-full bg-[#7b5e46] px-1.5 py-1.5' /></a>
            <a href='https://www.instagram.com/'><LuInstagram className='size-8 rounded-full bg-[#7b5e46] px-1.5 py-1.5' /></a>
            <a href='https://www.instagram.com/'><IoLogoYoutube className='size-8 rounded-full bg-[#7b5e46] px-1.5 py-1.5' /></a>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.35)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}
        >
          <h1 className='mt-4 text-xl uppercase text-white font-bold tracking-widest'>Quick Access</h1>
          <div className='mt-4 flex flex-col text-white/80 gap-1 tracking-wide'>
            <Link to={'/about'}>About Us</Link>
            <Link to={'/agent'}>Agent</Link>
            <Link to={'/blogs'}>Blogs</Link>
            <Link to={'/services'}>Services</Link>
            <Link to={'/'}>Terms & Conditions</Link>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}
        >
          <h2 className='mt-4 text-xl uppercase text-white font-bold tracking-widest'>Photo Gallery</h2>
          <div className='mt-4 lg:mt-8 grid grid-cols-3 gap-0'>
            {
              gallery.map((item, idx) => (
                <img key={idx} className='h-24 w-full object-cover' src={item.url}></img>
              ))
            }
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.65)}
          initial="hidden"
          whileInView={'show'}
          viewport={defaultViewport}

        >
          <h2 className='mt-4 text-xl uppercase text-white font-bold tracking-widest'>Newsletter</h2>
          <p className='mt-4 lg:mt-8 text-white/78 text-[16px] leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, harum?</p>
          <form onSubmit={handleSubmit} className='mt-4 lg:mt-4 flex flex-col gap-2'>
            <input onChange={(e) => setEmail(e.target.value)} type='email' value={email} placeholder='Email...' required className='bg-white text-black/70 w-full text-[16px] font-medium px-4 py-2 rounded shadow-2xl outline-none'></input>
            <button type='submit' className='bg-[#97755A] text-center py-1.5 font-bold text-[16px] rounded w-full'>Subscribe</button>
          </form>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={defaultViewport}
        className='py-4 px-4 text-white/80 bg-[#624b38] text-center'>
        Copyright ©2025 All rights reserved. This template is made by Shahdat
      </motion.div>
    </div>
  );
};

export default Footer;