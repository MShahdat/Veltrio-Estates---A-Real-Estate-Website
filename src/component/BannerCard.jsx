import { Link } from "react-router-dom";
import Nav from "./Nav";
import { IoIosArrowForward, IoMdSad } from "react-icons/io";
import { motion } from 'framer-motion';
import { fadeIn, defaultViewport } from "../motion/Motion";
import { useState } from "react";
import { isFirstVisit } from "../motion/visitedComponents";


const BannerCard = (props) => {

    const [isAnimate] = useState(() => isFirstVisit('bannerCard'))
    return (
        <div className=' text-white'>
            <div className=''>
                <div className='relative'>
                    <img src={props.url}
                        className='w-screen h-[280px] md:h-[340px] xl:h-[400px] object-cover'
                    ></img>

                    <motion.div
                        variants={isAnimate ? fadeIn('up', 0.2) : undefined}
                        initial={isAnimate ? "hidden" : undefined}
                        whileInView={isAnimate ? 'show' : undefined}
                        viewport={defaultViewport}
                        className=' text-center absolute left-1/2 top-2/5 -translate-x-1/2 -translate-y-1/2'>
                        <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold text-center tracking-[2px]'>{props.page}</h2>
                    </motion.div>

                    {/* <motion.div
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={defaultViewport}
                        className="absolute left-1/2 bottom-4 -translate-x-1/2 whitespace-nowrap flex gap-0 bg-black/5 backdrop-blur px-4 py-1 rounded border border-white font-medium text-[12px] md:text-[16px]">
                        <Link to={'/'} className="flex items-center hover:text-[#97755A]">
                            <h3>Home</h3>
                            <IoIosArrowForward className="mt-0.5" />
                        </Link>
                        <div className="">
                            <h3>{props.page}</h3>
                        </div>
                    </motion.div> */}
                </div>
            </div>
        </div>
    );
};

export default BannerCard;