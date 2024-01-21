import React from 'react';
import Logo from '../../assets/img/cubo-logo.png';

const HeaderLp = () => {
  return (
    <>
      <div className='flex justify-between px-[10%] py-5'>
        <img src={Logo} />
        <div className='flex uppercase select-none items-center'>
          <a className='mr-8 bg-orange-500 px-5 py-2 rounded-sm text-white' href='#'>home</a>
          <a className='mr-8'>menu 1</a>
          <a className='mr-8'>menu 2</a>
          <a className='mr-8'>menu 3</a>
        </div>
      </div>
    </>
  );
};

export default HeaderLp;
