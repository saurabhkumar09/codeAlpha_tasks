import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
const FotterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#",
    },
    {
        title: "Contact",
        link: "/#",
    },
    {
        title: "Blog",
        link: "/#",
    }
]
const Fotter = () => {
    return (
        <div>
            <div className='container'>
                <div className='grid md:grid-cols-3 pb-20 pt-5'>
                    {/* compny details */}
                    <div className='py-8 px-4'>
                        <a href="" className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>TRENDYMART</a>
                        <p className='text-gray-600 lg:pr-24 pt-3'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, nemo?
                        </p>

                    </div>
                    {/* fotter links */}
                    <div className='col-span-2 grid grid-cols-2
            sm:grid-cols-3 md:pl-10'>
                        <div className='py-8 px-4'>
                            <h1 className='text-xl font-bold sm:text-left mb-3'>
                                Important links
                            </h1>
                            <ul className='space-y-3'>
                                {
                                    FotterLinks.map((data, index) => (
                                        <li key={index}>
                                            <a className='text-gray-600 hover:text-gray-400 duration-300' href={data.link}>{data.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* company add */}
                        <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>
                                Address
                            </h1>
                           <div>
                            <div className='flex items-center gap-3'>
                               <FaLocationArrow/>
                               <p>Roorkee, Uttarakhand</p>
                            </div>
                             <div className='flex items-center gap-3 mt-6'>
                                <FaMobileAlt/>
                               <p>+91 8239788377</p>
                             </div>
                             {/* social links */}
                             <div className='flex items-center gap-3 mt-6'>
                                <a href="#">
                                    <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                                </a>
                                <a href="#">
                                    <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                                </a>
                             </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fotter