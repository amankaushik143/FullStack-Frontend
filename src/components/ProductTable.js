import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log('API Response:', data); // Debug API response
        setProducts(data); // Update the products state
        console.log('Updated Products State:', data); // Log updated state
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to fetch products. Please try again later.');
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {error ? (
        <p>{error}</p>
      ) : products.length > 0 ? (
        <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock Quantity</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product?.productName || 'No Name'}</td>
                <td>{product?.description || 'No Description'}</td>
                <td>${product?.price ? parseFloat(product.price).toFixed(2) : '0.00'}</td>
                <td>{product?.stockQuantity || '0'}</td>
                <td>{product?.category?.categoryName || 'No Category'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductTable;
