import React, { useState } from 'react'
import '../css/Home.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ExploreMenu from '../components/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay'
import AppDownload from '../components/AppDownload'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}></FoodDisplay>
      <AppDownload />
    </div>
  )
}

export default Home
