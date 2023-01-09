import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

// Arrow function
const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1> Fruit-Forward 🍉. Clinically Effective 🧪. Glowing Skin ✨ </h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
