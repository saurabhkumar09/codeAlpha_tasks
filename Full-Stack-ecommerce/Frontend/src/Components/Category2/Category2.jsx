import React from 'react'
import Image1 from '../../assets/jbl.png'
import Image2 from '../../assets/ps5.png'
import Image3 from '../../assets/images.png'
import Button from '../Shared/Button'
const Category2 = () => {
    return (
      <div className='py-8'>
          <div className='container'>
             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
               {/* first col */}
                <div className='col-span-2 py-10 pl-6 bg-gradient-to-br from-black to-orange-600 text-white rounded-3xl relative h-[320px] flex items-end'>
                  <div>
                      <div className='mb-4'>
                          <p className='mb-[2px] text-gray-400'>Enjoy</p>
                          <p className='text-2xl font-semibold mb-[2px]'>With</p>
                          <p className='text-4xl xl:text-5xl font-bold opacity-30 mb-4'>Speaker</p>
                          <Button
                          text="Browse"
                          bgColor={"bg-primary"}
                          textColor={"text-white"}>
                          </Button>
                      </div>
                  </div>
                  <img src={Image1} alt="" className='w-[480px] absolute bottom-[-80px] left-44' />
               </div>
               {/* ------------------------------ */}
               
               {/* second col */}
               <div className='py-10 pl-6 bg-gradient-to-br from-black/90 to-gray-300 text-white rounded-3xl relative h-[320px] flex items-end'>
                  <div>
                      <div className='mb-4'>
                          <p className='mb-[2px] text-gray-400'>Enjoy</p>
                          <p className='text-2xl font-semibold mb-[2px]'>With</p>
                          <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-4'>PS5</p>
                          <Button
                          text="Browse"
                          bgColor={"bg-primary"}
                          textColor={"text-white"}>
                          </Button>
                      </div>
                  </div>
                  <img src={Image2} alt="" className='w-[450px] absolute bottom-14 left-20 '  />
               </div>
               {/* third col */}
               <div className='py-10 pl-6 bg-gradient-to-br from-blue-500 to-pink-400 text-white rounded-3xl relative h-[320px] flex items-end'>
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
                  <img src={Image3} alt="" className='w-[380px] absolute bottom-13 right-1' />
               </div>
             </div>
          </div>
      </div>
    )
  }
  

export default Category2