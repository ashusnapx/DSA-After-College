import { CDN_URL_UPDATED } from '@/constants/constants';
import Image from 'next/image';

// Define the type for the 'restaurant' prop
interface Restaurant {
  info: {
    cloudinaryImageId: string;
    name: string;
    locality: string;
    costForTwo: number;
    avgRatingString: string;
  };
}

// Use the defined type for the 'restaurant' prop
const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div className='flex flex-col mb-5'>
      <Image
        src={`${CDN_URL_UPDATED}/${restaurant.info.cloudinaryImageId}`}
        width={300}
        height={400}
              alt='food-image'
              className='rounded-md mb-2 hover:opacity-70'
      />
      <h1>{restaurant.info.name}</h1>
      <p>{restaurant.info.locality}</p>
      <p>{restaurant.info.costForTwo}</p>
      <p>{restaurant.info.avgRatingString}</p>
    </div>
  );
};

export default RestaurantCard;
