import React from 'react'
import Button from '../Shared/Button'

const ProductCard = ({data}) => {
  return (
    <div className='mb-10'>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-3'>
        {/* card section */}
        {data.map((data)=>(
            <div className='group' key={data.id}>
                <div className='relative bg-gray-200 p2 rounded-md'>
                    <img src={data.img} alt="" 
                    className='h-[170px] w-[200px] object-cover rounded-md' />
                    {/* hover button */}
                    <div className='hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 h-full'>
                        <Button
                        text={"Add to cart"}
                        bgColor={"bg-primary"}
                        textColor={"text-white"}
                        smallSize="py-1 px-1 text-sm" />
                    </div>
                </div>
                <div className='leading-7'>
                    <h2 className='font-semibold'>{data.title}</h2>
                    <h2 className='font-bold'>${data.price}</h2>
                </div>
            </div>
        ))}
       </div>
    </div>
  )
}

export default ProductCard