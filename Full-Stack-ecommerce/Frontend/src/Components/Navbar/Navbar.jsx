// import React, { useState } from 'react'
// import { FaCartShopping } from 'react-icons/fa6';
// import { IoMdSearch } from 'react-icons/io';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [menu, setMenu] = useState("shop")
//   return (
//     <div className=' relative z-40 m-4 lg:px-[40px]'>
//       <div className=''>
//         {/* Logo and Links */}
//         <div className='flex justify-between items-center '>
//           <div className='flex items-center gap-20'>
//             <a className='text-purple-400 font-semibold tracking-widest text-xl uppercase sm:text-2xl' href="#">TrendyMart</a>

//             <div className=''>
//   <ul className='flex items-center gap-8 sm:gap-4 text-gray-400 font-semibold cursor-pointer text-lg'>
//   <li 
//       className={`Navli ${menu === "shop" ? "text-gray-400" : "hover:text-gray-600"}`} 
//       onClick={() => setMenu("shop")}
//     ><Link to='/'>Shop</Link>

//     </li>
//     <li 
//       className={`Navli ${menu === "men" ? "text-gray-400" : "hover:text-gray-600"}`} 
//       onClick={() => setMenu("men")}
//     ><Link to='/mens'>
//       Men
//     </Link>
//     </li>

//     <li 
//       className={`Navli ${menu === "women" ? "text-gray-400" : "hover:text-gray-600"}`} 
//       onClick={() => setMenu("women")}
//     >
//      <Link to='/womens'>
//       Women
//     </Link>
//     </li>
//     <li 
//       className={`Navli ${menu === "kids" ? "text-gray-400" : "hover:text-gray-600"}`} 
//       onClick={() => setMenu("kids")}
//     >
//       <Link to='/kids'>
//       Kids
//     </Link>
//     </li>
//   </ul>
// </div>

//           </div>
//           {/* Navbar Right Secton */}
//           <div className='flex items-center justify-between gap-4'>
//               <div className='relative group hidden sm:block'>
//                 <input type="text"placeholder='Search' className='search-bar border' />
//                 <IoMdSearch
//                 className='text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-1.5 duration-200' /> 
//               </div>
//               {/* Cart Section */}
//               <div>
//                 <Link to='/cart'>
//                 <button className='relative p-3'>
//                   <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400'/>
//                   <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>10</div>
//                 </button>
//                 </Link>
//               </div>
//               <div>
//                 <Link to='/login'>
//                 <button className='border text-sm border-gray-600 rounded-full p-1 w-20 '>Login</button>
//                 </Link>
//               </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar
// ---------------------------------------
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { FaCartShopping } from 'react-icons/fa6'
// import { IoMdSearch } from 'react-icons/io';

// const Navbar = () => {
//   const [menu, setMenu] = useState("shop");
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

//   return (
//     <div className='relative z-40 m-4 lg:px-[40px]'>
//       <div className=''>
//         {/* Navbar Top Section */}
//         <div className='flex justify-between items-center '>
//           <div className='flex items-center gap-20'>
//             {/* Logo */}
//             <a className='text-purple-400 font-semibold tracking-widest text-xl uppercase sm:text-2xl' href="#">
//               TrendyMart
//             </a>

//             {/* Desktop Links */}
//             <div className='hidden lg:block'>
//               <ul className='flex items-center gap-8 text-gray-400 font-semibold cursor-pointer text-lg'>
//                 <li className={`Navli ${menu === "shop" ? "text-gray-400" : "hover:text-gray-600"}`} onClick={() => setMenu("shop")}>
//                   <Link to='/'>Shop</Link>
//                 </li>
//                 <li className={`Navli ${menu === "men" ? "text-gray-400" : "hover:text-gray-600"}`} onClick={() => setMenu("men")}>
//                   <Link to='/mens'>Men</Link>
//                 </li>
//                 <li className={`Navli ${menu === "women" ? "text-gray-400" : "hover:text-gray-600"}`} onClick={() => setMenu("women")}>
//                   <Link to='/womens'>Women</Link>
//                 </li>
//                 <li className={`Navli ${menu === "kids" ? "text-gray-400" : "hover:text-gray-600"}`} onClick={() => setMenu("kids")}>
//                   <Link to='/kids'>Kids</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Side: Search, Cart, Login */}
//           <div className='flex items-center gap-4'>
//             {/* Search */}
//             <div className='relative group hidden sm:block'>
//               <input type="text" placeholder='Search' className='search-bar border rounded-full pl-4 pr-8 py-1' />
//               <IoMdSearch className='text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-1.5 duration-200' />
//             </div>

//             {/* Cart */}
//             <Link to='/cart'>
//               <button className='relative p-3'>
//                 <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400' />
//                 <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>10</div>
//               </button>
//             </Link>

//             {/* Login */}
//             <Link to='/login'>
//               <button className='border text-sm border-gray-600 rounded-full p-1 w-20 '>Login</button>
//             </Link>

