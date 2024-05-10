import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

const Card = ({ title, content }: CardProps): JSX.Element => (
  <div className='bg-white shadow-md rounded-md p-6'>
    <h2 className='text-lg font-semibold mb-2'>{title}</h2>
    <p className='text-gray-600'>{content}</p>
  </div>
);

export default Card;
