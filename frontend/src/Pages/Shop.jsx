import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
 import Navbar from '../Components/Navbar/Navbar'
 


  const Shop = () => {
  return (
    <div> 
      <Navbar></Navbar>
      <Hero></Hero>
      <Popular></Popular>
      <Offer></Offer>
      <NewCollection></NewCollection>
      <NewsLetter></NewsLetter>
 
    </div>
  )
}
export default Shop