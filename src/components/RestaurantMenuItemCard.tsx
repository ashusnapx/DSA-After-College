'use client'
import Image from 'next/image';
import { useState } from 'react';

const RestaurantMenuItemCard = ({ menuItem }:{menuItem:any}) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
    
    console.log(menuItem.description);

  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
      <Image
        src={menuItem.image}
        alt={menuItem.name}
        className='w-full h-40 object-cover rounded-md mb-4'
      />
      <h2 className='text-lg font-semibold mb-2'>{menuItem.name}</h2>
      <p className='text-gray-700 mb-4'>{menuItem.description}</p>
      <div className='flex items-center justify-between mb-4'>
        <p className='text-gray-700'>{menuItem.isVeg ? 'VEG' : 'NON-VEG'}</p>
        <p className='text-gray-700'>
          Rating: {menuItem.rating} ({menuItem.ratingCount} ratings)
        </p>
      </div>
      <p className='text-gray-700 mb-4'>Category: {menuItem.category}</p>
      <p className='text-gray-700 mb-4'>Price: {menuItem.price} Rupees</p>
      <div className='flex items-center justify-between'>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-md'
          onClick={handleAddToCart}
        >
          {quantity === 0 ? 'Add to Cart' : `${quantity} in Cart`}
        </button>
        {quantity > 0 && (
          <div className='flex items-center'>
            <button
              className='bg-blue-500 text-white px-3 py-1 rounded-l-md'
              onClick={handleDecrement}
            >
              -
            </button>
            <div className='bg-white border border-blue-500 px-3 py-1'>
              {quantity}
            </div>
            <button
              className='bg-blue-500 text-white px-3 py-1 rounded-r-md'
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenuItemCard;
