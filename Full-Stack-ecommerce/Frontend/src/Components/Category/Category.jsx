import React from 'react'
import Image1 from '../../assets/earphone.png'
import Image2 from '../../assets/watch1.png'
import Image3 from '../../assets/macbook.png'
import Button from '../Shared/Button'
const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
             {/* first col */}
             <div className='py-10 pl-6 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-4'>Earphone</p>
                        <Button
                        text="Browse"
                        bgColor={"bg-primary"}
                        textColor={"text-white"}>
                        </Button>
                    </div>
                </div>
                <img src={Image1} alt="" className='w-[280px] absolute bottom-0' />
             </div>
             {/* second col */}
             <div className='py-10 pl-6 bg-gradient-to-br from-black/90 to-blue-300 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-4'>Watch</p>
                        <Button
                        text="Browse"
                        bgColor={"bg-primary"}
                        textColor={"text-white"}>
                        </Button>
                    </div>
                </div>
                <img src={Image2} alt="" className='w-[250px] absolute bottom-9 ml-12 '  />
             </div>
             {/* third col */}
             <div className='col-span-2 py-10 pl-6 bg-gradient-to-br from-black/90 to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end'>
                <div>
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>With</p>
                        <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-4'>Laptop</p>
                        <Button
                        text="Browse"
                        bgColor={"bg-primary"}
                        textColor={"text-white"}>
                        </Button>
                    </div>
                </div>
                <img src={Image3} alt="" className='w-[480px] absolute bottom-10 left-44' />
             </div>
           </div>
        </div>
    </div>
  )
}

export default Category