import React from 'react' // Importing React
import MainHome from './MainHome' // Importing the MainHome component
import OnSale from './OnSale' // Importing the OnSale component
import SaleBanner from './SaleBanner' // Importing the SaleBanner component
import ProductCategories from './ProductCategories' // Importing the ProductCategories component
import FeaturedCollection from './FeaturedCollection' // Importing the FeaturedCollection component

const MainContainer = () => {
  return (
    <>
      {/* Main home section displaying the initial shop message and call to action */}
      <MainHome />
      
      {/* On Sale section showing discounted or featured products */}
      <OnSale />
      
      {/* Sale banner displaying the promotional sale details */}
      <SaleBanner />
      
      {/* Featured collection showcasing a selection of featured products */}
      <FeaturedCollection />
      
      {/* Product categories section allowing the user to filter products by category */}
      <ProductCategories />
    </>
  )
}

export default MainContainer
