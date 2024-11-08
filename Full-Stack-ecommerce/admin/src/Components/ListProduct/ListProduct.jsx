import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross from '../../assets/cross.png';

const ListProduct = () => {
    const [allproducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        try {
            const response = await fetch('http://localhost:4000/allproducts');
            const data = await response.json();

            // Ensure data.products is an array
            if (data.success && Array.isArray(data.products)) {
                setAllProducts(data.products);
            } else {
                console.error("Unexpected response format:", data);
                setAllProducts([]); // Set to empty array if format is unexpected
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            setAllProducts([]); // Fallback to an empty array on error
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    const remove_product = async (id)=>{
        await fetch('http://localhost:4000/remove',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id})
        })
        await fetchInfo();
    }
    return (
        <div className='list-product'>
            <h1>All Products List</h1>
            <div className="listproduct-format-main">
                <p>Title</p>
                <p>Products</p>
                <p>Category</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allproducts.length > 0 ? (
                    allproducts.map((product, index) => (
                        <div key={index} className="listproduct-format-main listproduct-format">
                            <p>{product.name}</p>
                            <img className='listproduct-product-icon' src={product.image} alt="Product" />
                            <p>{product.category}</p>
                            <p>${product.old_price}</p>
                            <p>${product.new_price}</p>
                            <img onClick = {()=>{remove_product(product.id)}} src={cross} className='listproduct-remove-icon' alt="" />
                        </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
        </div>
    );
};

export default ListProduct;
