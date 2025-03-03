

import React, { useState } from 'react';
import { Button } from 'antd';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import "../css/adminInsert.css"; // Import CSS

const Insert = () => {
    const [input, setInput] = useState({});
    const [myimage, setMyimage] = useState(null);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInput(values => ({ ...values, [name]: value }));
    };

    const handleImage = (e) => {
        setMyimage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!myimage) {
            alert("Please select an image");
            return;
        }

        const formData = new FormData();
        formData.append("file", myimage);
        formData.append('upload_preset', 'First_Preset');
        formData.append('cloud_name', 'dilbe0lbx');

        try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/dilbe0lbx/image/upload', formData);
            console.log('Image uploaded:', response.data);

            const api1 = "https://sports-ecommerce-website.onrender.com/product/productsave";
            await axios.post(api1, { ...input, image: response.data.url });
            alert("Data saved successfully!");
        } catch (error) {
            console.error("Error uploading image or saving data:", error);
            alert("Error occurred. Please check the console for details.");
        }
    };

    return (
        <div className="container">
            <h1 className="heading">This is insert page</h1>
            
            <div className="form-group">
                <label htmlFor="name">Product Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter product name"
                    value={input.name || ''}
                    onChange={handleInput}
                    className="input"
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="description">Product Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Enter product description"
                    value={input.description || ''}
                    onChange={handleInput}
                    className="input"
                />
            </div>

            <div className="form-group">
                <label htmlFor="category">Category:</label>
                <Form.Select
                    aria-label="Category"
                    name="category"
                    value={input.category || ''}
                    onChange={handleInput}
                    className="select"
                >
                    <option>Select Category</option>
                    <option value="mens">Men</option>
                    <option value="womens">Women</option>
                    <option value="kids">Kids</option>
                </Form.Select>
            </div>

            <div className="form-group">
                <label htmlFor="price">Product Price:</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    placeholder="Enter product price"
                    value={input.price || ''}
                    onChange={handleInput}
                    className="input"
                />
            </div>

            <div className="form-group">
                <label htmlFor="sportscategory">Sports Category:</label>
                <Form.Select
                    aria-label="Sports Category"
                    name="sportscategory"
                    value={input.sportscategory || ''}
                    onChange={handleInput}
                    className="select"
                >
                    <option>Select Sports Category</option>
                    <option value="cricket">Cricket</option>
                    <option value="football">Football</option>
                    <option value="badminton">Badminton</option>
                    <option value="tennis">Tennis</option>
                    <option value="treadmil">Treadmills</option>
                    <option value="homegym">HomeGym</option>
                    <option value="volleyball">VolleyBall</option>
                    <option value="basketball">BasketBall</option>
                </Form.Select>
            </div>

            <div className="form-group">
                <label htmlFor="brandname">Brand Name:</label>
                <Form.Select
                    aria-label="Brand Name"
                    name="brandname"
                    value={input.brandname || ''}
                    onChange={handleInput}
                    className="select"
                >
                    <option>Select Brand Name</option>
                    <option value="adidas">Adidas</option>
                    <option value="pume">Puma</option>
                    <option value="nike">Nike</option>
                    <option value="yonex">Yonex</option>
                    <option value="nivia">Nivia</option>
                </Form.Select>
            </div>

            <div className="form-group">
                <label htmlFor="file">Upload Image:</label>
                <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleImage}
                    className="input"
                />
            </div>

            <Button type="primary" onClick={handleSubmit}>
                Upload Data
            </Button>
        </div>
    );
};

export default Insert;
