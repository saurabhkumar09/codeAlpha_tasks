import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';

const MenCategory = ({ onAddToCart }) => {
  const menProducts = [
    { id: 1, name: "Men's Jacket", image: "/path/to/men-jacket.jpg", price: "$49", description: "Stylish and warm for the winter season." },
    { id: 2, name: "Men's Shoes", image: "/path/to/men-shoes.jpg", price: "$69", description: "Perfect for casual outings and formal events." },
    { id: 3, name: "Men's Shoes", image: "/path/to/men-shoes.jpg", price: "$69", description: "Perfect for casual outings and formal events." },
    // Add more men's products as needed
  ];

  const featuredProducts = [
    { id: 3, name: "Men's Sunglasses", image: "/path/to/men-sunglasses.jpg", price: "$29", description: "Stylish shades for all-day wear." },
    { id: 4, name: "Men's Watch", image: "/path/to/men-watch.jpg", price: "$129", description: "Elegant and timeless wristwatch." },
    { id: 5, name: "Men's Backpack", image: "/path/to/men-backpack.jpg", price: "$79", description: "Durable and spacious backpack for every adventure." },
  ];

  const heroImages = [
    { id: 1, src: "/path/to/hero-image1.jpg", text: "Discover the Latest Trends in Men's Fashion" },
    { id: 2, src: "/path/to/hero-image2.jpg", text: "Up to 50% Off on Select Items!" },
    { id: 3, src: "/path/to/hero-image3.jpg", text: "Style Meets Comfort – Shop Now" },
  ];

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-96 mb-10">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image.src} alt={image.text} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-4xl md:text-5xl text-white font-bold px-4 text-center">{image.text}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Men's Products Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Men's Products</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore our exclusive men's collection, crafted for style and functionality. Perfect for every occasion.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {menProducts.map(product => (
            <div key={product.id} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-3 rounded-md" />
              <h4 className="text-xl font-semibold text-gray-800 mb-1">{product.name}</h4>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-gray-500 font-semibold">{product.price}</p>
              <button
                className="bg-blue-500 text-white rounded-full px-4 py-2 mt-3 hover:bg-blue-600 transition-colors"
                onClick={() => onAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 bg-gradient-to-r from-blue-100 to-indigo-100 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Men's Products</h2>
        <p className="text-center text-gray-700 mb-10 max-w-xl mx-auto">
          Handpicked favorites for the season. Don’t miss out on our premium selections.
        </p>
        <div className="flex flex-wrap justify-center gap-8 px-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg max-w-xs hover:shadow-xl transition-shadow duration-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-3 rounded-md" />
              <h4 className="text-xl font-semibold text-gray-800 mb-1">{product.name}</h4>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-gray-500 font-semibold">{product.price}</p>
              <button
                className="bg-purple-500 text-white rounded-full px-4 py-2 mt-3 hover:bg-purple-600 transition-colors"
                onClick={() => onAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
{/* New Arrivals Section */}
<section className="py-12 bg-blue-50 text-gray-800">
  <h2 className="text-3xl font-bold text-center mb-6">New Arrivals</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
    {menProducts.map(product => (
      <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
        <h4 className="text-xl font-semibold">{product.name}</h4>
        <p className="text-gray-600 mb-2">{product.price}</p>
        <button
          className="bg-blue-500 text-white rounded-full px-4 py-2 mt-2 hover:bg-blue-600"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</section>
{/* Trending Now Section */}
<section className="py-12 text-gray-800 bg-gradient-to-r from-yellow-100 to-orange-200">
  <h2 className="text-3xl font-bold text-center mb-6">Trending Now</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
    {menProducts.map(product => (
      <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
        <h4 className="text-xl font-semibold">{product.name}</h4>
        <p className="text-gray-600 mb-2">{product.price}</p>
        <button
          className="bg-orange-500 text-white rounded-full px-4 py-2 mt-2 hover:bg-orange-600"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</section>
{/* Flash Deals Section */}
<section className="py-12 bg-red-50 text-gray-800">
  <h2 className="text-3xl font-bold text-center mb-6">Limited-Time Offers</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
    {menProducts.map(product => (
      <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative">
        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          Ends in {product.timeLeft}
        </span>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
        <h4 className="text-xl font-semibold">{product.name}</h4>
        <p className="text-gray-600 mb-2">{product.price}</p>
        <button
          className="bg-red-500 text-white rounded-full px-4 py-2 mt-2 hover:bg-red-600"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
</section>

      {/* Why Shop With Us Section */}
<section className="py-12 bg-gray-100 text-gray-800">
  <h2 className="text-3xl font-bold text-center mb-6">Why Shop With Us</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
    {/* High-Quality Products */}
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      <img src="/path/to/quality-icon.svg" alt="Quality Products" className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold mb-2">High-Quality Products</h3>
      <p className="text-center text-gray-600">We offer only the best materials, ensuring durability and comfort in every product.</p>
    </div>
    
    {/* Exceptional Customer Service */}
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      <img src="/path/to/service-icon.svg" alt="Customer Service" className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Exceptional Customer Service</h3>
      <p className="text-center text-gray-600">Our dedicated team is here to help you with any questions or concerns you may have.</p>
    </div>
    
    {/* Fast & Reliable Shipping */}
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
      <img src="/path/to/shipping-icon.svg" alt="Fast Shipping" className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold mb-2">Fast & Reliable Shipping</h3>
      <p className="text-center text-gray-600">Enjoy fast and reliable shipping with options to suit your schedule and budget.</p>
    </div>
  </div>
</section>
{/* Newsletter Sign-Up Section */}
<section className="py-12 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center">
  <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
  <p className="mb-6">Subscribe to receive the latest updates, exclusive offers, and more.</p>
  <div className="flex justify-center">
    <input
      type="email"
      placeholder="Enter your email"
      className="p-3 rounded-l-full w-1/3 outline-none text-gray-800"
    />
    <button className="bg-yellow-400 text-gray-800 font-semibold px-6 py-3 rounded-r-full hover:bg-yellow-500">
      Subscribe
    </button>
  </div>
</section>
    </div>
  );
};

export default MenCategory;
