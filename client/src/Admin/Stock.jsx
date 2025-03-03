import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Stock = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantityToSell, setQuantityToSell] = useState(1); // Default quantity to sell

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://sports-ecommerce-website.onrender.com/adminuser/adminstock/${productId}`);
        setProduct(response.data);
      } catch (error) {
        setError('Error fetching product data.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleSellProduct = async () => {
    if (product.quantity < quantityToSell) {
      alert('Not enough stock!');
      return;
    }

    try {
      const response = await axios.put(`https://sports-ecommerce-website.onrender.com/adminuser/adminstock/${productId}/sell`, {
        quantity: quantityToSell,
      });
      setProduct(response.data.product); // Update product data with remaining quantity
      alert('Product sold successfully!');
    } catch (error) {
      setError('Error processing the sale.');
      console.error(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Quantity in stock: {product.quantity}</p>
      {product.quantity <= 0 ? (
        <p style={{ color: 'red' }}>Out of Stock</p>
      ) : (
        <div>
          <input
            type="number"
            value={quantityToSell}
            onChange={(e) => setQuantityToSell(Number(e.target.value))}
            min="1"
            max={product.quantity}
          />
          <button onClick={handleSellProduct}>Sell</button>
        </div>
      )}
    </div>
  );
};

export default Stock;
