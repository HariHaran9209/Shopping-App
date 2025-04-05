import React, { useState } from 'react'
import '../css/Home.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import ExploreMenu from '../components/ExploreMenu'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
