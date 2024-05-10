'use client';
import { Card } from '@/components';
import { CDN_URL_UPDATED, RESTAURANT_MENU_API } from '@/constants/constants';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Page = ({ params }: { params: any }) => {
  const id = params.id;
  const [menuItems, setMenuItems] = useState<any>(null);

  useEffect(() => {
    fetchMenuData();
  }, [id]);

  const fetchMenuData = async () => {
    try {
      const response = await fetch(`${RESTAURANT_MENU_API}${id}`);
      console.log(`${RESTAURANT_MENU_API}${id}`);
      const responseData = await response.json();
      console.log(responseData);
      setMenuItems(responseData);
    } catch (error) {
      console.error('Error fetching menu data:', error);
    }
  };

  if (!menuItems) {
    return (
      <div>
        <Image
          src='/logo.png'
          width={55}
          height={55}
          alt='logo-image'
          className='h-full w-full object-cover animate-pulse'
        />
      </div>
    );
  }

  const cardData = [
    {
      title: 'Name',
      content: menuItems.data.cards[2].card.card.info.name,
    },
    {
      title: 'Address',
      content: menuItems.data.cards[2].card.card.info.labels[1].message,
    },
    {
      title: 'Opening Status',
      content: menuItems.data.cards[2].card.card.info.availability.opened
        ? 'Open'
        : 'Closed',
    },
    {
      title: 'Average Rating',
      content: menuItems.data.cards[2].card.card.info.avgRatingString,
    },
    {
      title: 'Cost for Two',
      content: menuItems.data.cards[2].card.card.info.costForTwoMessage,
    },
    {
      title: 'Cuisines',
      content: menuItems.data.cards[2].card.card.info.cuisines.join(', '),
    },
    {
      title: 'Delivery Fee',
      content: `${menuItems.data.cards[2].card.card.info.feeDetails.title} - ${menuItems.data.cards[2].card.card.info.feeDetails.message}`,
    },
    {
      title: 'Delivery Time',
      content: `${menuItems.data.cards[2].card.card.info.sla.deliveryTime} Minutes`,
    },
    {
      title: 'Range of Delivery Time',
      content: menuItems.data.cards[2].card.card.info.sla.slaString,
    },
    {
      title: 'Total Ratings',
      content: menuItems.data.cards[2].card.card.info.totalRatingsString,
    },
  ];

  return (
    <div>
      {/* header part */}
      <div>
        <div className='grid grid-cols-3 gap-6'>
          {/* Restaurant Information */}
          <div className='col-span-1 mx-4 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-gray-900 dark:text-gray-100'>
            <div className='flex items-center mb-4'>
              {menuItems?.data?.cards[2]?.card?.card?.info?.logo && (
                <Image
                  src={`${CDN_URL_UPDATED}/${menuItems?.data?.cards[2]?.card?.card?.info?.logo}`}
                  alt='restaurant-logo'
                  width={100}
                  height={100}
                  className='rounded-full'
                />
              )}
              <h1 className='text-4xl font-bold ml-4 tracking-tight'>
                {menuItems?.data?.cards[2]?.card?.card?.info?.name}
              </h1>
            </div>
            <Image
              src={`${CDN_URL_UPDATED}/${menuItems?.data?.cards[2]?.card?.card?.info?.cloudinaryImageId}`}
              alt='restaurant-image'
              width={600}
              height={400}
              className='w-full h-full object-cover rounded-lg shadow-md'
            />
          </div>

          {/* Menu Cards */}
          <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-2'>
            {cardData.map((card, index) => (
              <div
                key={index}
                className='bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6'
              >
                <h2 className='text-lg font-semibold mb-2'>{card.title}</h2>
                <p className='text-gray-700 dark:text-gray-300'>
                  {card.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* actual menu cards */}
      <div></div>
    </div>
  );
};

export default Page;
