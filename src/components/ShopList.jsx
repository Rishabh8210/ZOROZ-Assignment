
import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard'; // Component to display individual product
import ShimerCardList from './ShimerCardList'; // Placeholder component for loading state

const ShopList = () => {
  // State hooks for search query, product data, and filtered product data
  const [search, setSearch] = useState(''); // Search input state
  const [productData, setProductData] = useState([]); // State to store all fetched product data
  const [filteredData, setFilteredData] = useState([]); // State to store filtered products based on search
  
  // useEffect hook to fetch product data on initial render
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Function to fetch data from the API
  async function fetchData() {
    try {
      const data = await fetch('https://fakestoreapi.in/api/products'); // API request to fetch products
      const dataJson = await data.json(); // Convert response to JSON
      setProductData(dataJson?.products); // Set product data
      setFilteredData(dataJson?.products); // Initially, display all products (before search filter)
    } catch {
      console.log("Something went wrong"); // Error handling in case the fetch fails
    }
  }

  const filterProduct = () => {
    const lowercaseSearch = search.toLowerCase();
    const filtered = productData.filter(element => {
      const lowercaseTitle = element.title.toLowerCase();
      return lowercaseTitle.includes(lowercaseSearch);
    });
    setFilteredData(filtered);
  };
  return (
    <div className="bg-bgColor w-screen p-5">
      <div className='w-full flex flex-col md:flex-row  justify-between'>
        <h2 className="text-3xl font-bold pt-8">Shop</h2>
        <div className='w-full md:w-1/3 flex py-7 gap-2'>
          <input className='h-12 w-5/6 px-3 text-xl rounded-xl' type='text' name='search' placeholder='Search Products' value={search} onChange={(e) => setSearch(e.target.value)} />
          <button className='h-12 w-28 rounded-md bg-orange-400 text-white font-semibold hover:bg-orange-700' onClick={filterProduct}>Search</button>
        </div>
      </div>
      {
        productData.length === 0 ? <ShimerCardList /> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredData.map((prod, index) => (
              <ItemCard key={index} prod={prod} />
            ))}
          </div>
        )
      }
    </div>
  );
};

export default ShopList;
