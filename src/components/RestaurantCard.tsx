import { CDN_URL_UPDATED } from '@/constants/constants';
import Image from 'next/image';
import Link from 'next/link';

interface Restaurant {
  info: {
    id: string;
    cloudinaryImageId: string;
    name: string;
    locality: string;
    areaName: string;
    costForTwo: string;
    cuisines: string[];
    avgRatingString: string;
    totalRatingsString: string;
    sla: {
      slaString: string;
      lastMileTravelString: string;
    };
  };
}

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <Link href={`/restaurant-menu/${restaurant.info.id}`}>
      <div className='flex flex-col items-start border border-gray-600 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:border-black dark:hover:border-slate-200 hover:cursor-pointer'>
        <div className='w-full h-60 overflow-hidden'>
          <Image
            src={`${CDN_URL_UPDATED}/${restaurant.info.cloudinaryImageId}`}
            width={300}
            height={400}
            alt='food-image'
            className='object-cover w-full h-full'
            loading='lazy'
          />
        </div>
        <div className='p-4'>
          <h1 className='text-2xl font-semibold mb-2 border-b-2 border-dashed tracking-tighter'>
            {restaurant.info.name} &rarr;
          </h1>
          <p className='mb-1'>
            <span className='font-semibold italic'> Address : </span>
            {restaurant.info.locality}, {restaurant.info.areaName}
          </p>
          <p className=' mb-1'>
            <span className='font-semibold italic'> Cost For Two : </span>
            {restaurant.info.costForTwo}
          </p>
          <p className='mb-1'>
            <span className='font-semibold italic'>Cuisines : </span>
            {restaurant.info.cuisines.join(', ')}
          </p>
          <p className='mb-1'>
            <span className='font-semibold italic'>Ratings : </span>
            {restaurant.info.avgRatingString} (
            {restaurant.info.totalRatingsString})
          </p>
          <p className='mb-1'>
            <span className='font-semibold italic'>Delivery Time : </span>{' '}
            {restaurant.info.sla.slaString}
          </p>
          <p className=''>
            <span className='font-semibold italic'> Last Mile Travel : </span>
            {restaurant.info.sla.lastMileTravelString}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
