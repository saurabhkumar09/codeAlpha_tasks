import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../Shared/Button';
import img from '../../assets/watch1.png';

const Offers = () => {
  // Create a ref to monitor when the section comes into view
  const ref = useRef(null);
  
  // useInView hook to detect when the element is in the viewport
  const isInView = useInView(ref, { once: true }); // 'once: true' ensures the animation runs only once

  // Define animation variants for text and image
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, rotate: 0 },
    visible: { opacity: 1, rotate: 360, transition: { duration: 3, ease: "easeInOut" } }
  };

  return (
    <div 
      ref={ref} // Bind the ref to the parent div
      className='w-[65%] h-[70vh] flex mx-auto px-[40px] py-[50px] mb-[100px] bg-gradient-to-r from-gray-100 to-gray-300'
    >
      {/* Left Section */}
      <motion.div
        className='flex-1 flex flex-col justify-center'
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation based on isInView state
        variants={textVariants} // Apply text animation variants
      >
        <h1 className='text-[#171717] text-[50px] font-semibold leading-tight'>Exclusive</h1>
        <h1 className='text-[#171717] text-[50px] font-semibold leading-tight'>Offers For You</h1>
        <p className='text-[#171717] text-[22px] font-semibold mt-4'>ONLY ON BEST SELLERS PRODUCTS</p>
        <Button text="Check now" bgColor="bg-primary" textColor="text-white" />
      </motion.div>

      {/* Right Section */}
      <motion.div
        className='flex-1 flex items-center justify-center'
        initial="hidden"
        animate={isInView ? "visible" : "hidden"} // Trigger animation based on isInView state
        variants={imageVariants} // Apply image rotation animation variants
      >
        <img src={img} alt="Watch Offer" className='w-auto h-auto' />
      </motion.div>
    </div>
  );
};

export default Offers;
