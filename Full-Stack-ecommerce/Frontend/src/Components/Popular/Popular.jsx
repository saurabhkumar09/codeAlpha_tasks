import React from 'react';
import data_product from '../../assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 md:h-[85vh] lg:h-[60vh] px-4"> {/* Responsive gap and padding */}
      <h1 className="text-[#171717] text-2xl sm:text-4xl lg:text-5xl font-semibold text-center leading-tight"> {/* Responsive heading */}
        POPULAR IN ELECTRONIC DEVICES
      </h1>
      
      <div className="mt-[30px] sm:mt-[40px] lg:mt-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Responsive grid for items */}
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
