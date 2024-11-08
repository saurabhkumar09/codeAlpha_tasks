import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';

const KidsCategory = ({ onAddToCart }) => {
  const kidsProducts = [
    { id: 1, name: "Kids' T-Shirt", image: "/path/to/kids-tshirt.jpg", price: "$19", description: "Soft cotton t-shirt for daily wear." },
    { id: 2, name: "Kids' Sneakers", image: "/path/to/kids-sneakers.jpg", price: "$39", description: "Comfortable sneakers for active play." },
    { id: 3, name: "Kids' Backpack", image: "/path/to/kids-backpack.jpg", price: "$29", description: "Cute backpack for school and outings." },
    // Add more kids' products as needed
  ];

  const featuredProducts = [
    { id: 4, name: "Kids' Sunglasses", image: "/path/to/kids-sunglasses.jpg", price: "$14", description: "Stylish sunglasses for sunny days." },
    { id: 5, name: "Kids' Watch", image: "/path/to/kids-watch.jpg", price: "$24", description: "Fun watch to help kids learn time." },
    { id: 6, name: "Kids' Hoodie", image: "/path/to/kids-hoodie.jpg", price: "$34", description: "Cozy hoodie for chilly weather." },
  ];

  const heroImages = [
    { id: 1, src: "/path/to/hero-image1.jpg", text: "Explore the Fun World of Kids' Fashion!" },
    { id: 2, src: "/path/to/hero-image2.jpg", text: "Trendy Styles for Your Little Ones!" },
    { id: 3, src: "/path/to/hero-image3.jpg", text: "Comfort Meets Style in Kids' Clothing!" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 3000);
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

      {/* Kids' Products Section */}
      <section className="py-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Kids' Products</h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover our collection of kids' fashion that combines fun, comfort, and style.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {kidsProducts.map(product => (
            <div key={product.id} className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-3 rounded-md" />
              <h4 className="text-xl font-semibold text-gray-800 mb-1">{product.name}</h4>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-gray-500 font-semibold">{product.price}</p>
              <button
                className="bg-green-500 text-white rounded-full px-4 py-2 mt-3 hover:bg-green-600 transition-colors"
                onClick={() => onAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 bg-gradient-to-r from-green-100 to-blue-100 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Kids' Products</h2>
        <p className="text-center text-gray-700 mb-10 max-w-xl mx-auto">
          Our top picks for your little ones. Check out the latest trends!
        </p>
        <div className="flex flex-wrap justify-center gap-8 px-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg max-w-xs hover:shadow-xl transition-shadow duration-300">
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

      {/* New Arrivals Section */}
      <section className="py-12 bg-green-50 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">New Arrivals for Kids</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {kidsProducts.map(product => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
              <h4 className="text-xl font-semibold">{product.name}</h4>
              <p className="text-gray-600 mb-2">{product.price}</p>
              <button
                className="bg-green-500 text-white rounded-full px-4 py-2 mt-2 hover:bg-green-600"
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
            <p className="text-center text-gray-600">We ensure every product meets our high standards for kids.</p>
          </div>
          
          {/* Exceptional Customer Service */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <img src="/path/to/service-icon.svg" alt="Customer Service" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Exceptional Customer Service</h3>
            <p className="text-center text-gray-600">We are here to help you with any questions or concerns.</p>
          </div>
          
          {/* Fast & Reliable Shipping */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <img src="/path/to/shipping-icon.svg" alt="Fast Shipping" className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast & Reliable Shipping</h3>
            <p className="text-center text-gray-600">We ship quickly to get your kids' essentials to you faster.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Sign-Up Section */}
      <section className="py-12 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
        <p className="mb-6">Get the latest trends, exclusive offers, and more, straight to your inbox.</p>
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

export default KidsCategory;
