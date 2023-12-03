import React from 'react';

const Card = ({ image, category, description, price }) => {
  const truncatedDescription = description.slice(0, 60);

  return (
    <div className='w-full md:w-[22%]   h-auto p-16 md:p-4 m-4 bg-white border border-gray-light shadow-lg rounded-md'>
      <img src={image} alt="images" className='w-full h-auto mx-auto md:h-60 md:w-60 rounded' />
      <h3 className='text-center font-bold px-4 my-2 font-inter capitalize'>{category}</h3>
      <p className='text-sm font-roboto text-["#333"] text-justify tracking-wide px-4 my-4'>{truncatedDescription}</p>
      <div className='flex w-full mb-8 mx-auto h-auto flex-row items-center md:justify-between justify-around'>
        <button className='px-4 py-2 bg-gray-800 rounded text-white font-bold hover:bg-gray-400'>buyNow</button>
        <p className='font-bold font-script tracking-wide text-center text-2xl text-gray-800'>{price}  $</p>
      </div>
    </div>
  );
}

export default Card;
