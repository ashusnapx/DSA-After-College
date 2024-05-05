import Image from 'next/image';
import React from 'react';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';
import { navLinks } from '@/constants/constants';
import { ShoppingCartIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-between border-b-2 border-dotted m-4'>
      {/* logo + brand name */}
      <Link href='/' className='flex flex-row items-center justify-center mb-2'>
        <Image src='/logo.png' width={55} height={55} alt='logo-image' />
        <h1 className='text-2xl mx-2 font-semibold'>Fooder</h1>
      </Link>

      {/* nav links + routes */}
      <div className='space-x-9 text-xl font-extralight'>
        {navLinks.map((link, index) => (
          <Link key={index} href={link.linkRoute}>
            {link.linkName}
          </Link>
        ))}
      </div>

      {/* light/dark mode toggle button */}
      <div className='flex flex-row items-center space-x-6'>
        <Link href='/cart'>
          <ShoppingCartIcon />
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