//             {/* Hamburger Icon for Mobile */}
//             <button className='lg:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
//               {isMenuOpen ? <FaTimes className='text-2xl text-gray-600' /> : <FaBars className='text-2xl text-gray-600' />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className='lg:hidden mt-4'>
//             <ul className='flex flex-col gap-4 text-gray-400 font-semibold cursor-pointer text-lg'>
//               <li className={`Navli ${menu === "shop" ? "text-gray-400" : "hover:text-gray-600"}`} onClick={() => setMenu("shop")}>
//                 <Link to='/'>Shop</Link>
//               </li>
//               <li className={`Navli ${menu === "men" ? "text-gray-400" : "hover:text-gray-600"}`} onClick={() => setMenu("men")}>
//                 <Link to='/mens'>Men</Link>
//               </li>
//               <li className={`Navli ${menu === "women" ? "text-gray-400" : "hover:text-gray-600"}`} onClick={() => setMenu("women")}>
//                 <Link to='/womens'>Women</Link>
//               </li>
//               <li className={`Navli ${menu === "kids" ? "text-gray-400" : "hover:text-gray-600"}`} onClick={() => setMenu("kids")}>
//                 <Link to='/kids'>Kids</Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// ---------------------

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { IoMdSearch } from 'react-icons/io';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state
  const navigate = useNavigate();

  // Toggle authentication (for demo purposes, replace with real login/logout logic)
  const handleLogout = () => {
    setIsAuthenticated(false); // Set isAuthenticated to false on logout
    // Clear any session tokens or cookies here if applicable
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className='relative z-40 m-4 lg:px-[40px]'>
      <div className=''>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-20'>
            {/* Logo */}
            <a className='text-purple-400 font-semibold tracking-widest text-xl uppercase sm:text-2xl' href="#">
              TrendyMart
            </a>

            {/* Desktop Links */}
            <div className='hidden lg:block'>
              <ul className='flex items-center gap-8 text-gray-400 font-semibold cursor-pointer text-lg'>
                <li className={`Navli ${menu === "shop" ? "text-gray-400" : "hover:text-gray-600"}`} onClick={() => setMenu("shop")}>
                  <Link to='/'>Shop</Link>
                </li>
                <li className={`Navli ${menu === "men" ? "text-gray-400" : "hover:text-gray-600"}`} onClick={() => setMenu("men")}>
                  <Link to='/mens'>Men</Link>
                </li>
                <li className={`Navli ${menu === "women" ? "text-gray-400" : "hover:text-gray-600"}`} onClick={() => setMenu("women")}>
                  <Link to='/womens'>Women</Link>
                </li>
                <li className={`Navli ${menu === "kids" ? "text-gray-400" : "hover:text-gray-600"}`} onClick={() => setMenu("kids")}>
                  <Link to='/kids'>Kids</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Search, Cart, Login/Logout */}
          <div className='flex items-center gap-4'>
            {/* Search */}
            <div className='relative group hidden sm:block'>
              <input type="text" placeholder='Search' className='search-bar border rounded-full pl-4 pr-8 py-1' />
              <IoMdSearch className='text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-1.5 duration-200' />
            </div>

            {/* Cart */}
            <Link to='/cart'>
              <button className='relative p-3'>
                <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400' />
                <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>10</div>
              </button>
            </Link>

            {/* Login/Logout Button */}
            {isAuthenticated ? (
              <button onClick={handleLogout} className='border text-sm border-gray-600 rounded-full p-1 w-20'>
                Logout
              </button>
            ) : (
              <Link to='/login'>
                <button onClick={() => setIsAuthenticated(true)} className='border text-sm border-gray-600 rounded-full p-1 w-20'>
                  Login
                </button>
              </Link>
            )}

            {/* Hamburger Icon for Mobile */}
            <button className='lg:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes className='text-2xl text-gray-600' /> : <FaBars className='text-2xl text-gray-600' />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='lg:hidden mt-4'>
            <ul className='flex flex-col gap-4 text-gray-400 font-semibold cursor-pointer text-lg'>
              <li className={`Navli ${menu === "shop" ? "text-gray-400" : "hover:text-gray-600"}`} onClick={() => setMenu("shop")}>
                <Link to='/'>Shop</Link>
              </li>
              <li className={`Navli ${menu === "men" ? "text-gray-400" : "hover:text-gray-600"}`} onClick={() => setMenu("men")}>
                <Link to='/mens'>Men</Link>
              </li>
              <li className={`Navli ${menu === "women" ? "text-gray-400" : "hover:text-gray-600"}`} onClick={() => setMenu("women")}>
                <Link to='/womens'>Women</Link>
              </li>
              <li className={`Navli ${menu === "kids" ? "text-gray-400" : "hover:text-gray-600"}`} onClick={() => setMenu("kids")}>
                <Link to='/kids'>Kids</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
