import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data.js'



function App() {

  const cards = data.map(item => {
    return (
      <Card 
          img={item.coverImg}
          rating={item.stats.rating}
          reviewCount={item.stats.reviewCount}
          country={item.location}
          title={item.title}
          price={item.price}

    />
    )
    

  })
  

  return (
      <div>
        <NavBar />
        <Hero />
        {cards}
        
      </div>
  )
}

export default App
