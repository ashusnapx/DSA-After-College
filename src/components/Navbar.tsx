'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ModeToggle } from './ModeToggle';
import Link from 'next/link';
import { navLinks } from '@/constants/constants';
import { Button } from './ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import { toast } from 'sonner';
import { MenuSquareIcon, XSquareIcon } from 'lucide-react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const { user } = useUser();
  console.log(user);
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
      toast.success('User logged in successfully 🎉');
    } else {
      setIsLoggedIn(false);
      toast.success('Hope we will meet soon. Bye 👋');
    }
  }, [user]);

  const handleHamburger = () => {
    setIsHamburgerClicked(true);
  };
  const handleHamburgerClose = () => {
    setIsHamburgerClicked(false);
  };

  return (
    <nav className='p-3 flex flex-row items-center justify-between'>
      {/* logo + brand name */}{' '}
      <Link
        href='/'
        className='flex flex-row items-center justify-center mb-3 gap-2'
      >
        <Image
          src='/logo.png'
          className='object-cover max-w-16 max-h-16'
          width={100}
          height={100}
          alt='logo-image'
        />
        <div>
          <h1 className='text-4xl font-semibold tracking-tighter'>
            Fooder<sup>®</sup>
          </h1>{' '}
          <h1 className='text-gray-600'>By Ashutosh Kumar</h1>
        </div>
      </Link>
      {/* nav menu items */}
      <div className='hidden md:flex gap-12 text-xl'>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.linkRoute}
            className='font-display font-medium hover:text-red-700'
          >
            {link.linkName}
          </Link>
        ))}
      </div>
      {/* auth and light/dark mode toggler */}
      <div className='hidden md:block'>
        <div className='flex items-center gap-6'>
          {isLoggedIn ? (
            <div className='flex items-center space-x-2 text-xl'>
              <UserButton />
              <h1 className='tracking-tighter'>{user?.fullName}</h1>
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

          <ModeToggle />
        </div>
      </div>
      {/* hamburger icon */}
      <Button
        variant='link'
        className='p-3 md:hidden'
        onClick={handleHamburger}
      >
        <MenuSquareIcon className='text-gray-600' />
      </Button>
      {isHamburgerClicked ? (
        <div className='fixed z-10 md:hidden bg-white inset-0 dark:bg-black dark:text-white h-fit transition ease-in-out duration-300'>
          <div className='flex flex-row items-center justify-between'>
            <Link
              href='/'
              className='flex flex-row items-center justify-center gap-2 p-3'
            >
              <Image
                src='/logo.png'
                className='object-cover max-w-16 max-h-16'
                width={100}
                height={100}
                alt='logo-image'
              />
              <div>
                <h1 className='text-4xl font-semibold tracking-tighter'>
                  Fooder<sup>®</sup>
                </h1>{' '}
                <h1 className='text-gray-600'>By Ashutosh Kumar</h1>
              </div>
            </Link>

            <Button
              onClick={handleHamburgerClose}
              className='bg-white dark:bg-black  hover:bg-gray-300 p-4'
            >
              <XSquareIcon className='text-gray-600 dark:text-white' />
            </Button>
          </div>

          <div className='flex flex-col gap-2 p-3'>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.linkRoute}
                className='font-display font-medium text-black dark:text-white p-3 hover:bg-gray-100 dark:hover:bg-red-500 rounded-2xl'
              >
                {link.linkName}
              </Link>
            ))}

            <div className='flex items-center justify-between'>
              {isLoggedIn ? (
                <div className='flex items-center space-x-2 text-xl text-black dark:text-white p-3'>
                  <UserButton />
                  <h1 className='tracking-tighter'>{user?.fullName}</h1>
                </div>
              ) : (
                <div className='space-x-4 text-black'>
                  <Button style={{ width: '6rem' }}>
                    <Link href='/sign-in'>Sign In &rarr;</Link>
                  </Button>
                  <Button style={{ width: '6rem' }}>
                    <Link href='/sign-up'>Sign Up &rarr;</Link>
                  </Button>
                </div>
              )}

              <ModeToggle />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
