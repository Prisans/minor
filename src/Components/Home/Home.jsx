import React from 'react'
import Navbar from './Navbar/Navbar'
import Content from './Content/Content'
import '../Home/Home.css'

const Home = () => {
  return (
    <div className="home-container">

        <Navbar/>
        <Content/>

    </div>
  )
}

export default Home