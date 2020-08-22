import React from 'react'
import Header from '../sections/Header'
import Home from '../sections/Home'
import Footer from '../sections/Footer'
import About from '../sections/About'
import '../components/Icons'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
      </main>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <Footer />
    </>
  );
}

export default App
