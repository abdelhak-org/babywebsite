import React from 'react'

const Card = (props) => {
  return (
    <div className=' w-60 h-auto p-4 m-4 bg-white border rounded-md relative'>
    <img src={props.image} alt="images " className='h-60 w-60 rounded '/>
      <h3 className='text-center font-bold px-4 my-4' > {props.category}</h3>
      <p className='text-sm text-justify tracking-wide  px-4 my-8' > {props.description.slice(0,60)}</p>
      <div className='flex justify-around w-full h-auto items-center absolute bottom-0  '> 
        <button className='px-4 py-2 bg-gray-800 rounded text-white font-bold hover:bg-gray-400'>buyNow</button>
        < p className='font-bold tracking-wide text-center text-2xl text-gray-800'>{props.price}</p>
      </div>
    </div>
  )
}

export default Card
