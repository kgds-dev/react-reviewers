/*
    Instructions (35mins)

    1. Create a list of products (Note: array of objects)
        - id
        - name
        - category

    2. Display all the available products on first load
    3. Use a dropdown/select element to filter the products by category
    4. Update the state when filter is selected
    5. Display a message when product does not exist or not found after selecting the filter on the dropdown
*/

import './ProductList.css';
import React, { useState } from 'react';

const ProductList = ({ products, categories }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = event => {
        setSelectedCategory(event.target.value);
    }

    const filteredProducts = selectedCategory 
        ? products.filter(product => product.category === selectedCategory) 
        : products;

    
    return (
        <div className="product-list-container">
            <h1>Product List</h1>
            <div>
                <label htmlFor="category">Filter by Category</label>
                <select value={selectedCategory} name="" id="category" onChange={handleCategoryChange}>
                    <option value="">All</option>
                    {categories.map(category => (
                        <option value={category} key={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            {filteredProducts.length > 0 ? (
                <ul>
                    {filteredProducts.map(product => (
                        <li key={product.id}>
                            {product.name} {product.category}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No products found</p>
            )}
        </div>
    )

}

export default ProductList;

