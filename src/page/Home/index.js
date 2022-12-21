import React from 'react'
import MainSlider from '../../components/HomeComponents/MainSlider'
import Recent from '../../components/HomeComponents/RecentSection'
import SecondSlider from '../../components/HomeComponents/SecondSlider'
import Navbar from '../../components/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <MainSlider/>
    <SecondSlider></SecondSlider>
    <Recent/>
    </>
  )
}

export default Home