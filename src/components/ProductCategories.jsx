import React, { useState, useEffect } from 'react';

const ProductCategories = () => {
  const [categories, setCategories] = useState([]); // State to store unique product categories
  const [error, setError] = useState(null); // State to store error message

  useEffect(() => {
    fetchData(); // Fetch categories when component mounts
  }, []);

  // Function to fetch product data and extract categories
  async function fetchData() {
    try {
      const response = await fetch('https://fakestoreapi.in/api/products'); // Fetching product data from the API
      const dataJson = await response.json(); // Parsing the response as JSON
      
      if (dataJson?.products) {
        // Extract unique categories using map and Set
        const uniqueCategories = Array.from(
          new Set(dataJson.products.map((product) => product.category))
        );
        setCategories(uniqueCategories);
      }
    } catch (error) {
      setError("Something went wrong while fetching the categories.");
      console.error(error);
    }
  }

  return (
    <div className="h-80 bg-gray-800 p-3 lg:px-12">
      <h2 className="text-xl lg:text-4xl font-semibold mb-4 text-white">Categories</h2>
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
      <div className="grid grid-cols-3 gap-y-8 gap-x-2">
        {categories.length !== 0 ? (
          categories.map((category) => (
            <button
              key={category}
              className="bg-gray-300 hover:bg-orange-400 text-gray-800 font-semibold py-2 px-4 rounded"
            >
              {category}
            </button>
          ))
        ) : (
          <p className="text-white">Loading categories...</p>
        )}
      </div>
    </div>
  );
};

export default ProductCategories;
