import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = 'user_id_here'; // Replace with actual user ID from context/auth
        const response = await axios.get(`http://localhost:4000/cart`, {
          params: { userId },
        });
        setCartItems(response.data.cartItems);
        setTotalPrice(response.data.totalPrice);
      } catch (error) {
        console.error('Error fetching cart:', error);
      }
    };

    fetchCart();
  }, []);

  const handleUpdateQuantity = async (productId, quantity) => {
    try {
      const userId = 'user_id_here'; // Replace with actual user ID from context/auth
      await axios.post(`http://localhost:4000/cart/update`, { userId, productId, quantity });
      const updatedCartItems = cartItems.map(item =>
        item.id === productId ? { ...item, quantity, total: item.price * quantity } : item
      );
      setCartItems(updatedCartItems);
      setTotalPrice(updatedCartItems.reduce((total, item) => total + item.total, 0));
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-500">Your cart is empty</p>
        ) : (
          cartItems.map(item => (
            <div
              key={item.id}
              className="flex items-center p-4 bg-white rounded-lg shadow-md border border-gray-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md border border-gray-300"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-xl font-semibold text-gray-700">{item.name}</h3>
                <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <p className="mr-2 text-sm text-gray-600">Quantity:</p>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 p-1 border rounded-md text-center text-gray-800 focus:outline-none"
                  />
                </div>
                <p className="mt-2 text-gray-600">Total: ${item.total.toFixed(2)}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold text-gray-800">Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Cart;
