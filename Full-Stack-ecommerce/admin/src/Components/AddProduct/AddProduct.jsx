import React, { useState } from 'react'
import './AddProduct.css'
import { FaUpload } from 'react-icons/fa';

const AddProduct = () => {
    const [image, setImage] = useState(false); // Set initial state to null
    const [productDetail, setProductDetail] = useState({
        name:"",
        image:"",
        category:"",
        new_price:"",
        old_price:"",
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }
    const changeHandler = (e)=>{
        setProductDetail({...productDetail,[e.target.name]:e.target.value})
    }
    const addProduct = async ()=>{
        console.log(productDetail);
        let responseData;
        let product = productDetail;

        let formData = new FormData();
        formData.append('product',image);

        await fetch('http://localhost:4000/upload', {
            method:'POST',
            headers:{
                Accept:'application/json',
            },
            body:formData,
        }).then((resp)=> resp.json()).then((data)=>{responseData=data});

        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addProduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("Product Added"):alert("Failed")
            })
        }
    }
    return (
        <div className='addproduct'>
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetail.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
            </div>
            
            <div className='addproduct-price'>
                <div className='addproduct-itemfield'>
                    <p>Price</p>
                    <input value={productDetail.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
                </div>
                <div className='addproduct-itemfield'>
                    <p>Offer Price</p>
                    <input value={productDetail.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
                </div>
            </div>
            
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetail.category} onChange={changeHandler} name="category" className='add-product-selector'>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kids">Kids</option>
                </select>
            </div>
            
            <div className="addproduct-itemfield">
                <label htmlFor="file-input" className="image-upload-label">
                    {image ? (
                        <img 
                            src={URL.createObjectURL(image)} 
                            alt="Preview" 
                            className="addproduct-thumnail-img"
                        />
                    ) : (
                        <FaUpload size={100} className='addproduct-
                        thumnail-icon' />
                    )}
                </label>
                <input 
                    onChange={imageHandler} 
                    type="file" 
                    name='image' 
                    id='file-input' 
                    hidden 
                />
            </div>
            <button onClick={addProduct} className="addproduct-btn">Add</button>

        </div>
    )
}

export default AddProduct
