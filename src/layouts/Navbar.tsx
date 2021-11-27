import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import ActionButton from '../components/ActionButton';

const NavBar: NextPage = () => {
  return (
    <div className='w-screen h-20 px-4 flex justify-center items-center border-b border-black bg-bkgrnd md:px-20 lg:px-40'>
      <div className='w-full h-full  max-w-6xl flex justify-between items-center'>
        <Link href='/' passHref>
          <p className='text-4xl font-poppins cursor-pointer'>Kolumn</p>
        </Link>
        <ActionButton
          text='Connect'
          clickHandler={() => console.log('Button clicked')}
        />
      </div>
    </div>
  );
};

export default NavBar;