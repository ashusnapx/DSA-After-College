'use client';
import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { RESTAURANT_LIST_API } from '@/constants/constants';
import { toast } from 'sonner';
import { Button, Input } from './ui';
import Image from 'next/image';

const RestaurantList = () => {
  const [initialListOfRestaurants, setInitialListOfRestaurants] = useState<
    any[]
  >([]);
  const [listOfRestaurants, setListOfRestaurants] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch(RESTAURANT_LIST_API);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const restaurants =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      if (restaurants.length === 0) {
        throw new Error('No restaurants found');
      }
      setListOfRestaurants(restaurants);
      setInitialListOfRestaurants(restaurants);
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
      toast.error('Failed to fetch restaurant data');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterTopRatedRestaurants = () => {
    const filteredRestaurants = initialListOfRestaurants.filter(
      (res: any) => res?.info?.avgRating > 4
    );
    const sortedRestaurants = filteredRestaurants.sort(
      (a: any, b: any) => b.info.avgRating - a.info.avgRating
    );
    setListOfRestaurants(sortedRestaurants);
    toast.success('Top rated restaurants filtered.');
  };

  const filterFastestDeliveryRestaurants = () => {
    const sortedRestaurantsBasedOnDeliveryTime = [
      ...initialListOfRestaurants,
    ].sort(
      (a: any, b: any) =>
        a?.info?.sla?.deliveryTime - b?.info?.sla?.deliveryTime
    );
    setListOfRestaurants(sortedRestaurantsBasedOnDeliveryTime);
    toast.success('Fastest delivery restaurants filtered.');
  };

  const resetFilter = () => {
    setListOfRestaurants(initialListOfRestaurants);
    toast.success('Filter reset.');
  };

  const searchRestaurants = (query: string) => {
    const normalizedQuery = query.trim().toLowerCase();
    const filteredRestaurants = initialListOfRestaurants.filter(
      (restaurant: any) => {
        return (
          restaurant.info.name.toLowerCase().includes(normalizedQuery) ||
          restaurant.info.locality.toLowerCase().includes(normalizedQuery) ||
          restaurant.info.areaName.toLowerCase().includes(normalizedQuery) ||
          restaurant.info.cuisines.some((cuisine: string) =>
            cuisine.toLowerCase().includes(normalizedQuery)
          )
        );
      }
    );
    setListOfRestaurants(filteredRestaurants);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = event.target.value;
    if (query === '') {
      resetFilter();
    } else {
      searchRestaurants(query);
    }
  };

  return (
    <div className='mx-5'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <Input
          placeholder='Search for restaurants using name, area, locality or cuisine'
          onChange={handleSearchInputChange}
        />
        <div className='hidden md:flex items-center gap-4'>
          <Button onClick={filterTopRatedRestaurants}>
            Top rated restaurants
          </Button>
          <Button onClick={filterFastestDeliveryRestaurants}>
            Faster delivery restaurants
          </Button>
          <Button onClick={resetFilter}>Clear Filter</Button>{' '}
        </div>
        <div className='md:hidden flex justify-between flex-wrap gap-3'>
          <Button onClick={filterTopRatedRestaurants}>
            Top rated restaurants
          </Button>
          <Button onClick={filterFastestDeliveryRestaurants}>
            Faster delivery restaurants
          </Button>
          <Button onClick={resetFilter}>Clear Filter</Button>{' '}
        </div>
      </div>
      {listOfRestaurants.length === 0 ? (
        <div className='flex flex-col items-center justify-center mt-4'>
          <Image
            src='/no-food.gif'
            width={200}
            height={500}
            alt='No results found'
            className='w-100 h-100 object-contain mb-2'
          />
          <p className='text-gray-600 dark:text-gray-400'>
            No restaurants found for the searched query.
          </p>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-4 my-3 gap-3'>
          {listOfRestaurants.map((restaurant: any) => (
            <RestaurantCard
              key={restaurant?.info?.id}
              restaurant={restaurant}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
