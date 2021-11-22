import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import ActionButton from '../components/ActionButton';

const NavBar: NextPage = () => {
  return (
    <div className='w-screen h-20 flex justify-between items-center px-80 border-b border-black bg-bkgrnd'>
      <Link href='/' passHref>
        <p className='text-4xl font-poppins cursor-pointer'>Kolumn</p>
      </Link>
      <ActionButton
        text='Connect'
        clickHandler={() => console.log('Button clicked')}
      />
    </div>
  );
};

export default NavBar;
