import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard'
const OnSale = () => {
  // State to store all products and filtered on-sale products
  const [products, setProducts] = useState([])
  const [newProducts, setNewProducts] = useState([])

  useEffect(() => {
    fetchData();// Fetch data when the component mounts
  },[])


  async function fetchData(){
    try{
      const data = await fetch('https://fakestoreapi.in/api/products') // Fetch products from the API
      const dataJson = await data.json()
      // Store all products in state
      setProducts(dataJson?.products);

      // Filter products that are on sale
      let filterData = dataJson?.products.filter(element => element?.onSale === true);
      setNewProducts(filterData) // Store the on-sale products
    }catch{
      console.log("Something went wrong")
    }
  }
  return (
    <div className='min-h-80 w-full p-3 lg:px-12'>
         {/* On Sale section title */}
        <p className='text-2xl md:text-4xl font-semibold py-5'>On Sale</p>
        
         {/* Flex container to display on-sale products */}
        <div className='flex gap-5 overflow-auto'>
            {
              // Map through the filtered on-sale products and display each one using ProductCard component
              newProducts && newProducts.map((data, ind) => {
                 return <ProductCard key={ind} data = {data}/>
              })
            }
        </div>
    </div>
  )
}

export default OnSale