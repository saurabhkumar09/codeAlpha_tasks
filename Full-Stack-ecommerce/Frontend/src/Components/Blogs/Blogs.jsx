import React from 'react'
import Heading from '../Shared/Heading'
import Img1 from '../../assets/p1.png'
import Img2 from '../../assets/p9.png'
import Img3 from '../../assets/vr.png'

const BlogData = [
    {
        title: "How to Choose the Perfect Smartwatch",
        subtitle: "Key Features and Tips for Finding Your Ideal Wrist Companion",
        published: "October 19, 2024",
        Image: Img1,
    },
    {
        title: "Top Gadgets of 2024 You Can't Miss",
        subtitle: "Must-Have Devices for Every Tech Enthusiast",
        published: "September 12, 2024",
        Image: Img2,
    },
    {
        title: "Ultimate Guide to Choosing a VR Headset",
        subtitle: "How to Select the Best Virtual Reality Experience for Your Needs",
        published: "August 25, 2024",
        Image: Img3,
    }
]
const Blogs = () => {
    return (
        <div className='my-12'>
            <div className='container'>
                {/* Header section */}
                <Heading title="Recent News" subtitle={"Explore Our Blogs"} />
                {/* Blog section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                    {/* Blog card */}
                    {
                        BlogData.map((data) => (
                            <div key={data.title} className='bg-white'>
                               <div className='overflow-hidden rounded-2xl mb-2'>
                                <img src={data.Image} alt="" className='w-full h-[200px] object-cover rounded-2xl hover:scale-105 duration-500' /> 
                               </div>
                                 {/*content section*/}
                                 <div className='space-y-2'>
                                    <p className='text-xs text-gray-500'>{data.published}</p>
                                    <p className='line-clamp-2 text-sm text-gray-600'>{data.subtitle}</p>
                                 </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Blogs