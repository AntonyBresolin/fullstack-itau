import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";

const Service = () => {
  return (
    <>
      <div className='px-[20%] py-24 flex flex-col'>
        <h1 className='text-5xl text-center font-normal'>Serviços</h1>
        <h2 className=' text-lg text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <div className='grid grid-cols-2 grid-rows-2 gap-2 mt-8'>
          <div className='flex'>
            <IoSettingsOutline size={5} className='mr-4 text-blue-400' />
            <div>
              <h1 className='text-xl'>{'Rhocus'}</h1>
              <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'}</p>
            </div>
          </div>
          <div className='flex'>
            <IoSettingsOutline size={5} className='mr-4 text-blue-400' />
            <div>
              <h1 className='text-xl'>{'Rhocus'}</h1>
              <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'}</p>
            </div>
          </div>
          <div className='flex'>
            <IoSettingsOutline size={5} className='mr-4 text-blue-400' />
            <div>
              <h1 className='text-xl'>{'Rhocus'}</h1>
              <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'}</p>
            </div>
          </div>
          <div className='flex'>
            <IoSettingsOutline  className='mr-4 text-blue-400 w-40' />
            <div>
              <h1 className='text-xl'>{'Rhocus'}</h1>
              <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.'}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
