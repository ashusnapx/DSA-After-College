'use client';
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

  return (
    <div>
      <div>
        {menuItems !== null ? (
          <div className='grid grid-cols-3'>
            <div className='col-span-1 mx-4 flex flex-col items-center justify-center bg-black/30 dark:bg-white p-4 rounded-2xl text-white dark:text-black light:bg-black'>
              <div className='flex items-center'>
                <Image
                  src={`${CDN_URL_UPDATED}/${menuItems.data.cards[2].card.card.info.logo}`}
                  alt='restaurant-logo'
                  width={100}
                  height={100}
                  className='rounded-full'
                />
                <h1 className='text-4xl font-bold tracking-tighest'>
                  {menuItems.data.cards[2].card.card.info.name}
                </h1>
              </div>
              <Image
                src={`${CDN_URL_UPDATED}/${menuItems.data.cards[2].card.card.info.cloudinaryImageId}`}
                alt='restaurant-logo'
                width={900}
                height={900}
                className='w-full h-full object-cover my-2 rounded-2xl'
              />
            </div>

            <div className='col-span-2 bg-black/30 dark:bg-white text-white dark:text-black rounded-2xl mx-4 grid grid-cols-3 gap-3 px-3 py-2'>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Name</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.name}
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Address</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.labels[1].message}
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Opening Status</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.availability.opened
                    ? 'Open'
                    : 'Closed'}
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Average Rating</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.avgRatingString}
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Cost for Two</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.costForTwoMessage}
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Cuisines</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.cuisines.join(', ')}
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Delivery Fee</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.feeDetails.title} -{' '}
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        menuItems.data.cards[2].card.card.info.feeDetails
                          .message,
                    }}
                  />
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Delivery Time</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.sla.deliveryTime}{' '}
                  Minutes
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>
                  Range of Delivery Time
                </h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.sla.slaString}
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Total Ratings</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.totalRatingsString}
                </p>
              </div>
            </div>

            {/* <div className='col-span-2 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 dark:text-black'>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Name</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.name}
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Address</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.labels[1].message}
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Opening Status</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.availability.opened
                    ? 'Open'
                    : 'Closed'}
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Average Rating</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.avgRatingString}
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Cost for Two</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.costForTwoMessage}
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Cuisines</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.cuisines.join(', ')}
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Delivery Fee</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.feeDetails.title} -{' '}
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        menuItems.data.cards[2].card.card.info.feeDetails
                          .message,
                    }}
                  />
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Delivery Time</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.sla.deliveryTime}{' '}
                  Minutes
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>
                  Range of Delivery Time
                </h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.sla.slaString}
                </p>
              </div>
              <div className='bg-white shadow-md rounded-md p-6'>
                <h2 className='text-lg font-semibold mb-2'>Total Ratings</h2>
                <p className='text-gray-600'>
                  {menuItems.data.cards[2].card.card.info.totalRatingsString}
                </p>
              </div>
            </div> */}
          </div>
        ) : (
          <>
            <Image
              src='/logo.png'
              width={55}
              height={55}
              alt='logo-image'
              className='h-full w-full object-cover animate-pulse'
            />
          </>
        )}
      </div>

      <div></div>
    </div>
  );
};

export default Page;
