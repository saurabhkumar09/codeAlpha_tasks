import React from 'react';

const Item = (props) => {
  return (
    <div className='w-[350px] hover:scale-105 transition-transform duration-[0.6s] bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden flex flex-col items-center'> {/* Centered content */}
      
      <img src={props.image} alt={props.name} className="w-full h-[200px] object-contain mb-4" /> {/* Centered image */}
      
      <p className='my-1.5 text-lg font-medium text-gray-800 text-center'>{props.name}</p> {/* Centered product name */}
      
      <div className='flex gap-5 items-center justify-center'> {/* Centered prices */}
        <div className='text-gray-700 text-lg font-semibold'>
          {props.new_price}
        </div>
        <div className='text-gray-400 text-lg font-medium line-through'>
          {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item;
