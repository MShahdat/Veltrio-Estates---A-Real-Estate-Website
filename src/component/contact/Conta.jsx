import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from '../../motion/Motion';

const contact = [
  {
    item: 'Address',
    value: '15/2 Block-A Gulshan, Dhaka-1200'
  },
  {
    item: 'Phone',
    value: '+880185374041'
  },
  {
    item: 'Email',
    value: 'mdshahdat2504@gmail.com'
  },
  {
    item: 'Website',
    value: 'www.website.com'
  },
]

const Conta = () => {

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

  return (
    <div className='bg-white dark:bg-black/80'>
      <div className='max-w-7xl px-4 py-16 mx-auto'>
        <h3 className='text-center text-black/80 dark:text-[#97755A] tracking-wider font-bold text-3xl md:text-4xl uppercase'>Get in Touch</h3>
        <p className='text-[16px] tracking-wide mt-3 dark:text-white/90 text-black/70 max-w-3xl mx-auto text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatum quisquam similique temporibus dolorum nulla repudiandae, sit eligendi eum provident magni quasi voluptate assumenda!</p>

        <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white'>
          {
            contact.map((ite, idx) => (
              <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={defaultViewport}
                key={idx} className='h-40 flex px-4 items-center justify-center w-full rounded bg-[#97755A]'>
                <p className='text-xl text-center'> {ite.item}: <span className='text-lg'>{ite.value}</span></p>
              </motion.div>
            ))
          }


        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={defaultViewport}
            className="w-full h-[470px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217.03611072465634!2d90.49947640059956!3d23.69947466809364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b6ef045b692f%3A0x72ac0cae5d660029!2sMFXX%2BRP4%2C%20Narayanganj%201361!5e1!3m2!1sen!2sbd!4v1764966094488!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={defaultViewport}
            className='mt-0 border dark:border-white/30 border-black/10 rounded'>
            <form onSubmit={formhandle} className='w-full p-3'>
              <label className='mt-0 block text-lg text-black/80 dark:text-white/80'>Full Name</label>
              <input onChange={(e) => setName(e.target.value)} type='text' value={name} placeholder='Full Name' required className='mt-0 outline-none text-[17px] bg-gray-100 text-black rounded px-3 py-2.5 w-full'></input>

              <label className='mt-3 block text-lg text-black/80 dark:text-white/80'>Email</label>
              <input onChange={(e) => setEmail(e.target.value)} type='email' value={email} placeholder='example@gmail.com' required className='mt-0 outline-none text-[17px] bg-gray-100 text-black rounded px-3 py-2.5 w-full'></input>

              <label className='mt-3 block text-lg text-black/80 dark:text-white/80'>Subject</label>
              <input onChange={(e) => setSub(e.target.value)} type='text' value={sub} placeholder='Subject' required className='mt-0 outline-none text-[17px] bg-gray-100 text-black rounded px-3 py-2.5 w-full'></input>

              <label className='mt-3 block text-lg text-black/80 dark:text-white/80'>Message</label>
              <textarea onChange={(e) => setMsg(e.target.value)} type='text' rows={3} value={msg} placeholder='Write message' required className='mt-0 outline-none text-[17px] bg-gray-100 text-black rounded px-3 py-2.5 w-full'></textarea>

              <button type='submit' className='bg-[#97755A] w-2/9 text-center text-white font-bold text-lg px-4 rounded mt-2 py-1.5'>Submit</button>

            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Conta;