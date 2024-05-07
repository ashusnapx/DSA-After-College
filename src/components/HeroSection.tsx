'use client';
import { toast } from 'sonner';
import { Button } from './ui/button';
import RestaurantList from './RestaurantList';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdMoney } from 'react-icons/md';
import { FaRankingStar } from 'react-icons/fa6';

const HeroSection = () => {

  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center justify-center space-x-3 mb-5'>
        <Button
          onClick={() => {
            toast.success('Button clicked');
          }}
          className='capitalize'
        >
          <FaRankingStar className='mr-2 text-xl text-yellow-500 ' /> Top rated
          restaurants
        </Button>

        <Button
          onClick={() => {
            toast.success('Button clicked');
          }}
        >
          <TbTruckDelivery className='mr-2 text-xl text-yellow-500' /> Fastest
          Delivery
        </Button>

        <Button
          onClick={() => {
            toast.success('Button clicked');
          }}
          className='capitalize'
        >
          <MdMoney className='mr-2 text-xl text-yellow-500' /> budget friendly
        </Button>
      </div>
      <RestaurantList />
    </div>
  );
};

export default HeroSection;
