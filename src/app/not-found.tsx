import Image from 'next/image';

const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div className='w-1/2 flex flex-row items-center justify-between'>
        <Image src='/meme.gif' width={200} height={200} alt='meme' />
        <Image src='/meme.gif' width={200} height={200} alt='meme' />
        <Image src='/meme.gif' width={200} height={200} alt='meme' />
      </div>
      <h1 className='text-4xl mt-8'>Oops! Page not found</h1>
      <p className='text-lg mt-4'>
        The page you're looking for might have been removed or doesn't exist.
      </p>
    </div>
  );
};

export default ErrorPage;
