import React from 'react';
import { motion } from 'framer-motion';

const Hero1 = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };


  return (
    <>
      <div className='bg-hero1 h-[537px] bg-cover'>
        <motion.div
          className='flex items-center h-full px-[20%]'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className='flex'>
            <div className='flex flex-col bg-orange-500 py-6 duration-150 w-[420px] h-full p-12 text-white'>
              <h1 className='text-2xl drop-shadow	text-start uppercase font-bold'>Lorem ipsum dolor</h1>
              <h2 className='text-xl drop-shadow text-justify'>sit amet, consectetur adipisicing elit. Delectus ipsum voluptate odio rerum dignissimos.  Delectus ipsum voluptate odio </h2>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero1;
