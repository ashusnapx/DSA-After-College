'use client'
import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';

const RestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING'
      );
      const data = await response.json();
      const restaurants =
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurants) {
        setListOfRestaurants(restaurants);
      } else {
        throw new Error('No restaurants found');
      }
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='grid grid-cols-4 m-5'>
      {listOfRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant?.info?.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
