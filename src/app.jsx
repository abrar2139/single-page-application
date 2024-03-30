import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavbarComponent from './components/navbar'
import FooterComponent from './components/footer'
import {Homepage} from './home'
import Aboutpage from './about'
import Servicespage from './services'
import Pricingpage from './pricing'
import Contactpage from './contact'
import Cartpage from './cart'
import { CartProvider}  from 'react-use-cart'

const App = () => {
  return (
    <div>
        <CartProvider>
        <BrowserRouter>
        {/* {
          window.location=="/" 
        && window.location == "/about" 
        && window.location == "/services" 
        && window.location == "/info" 
        && window.location == "/contact" &&
      } */}
    <NavbarComponent/>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/about' element={<Aboutpage/>}/>
            <Route path='/services' element={<Servicespage/>}/>
            <Route path='/pricing' element={<Pricingpage/>}/>
            <Route path='/contact' element={<Contactpage/>}/>
            <Route path='/cart' element={<Cartpage/>}/>
            <Route path='*' element={<div className='flex flex-col justify-center items-center text-center h-screen'>
                <h1 className='text-2xl font-bold'>404 - page not found</h1>
                <p>the page you are tring to get isn't available </p>
            </div>}/>
        </Routes>
        <FooterComponent/>
        </BrowserRouter>
        </CartProvider>
    </div>
  )
}

export default App