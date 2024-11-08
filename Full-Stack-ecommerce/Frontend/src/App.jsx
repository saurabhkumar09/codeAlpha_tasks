import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Pages/Cart';
import LoginSign from './Pages/LoginSign';
import MenCategory from './Pages/MenCategory';
import WomenCategory from './Pages/WomenCategory';
import KidsCategory from './Pages/KidsCategory';
import Category from './Components/Category/Category';
import Category2 from './Components/Category2/Category2';
import Services from './Components/Services/Services';
import Banner from './Components/Banner/Banner';
import Blogs from './Components/Blogs/Blogs';
import headphone from './assets/headphone.png';
import watch from './assets/p1.png';
import Products from './Components/Products/Products';
import Partners from './Components/Partners/Partners';
import Fotter from './Components/Fotter/Fotter';

const BannerData = {
  discount: "30%OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winner Sale",
  title4: "This brand is popular for their Bass and their Music",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30%OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: watch,
  title2: "Air Solo Bass",
  title3: "Winner Sale",
  title4: "This brand is popular for their Bass and their Music",
  bgColor: "#A7C7E7",
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Dedicated routes for Cart and Category pages to show only those components */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/mens" element={<MenCategory category="men" />} />
        <Route path="/womens" element={<WomenCategory category="women" />} />
        <Route path="/kids" element={<KidsCategory category="kid" />} />

        {/* Main layout containing shared components for all other routes */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/login" element={<LoginSign />} />
              </Routes>
              <Category />
              <Category2 />
              <Services />
              <Banner data={BannerData} />
              <Products />
              <Banner data={BannerData2} />
              <Blogs />
              <Partners />
              <Fotter />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
