import React, { useState } from 'react';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa";
import { properties } from '../../../public/properties';
import { Link } from 'react-router-dom';
const Sidebar = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sub, setSub] = useState('')
  const [msg, setMsg] = useState('')

  const formhandle = (e) => {
    e.preventDefault()
    console.log("name", name)
    console.log("email", email)
    console.log("subject", sub)
    console.log("message", msg)

    // alert('Your message has been submitted')
    setName('')
    setEmail('')
    setSub('')
    setMsg('')

  }

  const categories = [...new Set(properties.map(item => item.category))];
  // console.log(categories);

  const categoryCount = properties.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc
  }, {})

  // console.log(categoryCount)

  return (
    <div className='grid grid-cols-1 gap-6'>
      <div className='border bg-white border-black/10 dark:border-white/25 text-black/80 px-8 py-6 w-full'>
        <h3 className='text-xl font-medium'>Contact Agent</h3>
        <form onSubmit={formhandle} className='w-full mt-4'>
          <label className='mt-0 block text-[17px] text-black/80'>Full Name</label>
          <input onChange={(e) => setName(e.target.value)} type='text' value={name} placeholder='Full Name' required className='mt-0.5 outline-none text-[16px] border border-black/20 text-black rounded px-3 py-2 w-full'></input>

          <label className='mt-3 block text-[17px] text-black/80'>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} type='email' value={email} placeholder='example@gmail.com' required className='mt-0 outline-none text-[16px] border border-black/20 text-black rounded px-3 py-2.5 w-full'></input>

          <label className='mt-3 block text-[17px] text-black/80'>Phone</label>
          <input onChange={(e) => setSub(e.target.value)} type='text' value={sub} placeholder='Phone' required className='mt-0.5 outline-none text-[16px] border border-black/20 text-black rounded px-3 py-2.5 w-full'></input>

          <label className='mt-3 block text-[17] text-black/80'>Message</label>
          <textarea onChange={(e) => setMsg(e.target.value)} type='text' rows={3} value={msg} placeholder='Write message' required className='mt-0.5 outline-none text-[16px] border border-black/20 text-black rounded px-3 py-2.5 w-full'></textarea>

          <button type='submit' className='bg-[#97755A] text-center text-white font-semibold px-4 rounded mt-2 py-1'>Submit</button>
        </form>
      </div>

      <div className='border bg-white border-black/10 dark:border-white/25 text-black/80 px-8 py-6 w-full'>
        {/* <h3 className='text-xl'>Contact Agent</h3> */}
        <div className='flex items-start gap-2'>
          <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D' className='w-18 h-18 rounded-full object-cover'></img>
          <div className='flex flex-col mt-1 items-start'>
            <p className='text-lg font-medium'>Kyla Stewart</p>
            <p className='text-black/60'>RealEstate Agent</p>
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

    </div>
  );
};

export default Sidebar;