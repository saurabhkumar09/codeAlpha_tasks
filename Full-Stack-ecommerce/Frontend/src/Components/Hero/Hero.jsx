import React from 'react';
import Slider from 'react-slick';
import Image1 from '../../assets/headphone.png';
import Image2 from '../../assets/vr.png';
import Image3 from '../../assets/macbook.png';
import Button from '../Shared/Button';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlide = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Virtual Reality",
    title: "Immersive",
    title2: "VR Headset",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Apple MacBook",
    title: "Powerful",
    title2: "Laptop",
  }
];

const Hero = () => {
  const settings = {
    dots: true,                // Enable navigation dots
    infinite: true,            // Enable infinite scrolling
    speed: 800,                // Speed of transition (in milliseconds)
    slidesToShow: 1,           // Show one slide at a time
    slidesToScroll: 1,         // Scroll one slide at a time
    autoplay: true,            // Enable automatic sliding
    autoplaySpeed: 3000,       // Delay between automatic slide transitions (3 seconds)
    cssEase: "ease",           // Easing function for transitions
    pauseOnHover: true,        // Pause autoplay when hovering over a slide
    arrows: false,              // Enable navigation arrows
  };

  return (
    <div className='w-full px-4 sm:px-12 py-8'>  {/* Ensure the container is full width */}
      <div className='overflow-hidden rounded-3xl bg-gray-500 flex justify-center items-center min-h-[500px]'> {/* Fixed height */}
        {/* Hero Section */}
        <Slider {...settings} className="w-full max-w-[1200px] mx-auto">  {/* Limit slider width */}
          {HeroSlide.map((data) => (
            <div key={data.id} className="h-[500px] flex items-center justify-center"> {/* Set fixed height for slides */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 sm:py-12 md:py-8 w-full items-center'>
                
                {/* Text Section */}
                <div className='flex flex-col justify-center
                 text-center sm:text-left gap-4 px-6 h-full'>
                  <h2 className='text-2xl sm:text-3xl font-bold text-gray-700'>{data.subtitle}</h2>
                  <h1 className='text-3xl sm:text-5xl font-bold text-gray-900'>{data.title}</h1>
                  <h1 className='text-4xl uppercase text-brandWhite sm:text-[60px] lg:text-[80px] font-bold'>{data.title2}</h1>
                  <div className='mt-4'>
                    <Button 
                      text="Shop By Category"
                      bgColor="bg-primary"
                      textColor="text-white" 
                    />
                  </div>
                </div>

                {/* Image Section */}
                <div className='flex justify-center items-center'>
                  <img 
                    src={data.img} 
                    alt={data.subtitle}
                    className='w-[250px] sm:w-[400px] object-contain' 
                  />
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;