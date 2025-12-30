import React, { useContext, useEffect } from 'react';
import { dataContext } from '../../context/Context';
import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { properties } from '../../../public/properties';


const Gallary = () => {
  const [
    open,
    setOpen,
    gallery,
    setGallery,
    imgIdx,
    setImgIdx,
    urlIdx,
    setUrlIdx,
  ] = useContext(dataContext)

  useEffect (() => {
    const handleKey = (e) => {
      if(!gallery) return

      if(e.key === 'Escape'){
        setGallery(false)
      }else if(e.key === 'ArrowLeft' && imgIdx > 0){
        setImgIdx(prev => prev - 1 )
      }else if(e.key === 'ArrowRight' && imgIdx < propertImg[0].url.length - 1 ){
        setImgIdx(prev => prev + 1)
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [gallery, imgIdx])

  const propertImg = properties.filter((item) => item.id === urlIdx)
  // console.log('images', propertImg[0]?.url);
  return (
    <div
      onClick={() => setGallery(false)}
      className=' bg-black/40 backdrop-blur-lg h-screen w-screen fixed inset-0 z-50 flex flex-col items-center justify-center hover:cursor-zoom-out'>
        <button onClick={(e) => { e.stopPropagation(); setGallery(false); }}
          className='absolute top-4 md:top-12 right-4 lg:right-12 text-white'>
          <ImCross className=' text-[20px]' />
        </button>
        
        
      <div onClick={(e) => e.stopPropagation()}
        className='h-[30vh] sm:h-[50vh]  lg:h-[70vh] w-[85vw] lg:w-[60vw] rounded relative'>
          {
          imgIdx < propertImg[0].url.length - 1 &&
          <button onClick={(e) => { e.stopPropagation(); setImgIdx(prev => prev + 1) }}
          className='absolute top-1/2 -right-6 sm:-right-8 text-white'>
          <FaArrowRight className=' text-[20px]' />
        </button>
        }
        {
          imgIdx > 0 &&
          <button onClick={(e) => { e.stopPropagation(); setImgIdx(prev =>  prev - 1 )}}
          className='absolute top-1/2 -left-6 sm:-left-8 text-white'>
          <FaArrowLeft className=' text-[20px]' />
        </button>
        }
          <div className='absolute left-1/2 -translate-x-1/2 -bottom-6'>
          <p>{imgIdx + 1}/{propertImg[0].url.length}</p>
        </div>
        <img src={propertImg[0]?.url[imgIdx]?.image} className='w-full h-full object-cover rounded'></img>
      </div>
    </div>
  );
};

export default Gallary;