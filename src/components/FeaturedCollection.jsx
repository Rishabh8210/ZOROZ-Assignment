import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
const FeaturedCollection = () => {
  // State hooks for storing product data and featured products
  const [prodData, setProdData] = useState([])
  const [featuredProds, setFeaturedProds] = useState([])
  
  
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, [])
  
  // Function to fetch product data from API
  async function fetchData() {
    try {
      
      const data = await fetch('https://fakestoreapi.in/api/products')  // Fetching product data from API
      const dataJson = await data.json() // Parsing the JSON response
      setProdData(dataJson?.products);
      
      // Filter products that are marked as popular (featured)
      let filterData = dataJson?.products?.filter(element => element.popular === true);
      setFeaturedProds(filterData)
      
    } catch {
      console.log("Something went wrong")
    }
  }
  return (
    <div className='h-fit w-full p-3 md:px-12'>
      {/* Section title */}
      <p className='text-2xl md:text-4xl  font-semibold'>Featured Collections</p>
      
      {/* Display featured products in a horizontal scrollable container */}
      <div className='w-full flex gap-5 py-5 overflow-auto'>
        {
          featuredProds && featuredProds.map((data, ind) => {
            return <ProductCard key={ind} data={data} />
          })
        }
      </div>
    </div>
  )
}

export default FeaturedCollection