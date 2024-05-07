'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';
import { navLinks } from '@/constants/constants';
import { Button } from './ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import { toast } from 'sonner';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useUser();
  console.log(user);
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
      toast.success('User logged in successfully 🎉');
    } else {
      setIsLoggedIn(false);
      toast.success('User logged out successfully 🎉');
    }
  }, [user]);

  return (
    <div className='flex flex-row items-center justify-between border-b-2 border-dotted m-4'>
      {/* logo + brand name */}
      <Link href='/' className='flex flex-row items-center justify-center mb-3'>
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
      <div className='flex flex-row items-center space-x-4'>
        <Button className=''>
          <Link href='/cart'>
            <h1>Cart</h1>
          </Link>
        </Button>
        {/* authentication */}
        <div>
          {isLoggedIn ? (
            <div className='flex items-center space-x-2'>
              <UserButton />
              <h1>{user?.fullName}</h1>
            </div>
          ) : (
            <div className='space-x-4'>
              <Button style={{ width: '6rem' }}>
                <Link href='/sign-in'>Sign In &rarr;</Link>
              </Button>
              <Button style={{ width: '6rem' }}>
                <Link href='/sign-up'>Sign Up &rarr;</Link>
              </Button>
            </div>
          )}
        </div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
