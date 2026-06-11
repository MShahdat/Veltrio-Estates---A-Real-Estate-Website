import React, { useState, useEffect, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { dataContext } from '../context/Context';
import { FaBookReader } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { IoMoon, IoMoonSharp } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";
import { BsFillBuildingsFill } from "react-icons/bs";

const Nav = () => {
  const option = [
    {
      icon: <IoIosSunny className='text-[18px]' />,
      name: 'light',
      lavel: 'Light',
    },
    {
      icon: <IoMoon className='text-[18px]' />,
      name: 'dark',
      lavel: 'Dark',
    },
    {
      icon: <FiMonitor className='text-[18px]' />,
      name: 'system',
      lavel: 'System',
    }
  ]

  const [open, setOpen] = useContext(dataContext);
  const [facilityOpen, setFacilityOpen] = useState(false);
  const [sideTop, setsideTop] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'system'
  )

  const getThemeIcon = () => {
    if (theme === 'light') return <IoIosSunny className='text-[18px]' />
    if (theme === 'dark') return <IoMoonSharp className='text-[18px]' />
    return <FiMonitor className='text-[18px]' />
  }

  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    const handleSystemTheme = () => {
      if (darkQuery.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    if (theme === 'system') {
      handleSystemTheme();
      localStorage.removeItem('theme');
      darkQuery.addEventListener('change', handleSystemTheme);

      return () => {
        darkQuery.removeEventListener('change', handleSystemTheme);
      }
    }
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark')
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        setsideTop(true);
      } else {
        setsideTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const navitem = [
    { path: '/', link: 'Home' },
    { path: '/about', link: 'About' },
    { path: '/properties', link: 'Properties' },
    {
      path: '/agent',
      link: 'Agent',
      children: [
        { path: '/agent', link: 'Agent' },
        { path: '/services', link: 'Services' },

        { path: '/testimonials', link: 'Testimonials' },
      ]
    },
    { path: '/blogs', link: 'Blogs' },
    // { path: '/events', link: 'Events' },
    { path: '/contact', link: 'Contact' },
  ]


  return (
    <div className={` bg-black text-white sticky left-0 top-0 z-50`}>
      <nav
        className='max-w-7xl px-4 py-4 mx-auto flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div onClick={() => {
            setOpen(!open)
          }} className={`block md:hidden text-white/70 border-1 border-white/30 rounded-md px-2 py-0.5`}>
            {open ? <RxCross2 className='size-6 md:size-8' /> : <IoMdMenu className='size-6 md:size-8' />}
          </div>
          <Link to={'/'} className='text-xl sm:text-2xl lg:text-3xl font-bold uppercase'>
            <div className='flex gap-1 items-center text-[#97755A]'>
              <BsFillBuildingsFill className='size-6 sm:size-8 font-bold' />
              <h3 className='tracking-wide flex flex-col leading-tight'>Veltrio <span className='text-[10px] sm:text-[12px] px-1'>Estates</span></h3>
            </div>
          </Link>
        </div>

        <div className='flex items-center gap-3 lg:gap-6'>
          {navitem.map((item, idx) => {
            if (item.children) {
              return (
                <div key={idx} className='relative group hidden md:block'>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-0.5 text-[16px] font-semibold tracking-[1px] 
            ${isActive ? 'text-[#97755A] font-bold underline' : ''}`
                    }
                  >
                    <h2>{item.link}</h2>
                    <IoIosArrowDown className='mt-1 size-6' />
                  </NavLink>

                  {/* Dropdown */}
                  <div className='absolute left-0 top-full bg-white dark:bg-black  shadow-md rounded dark:border border-white/20
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible
                       transition-all duration-300 w-40'>
                    {item.children.map((child, cidx) => (
                      <NavLink
                        key={cidx}
                        to={child.path}
                        className='block px-4 py-2 text-[16px] font-medium hover:text-[#97755A] hover:bg-gray-100 text-black dark:text-[#97755A]'
                      >
                        {child.link}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )
            }

            return (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) =>
                  `hidden md:block text-[16px] font-semibold tracking-[1px] 
        ${isActive ? 'text-[#97755A] font-bold underline' : ''}`
                }
              >
                {item.link}
              </NavLink>
            )
          })}

        </div>

        <div className=''>
          <div className='flex items-center gap-1'>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1 min-h-0 h-[32px] bg-black px-2 text-[15px] border border-white/30">{getThemeIcon()} Theme</div>
              <ul tabIndex="-1" className="dropdown-content menu bg-black text-[14px] rounded-box z-1 w-36 p-2 shadow">
                {
                  option.map((item, idx) => (
                    <li key={idx} className='text-white'>
                      <a onClick={() => {
                        setTheme(item.name)
                      }}>
                        {item.icon} {item.lavel}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div onClick={() => {
            }} className='px-3 lg:px-4 py-1 text-[16px] bg-[#97755A]  text-white cursor-pointer font-semibold rounded-full hidden md:block '>
              <div className='flex items-center justify-center gap-0.5 lg:gap-1'>
                <h3>Join</h3>
                <IoMdArrowRoundForward className='mt-0.5' />
              </div>
            </div>


          </div>
        </div>

      </nav>

      {/* Mobile menu */}
      <div className={` w-1/2 sm:w-1/3 fixed ${sideTop ? 'top-19' : ''} left-0  md:hidden bg-white dark:bg-black text-black/80 dark:text-white shadow-2xl px-4 transform transition-transform duration-500 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='flex flex-col gap-4 sm:px-4 mt-0 pt-4 pb-8  '>
          {navitem.map((item, idx) => {
            if (item.children) {
              return (
                <div key={idx}>

                  <button
                    onClick={() => setFacilityOpen(!facilityOpen)}
                    className='text-[17px] font-semibold w-full text-left flex gap-1 items-center hover:text-[#97755A] hover:scale-101 duration-500 transform'
                  >
                    {item.link}
                    <div>
                      {facilityOpen ? <IoIosArrowUp className='size-6 mt-0.5' /> : <IoIosArrowDown className='size-6 mt-0.5' />}
                    </div>
                  </button>


                  {facilityOpen && (
                    <div className='bg-white dark:bg-black dark:border dark:border-white/20 rounded shadow flex flex-col py-2 gap-0'>
                      {item.children.map((child, cidx) => (
                        <Link
                          key={cidx}
                          to={child.path}
                          onClick={() => setOpen(false)}
                          className='hover:scale-101 duration-500 hover:text-[#97755A] transform text-[17px] text-black/70 dark:text-white font-medium px-4 py-1'
                        >
                          {child.link}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={idx}
                to={item.path}
                onClick={() => setOpen(false)}
                className='text-[17px] hover:scale-101 duration-500 hover:text-[#97755A] transform font-semibold'
              >
                {item.link}
              </Link>
            );
          })}


          <div onClick={() => {
            setOpen(!open)
          }} className='cursor-pointer text-center text-[17px] py-1.5 bg-[#97755A] text-white font-semibold rounded w-full '>
            <div className='flex items-center justify-center gap-1'>
              <h3>Join Us</h3>
              <IoMdArrowRoundForward />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Nav;
